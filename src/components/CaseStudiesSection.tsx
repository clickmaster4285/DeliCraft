import { useGsapFadeIn } from "./useGsapScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const caseStudies = [
  {
    image: caseStudy1,
    title: "Urban Bites Franchise",
    category: "Multi-Location Deli",
    desc: "Reduced order errors by 42% and cut average wait time from 12 to 6 minutes across 8 locations after implementing our POS and kitchen sync system.",
    stats: [
      { label: "Order Errors", value: "-42%" },
      { label: "Wait Time", value: "-50%" },
      { label: "Revenue", value: "+28%" },
    ],
  },
  {
    image: caseStudy2,
    title: "The Humble Loaf",
    category: "Artisan Sandwich Shop",
    desc: "A single-location artisan deli that scaled to 3 outlets in 18 months using our cloud platform. Inventory waste decreased by 35% with smart alerts.",
    stats: [
      { label: "Locations", value: "1→3" },
      { label: "Waste", value: "-35%" },
      { label: "Efficiency", value: "+60%" },
    ],
  },
  {
    image: caseStudy3,
    title: "Sweet & Savory Co.",
    category: "Dessert & Deli Hybrid",
    desc: "Integrated our custom order builder to handle their complex menu of 200+ customizable items. Customer satisfaction scores jumped from 3.8 to 4.7 stars.",
    stats: [
      { label: "Menu Items", value: "200+" },
      { label: "Satisfaction", value: "4.7★" },
      { label: "Speed", value: "+45%" },
    ],
  },
];

const CaseStudiesSection = () => {
  const ref = useGsapFadeIn(0.18);

  return (
    <section id="case-studies" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="gsap-fade inline-block font-accent text-accent italic text-sm uppercase tracking-widest mb-3">
            Success Stories
          </span>
          <h2 className="gsap-fade section-title">Case Studies</h2>
          <p className="gsap-fade section-subtitle max-w-2xl mx-auto">
            Real results from real food businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((item, i) => (
            <div key={i} className="gsap-fade card-rustic group cursor-pointer">
              <div className="relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <p className="font-body text-muted-foreground text-sm mb-4">{item.desc}</p>
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                  {item.stats.map((stat, j) => (
                    <div key={j} className="text-center">
                      <p className="font-heading text-lg font-bold text-primary">{stat.value}</p>
                      <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
