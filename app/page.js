import About from "@/components/Home/About";
import Blog from "@/components/Home/Blog";
import Emailform from "@/components/Home/Emailform";

export default function Home() {
  return (
  <>
      <main className="md:max-w-full px-4 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-3  md:divide-x divide-black mt-10 gap-0">
        <Blog />
        <About/>
      </main>
      <div id="contact">
      <Emailform/>
      </div>
  </>
  );
}
// ikejijoshua69
// QLVycj98M94zdmXd
// mongodb+srv://ikejijoshua69:QLVycj98M94zdmXd@cluster0.pncxt.mongodb.net/