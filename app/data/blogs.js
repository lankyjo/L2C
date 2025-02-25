// export const blogs = [
//     {
//       id: 1,
//       image: '/blog1.webp',
//       date: "Jan 30, 2025",
//       title: "The Secret to Making Perfect Coffee at Home",
//       description:
//         "Master the art of brewing rich, flavorful coffee with these simple but powerful tips.",
//       content: `Coffee is more than just a morning ritual—it's an art form. In this comprehensive guide, we delve into the nuances of coffee brewing, from selecting the freshest beans to mastering your preferred brewing method. Discover the impact of water temperature, grind size, and brewing time on flavor extraction, and learn how small adjustments can yield a perfect cup every time. Whether you're using a French press, a pour-over system, or an espresso machine, you'll find actionable tips to elevate your home coffee experience to café-quality standards. Enjoy the journey into the world of coffee, where every detail matters and the perfect cup is always within reach.`
//     },
//     {
//       id: 2,
//       image: '/blog2.webp',
//       date: "Feb 05, 2025",
//       title: "10 Breathtaking Travel Destinations for 2025",
//       description:
//         "From hidden beaches to stunning mountain retreats, these are the places you need to visit this year.",
//       content: `Are you ready to explore the world like never before? This blog post takes you on a journey through ten of the most breathtaking travel destinations for 2025. From the crystal-clear waters of secluded tropical beaches to the awe-inspiring vistas of rugged mountain landscapes, discover locations that promise unforgettable experiences. We provide insider tips on the best times to visit, local cuisines to try, and cultural experiences that will enrich your travel itinerary. Whether you're an adventure seeker or a leisure traveler, these destinations offer something unique for everyone. Pack your bags and prepare to create memories that will last a lifetime.`
//     },
//     {
//       id: 3,
//       image: '/blog3.webp',
//       date: "Feb 12, 2025",
//       title: "The Psychology of Productivity: How to Get More Done",
//       description:
//         "Unlock the secrets to staying focused and making the most of your time with these proven strategies.",
//       content: `Productivity is not just about time management—it’s about understanding how your mind works and leveraging that insight to create effective habits. In this post, we break down the psychological factors that influence productivity. Learn how goal-setting, prioritization, and even the layout of your workspace can make a significant impact. We'll explore techniques such as time-blocking, the Pomodoro Technique, and mindfulness practices that help you stay focused. With scientific insights and practical tips, this guide empowers you to overcome procrastination and maximize your output, ultimately helping you achieve both personal and professional success.`
//     },
//     {
//       id: 4,
//       image: '/blog4.webp',
//       date: "Feb 20, 2025",
//       title: "Why Minimalist Living is More Than a Trend",
//       description:
//         "Learn how simplifying your space and lifestyle can lead to greater happiness and mental clarity.",
//       content: `Minimalist living is a lifestyle choice that goes beyond mere aesthetics. It is a deliberate decision to reduce clutter and focus on what truly matters. This article examines the philosophy behind minimalism, offering practical advice on how to declutter your space and your mind. Discover the benefits of living with less: from financial savings and reduced stress to enhanced creativity and more meaningful relationships. We discuss actionable steps to transition to a minimalist lifestyle, including tips for downsizing possessions, embracing digital minimalism, and creating a space that nurtures peace and productivity.`
//     },
//     {
//       id: 5,
//       image: '/blog5.webp',
//       date: "Mar 01, 2025",
//       title: "The Future of Technology: What to Expect in the Next Decade",
//       description:
//         "From AI breakthroughs to space travel, here’s what’s on the horizon for technology and innovation.",
//       content: `The future of technology promises to be as transformative as it is exciting. In this forward-looking post, we explore the key innovations that are set to revolutionize our lives over the next decade. From advancements in artificial intelligence and machine learning to groundbreaking developments in space exploration and renewable energy, we provide an in-depth analysis of emerging trends. Discover how these innovations will impact industries such as healthcare, transportation, and communication, and learn what this means for the global economy and society as a whole. Brace yourself for a deep dive into the future, where today's science fiction becomes tomorrow's reality.`
//     },
//   ];
  
import { useState, useEffect } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBlogs();
  }, []);

  return blogs;
};

export default useBlogs;
