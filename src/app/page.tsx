import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/blog";

export default function Home() {
  const allPosts = getSortedPostsData();

  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Blog posts={allPosts} />
      <Contact />
      <Footer />
    </main>
  );
}
