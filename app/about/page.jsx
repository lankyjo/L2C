import Emailform from "@/components/Home/Emailform";
import Image from "next/image";

export const metadata = {
  title: "About LankyJo | Web Developer & Digital Creator",
  description: "Get to know LankyJo—a passionate web developer dedicated to building user-friendly, high-performance, and visually appealing websites.",
};

export default function About() {
  return (
    <div className="px-3">
      <div className=" border border-black md:max-w-[80%] md:mx-auto mt-10">
        <div className="w-full max-w-[700px] lg:h-[400px] md:mt-10 rounded-lg overflow-hidden mx-auto h-[450px] relative ">
          <Image
            src="/abiut.jpg"
            fill
            alt="about image"
            className="object-cover object-center"
          />
        </div>
        <div className="p-5 px-10 py-10">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
<p className="mb-6"> Hello, I’m <strong>LankyJo</strong>—a passionate web developer, creative problem solver, and lifelong learner. My journey in technology began at a young age when I first discovered the magic of coding. I was fascinated by how a few lines of code could transform ideas into interactive experiences, and that curiosity has driven me ever since. </p> <p className="mb-6"> Over the years, I have immersed myself in web development, mastering <strong>HTML, CSS, and JavaScript</strong>, and diving into frameworks like <strong>React and Next.js</strong>. I love creating digital experiences that are not just visually stunning but also fast, responsive, and user-friendly. Whether it's refining UI interactions, optimizing performance, or exploring new design techniques, I thrive on building solutions that leave an impact. </p> <p className="mb-6"> While my focus is on frontend development, I’m also expanding my skills into <strong>backend technologies like Node.js, MongoDB, and Python</strong>. I’m currently learning how to build full-stack applications, and I enjoy solving real-world problems through <strong>AI</strong> and automation. </p> <p className="mb-6"> Beyond development, I have a growing interest in <strong>penetration testing</strong> and ethical hacking. Security has always intrigued me, and I aspire to become a <strong>penetration tester</strong>—someone who can identify vulnerabilities and help make digital systems safer. This journey is still unfolding, but I’m excited to explore more about <strong>offensive security, ethical hacking, and network defense</strong> as I continue learning. </p> <p className="mb-6"> When I’m not coding, I find inspiration in art, music, and deep conversations. I also enjoy pushing the boundaries of what’s possible with <strong>Web3</strong> and emerging technologies. This blog is my creative outlet—a space where I share my projects, insights, and lessons learned along the way. </p> <p> Thank you for stopping by! Whether you're a fellow developer, security enthusiast, or just someone curious about tech, I’d love to connect and grow together. 🚀 </p>        </div>
      </div>
      <Emailform />
    </div>
  );
}
