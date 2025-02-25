import Link from 'next/link';
import React from 'react'
import { RiDeleteBin2Line } from "react-icons/ri";
import { Bounce, toast, ToastContainer } from 'react-toastify';

const AdminCard = ({blog, onDelete}) => {
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const response = await fetch("/api/blogs", {
        method: "DELETE",
        body: JSON.stringify({ id: blog._id }),
        headers: { "Content-Type": "application/json" },
      });

      // ✅ Check if response is OK before parsing JSON
      if (!response.ok) {
        const errorText = await response.text(); // Get error message
        throw new Error(errorText || "Failed to delete blog");
      }

      onDelete(blog._id);

      toast.success('Deleted successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce
      });

    } catch (error) {
      console.error("Delete error:", error);
      toast.error(error.message || "Error deleting blog", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce
      });
    }
  };

  return (
    <div className='flex justify-between py-2'>
        <div className='flex gap-3 flex-1'>
            <div className='h-16 w-16 border-black border aspect-square'>
                <img src={blog.image} className='w-full h-full object-cover object-center'/>
            </div>
            <Link href={`/blog/${blog._id}`}>{blog.title}</Link>
        </div>
        <div className='flex justify-end'>
        <RiDeleteBin2Line className='text-2xl text-red-600 cursor-pointer' onClick={handleDelete}/>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default AdminCard