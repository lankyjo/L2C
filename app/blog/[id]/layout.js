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
    
    // If blog not found, use fallback values
    if (!blog) {
      return {
        title: `LankyJo's Thought on: ${params.id}`,
        description: `Read about ${params.id} on LankyJo's blog.`,
      };
    }
    
    // Get blog title and description
    const title = blog.title;
    const description = blog.description || `Read about ${title} on LankyJo's blog.`;
    
    // Get image URL and ensure it's absolute
    const imageUrl = blog.image;
    const fullImageUrl = imageUrl?.startsWith('http') 
      ? imageUrl 
      : `${baseUrl}${imageUrl}`;
    
    return {
      title: `LankyJo's Thought on: ${title}`,
      description: description,
      openGraph: {
        title: `LankyJo's Thought on: ${title}`,
        description: description,
        images: [
          {
            url: fullImageUrl,
            width: 1200,
            height: 630,
            alt: title,
          }
        ],
        type: 'article',
        publishedTime: blog.date,
      },
      twitter: {
        card: 'summary_large_image',
        title: `LankyJo's Thought on: ${title}`,
        description: description,
        images: [fullImageUrl],
      }
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: `LankyJo's Thought on: ${params.id}`,
      description: `Read about ${params.id} on LankyJo's blog.`,
    };
  }
}