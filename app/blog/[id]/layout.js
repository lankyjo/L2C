// In your BlogLayout file
export default function BlogLayout({ children }) {
  return <>{children}</>; // This wraps the blog post page inside the layout
}

export async function generateMetadata({ params }) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/blogs`, {
      cache: 'no-store'
    });
    
    if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);
    const blogs = await res.json();
    
    const blog = blogs.find(blog => blog._id === params.id);
    const title = blog ? blog.title : params.id;
    
    return {
      title: `LankyJo's Thought on: ${title}`,
      description: `Read about ${title} on LankyJo's blog.`,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: `LankyJo's Thought on: ${params.id}`,
      description: `Read about ${params.id} on LankyJo's blog.`,
    };
  }
}