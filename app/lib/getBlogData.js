// app/lib/getBlogData.js
export async function getAllBlogs() {
    // Use an absolute URL with origin
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 
                    (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
    
    const res = await fetch(`${baseUrl}/api/blogs`, {
      cache: 'no-store'
    });
    
    if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);
    return res.json();
  }
  
  export async function getBlogById(id) {
    const blogs = await getAllBlogs();
    return blogs.find(blog => blog._id === id);
  }