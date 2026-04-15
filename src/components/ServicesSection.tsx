import { useGsapFadeIn } from "./useGsapScrollTrigger";
import { Cloud, Cpu, Headphones, LayoutDashboard } from "lucide-react";
import services1 from "@/assets/services-1.jpg";
import services2 from "@/assets/services-2.jpg";

const services = [
  { icon: Cpu, title: "POS System Integration", desc: "Custom point-of-sale setups designed for high-volume deli environments. Intuitive interfaces that staff can learn in minutes, not days.", image: services1 },
  { icon: Cloud, title: "Cloud Platform Setup", desc: "Migrate your operations to the cloud with zero downtime. Access your data anywhere, anytime, with automatic backups and 99.9% uptime.", image: services2 },
  { icon: LayoutDashboard, title: "Custom Dashboard Development", desc: "Bespoke analytics dashboards that show exactly what matters to your business — from peak hours to bestselling items.", image: services1 },
  { icon: Headphones, title: "24/7 Dedicated Support", desc: "Round-the-clock support from food-tech specialists who understand your business. Average response time under 5 minutes.", image: services2 },
];

const ServicesSection = () => {
  const ref = useGsapFadeIn(0.15);

  return (
    <section id="services" className="section-padding bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="gsap-fade inline-block font-accent text-accent italic text-sm uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="gsap-fade section-title">Our Services</h2>
          <p className="gsap-fade section-subtitle max-w-2xl mx-auto">
            End-to-end solutions built for the food industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <div key={i} className="gsap-fade card-rustic overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-52 object-cover" loading="lazy" width={800} height={600} />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="font-body text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
