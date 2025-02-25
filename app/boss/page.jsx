'use client'
// import { blogs } from "../data/blogs";
import { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import AdminCard from "@/components/AdminCard";
import useBlogs from "../data/blogs";
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";


export default function Boss(){
    const fetchedBlogs = useBlogs()

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isBlogSending, setIsBlogSending] = useState(false)
    const [blogs, setBlogs] = useState(fetchedBlogs);

    const handleDeleteFromUI = (deletedId) => {
      setBlogs((prevBlogs) => prevBlogs.filter(blog => blog._id !== deletedId));
    };
    useEffect(() => {
      if (fetchedBlogs) {
        setBlogs(fetchedBlogs);
      }
    }, [fetchedBlogs]);
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(file); // ✅ Save file to state
        setPreviewUrl(URL.createObjectURL(file)); // ✅ Show preview
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
         // Prevent form submission if any field is empty
    if (!image || !title.trim() || !description.trim() || !content.trim()) {
        alert("All fields are required!");
        return;
      }
      setIsBlogSending(true)

      const formData = new FormData();
      formData.append("image", image); // ✅ Send file
      formData.append("date", new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }));
      formData.append("title", title);
      formData.append("description", description);
      formData.append("content", content);
  
      try {
        const response = await fetch("/api/blogs", {
          method: "POST",
          body: formData, // ✅ Send FormData
        });
  
        if (!response.ok) throw new Error("Failed to add blog");
        const newBlog = await response.json();
        toast.success('Blog added successfully!')
        console.log("Blog added:", newBlog);

  
        // Reset form
        setImage(null);
        setTitle("");
        setDescription("");
        setContent("");
        setPreviewUrl(null);
        setIsBlogSending(false)
        window.location.reload()
      } catch (error) {
        console.error(error);
      }
    };
    return(
        <div className="px-2 max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-bold font-bungee">ADMIN DASHBOARD</h2>

<div className=" space-y-4 mt-5 w-full  border p-5 border-black ">
 <h2 className="text-xl font-semibold">Add blog</h2>
 <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image Upload */}
          <div
            style={{ backgroundImage: previewUrl ? `url(${previewUrl})` : "none" }}
            className="mx-auto w-56 h-56 bg-cover bg-center border border-black border-dashed rounded-md relative flex justify-center items-center"
          >
            {!previewUrl && (
              <label htmlFor="dropZone" className="w-full h-full cursor-pointer flex flex-col items-center justify-center hover:bg-slate-300/20 duration-500">
                <FaCloudUploadAlt className="text-3xl" />
                <p>Upload Image</p>
              </label>
            )}
            <input required id="dropZone" type="file" accept="image/*" onChange={handleImageChange} className="hidden absolute" />
          </div>

          {/* Title */}
          <input
            className="w-full p-4 bg-transparent rounded-md border-slate-600 border"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Description */}
          <input
            className="w-full p-4 bg-transparent rounded-md border-slate-600 border"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          {/* Content */}
          <div className="w-full p-4 bg-transparent rounded-md border-slate-600 border resize-none">
          <ReactQuill 
            // required
            placeholder="Content"
            theme="snow" value={content} onChange={setContent} />
            
          </div>

          <div className="text-center">
            <button type="submit" className="bg-red-500 text-white py-4 px-8 rounded-md">{isBlogSending?'...loading':'submit'}</button>
          </div>
          <ToastContainer />
        </form>
</div>

<section className="mt-10 border border-black p-5 divide-y divide-black">
    {
        blogs.length!==0?
        blogs.map((blog)=>(
        <AdminCard key={blog._id} blog={blog} onDelete={handleDeleteFromUI}/>
        )):<Loader/>
    }
</section>
        </div>
    )
}