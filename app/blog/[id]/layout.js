export default function BlogLayout({ children }) {
    return <>{children}</>; // This wraps the blog post page inside the layout
  }
  
  export async function generateMetadata({ params }) {
    return {
      title: `LankyJo's Thought on: ${params.id}`,
      description: `Read about ${params.id} on LankyJo's blog.`,
    };
  }
  