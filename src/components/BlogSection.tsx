import { useGsapFadeIn } from "./useGsapScrollTrigger";
import { Calendar, ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    image: blog1,
    title: "The Science of Sourdough: Why Artisan Bread is Making a Comeback",
    excerpt: "Explore the fermentation revolution and how artisan bakeries are winning customer loyalty with traditional techniques and modern branding.",
    date: "April 10, 2026",
    category: "Industry Trends",
  },
  {
    image: blog2,
    title: "5 Inventory Hacks That Save Delis Thousands Every Month",
    excerpt: "From FIFO systems to automated alerts, discover the inventory management strategies that top-performing delis swear by.",
    date: "March 28, 2026",
    category: "Operations",
  },
  {
    image: blog3,
    title: "Building the Perfect Sandwich: A POS System Perspective",
    excerpt: "How smart order builders are reducing customization errors and speeding up prep times in modern sandwich shops.",
    date: "March 15, 2026",
    category: "Technology",
  },
];

const BlogSection = () => {
  const ref = useGsapFadeIn(0.18);

  return (
    <section id="blog" className="section-padding bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="gsap-fade inline-block font-accent text-accent italic text-sm uppercase tracking-widest mb-3">
            Insights
          </span>
          <h2 className="gsap-fade section-title">From Our Blog</h2>
          <p className="gsap-fade section-subtitle max-w-2xl mx-auto">
            Tips, trends, and insights from the food-tech world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="gsap-fade card-rustic group cursor-pointer">
              <div className="relative overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-body">{post.date}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 font-body text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
