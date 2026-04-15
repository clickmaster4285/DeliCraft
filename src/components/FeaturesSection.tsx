import { useGsapFadeIn } from "./useGsapScrollTrigger";
import { Settings, BarChart3, Receipt, Layers, ShieldCheck, Smartphone } from "lucide-react";
import features1 from "@/assets/features-1.jpg";
import features3 from "@/assets/features-3.jpg";

const features = [
  { icon: Settings, title: "Custom Order Builder", desc: "Let customers build their perfect sandwich with a drag-and-drop interface that syncs directly to the kitchen display." },
  { icon: BarChart3, title: "Inventory Alerts", desc: "Real-time stock monitoring with automated alerts when ingredients drop below threshold levels." },
  { icon: Receipt, title: "Quick Billing", desc: "Lightning-fast checkout with support for split bills, tips, loyalty points, and all major payment methods." },
  { icon: Layers, title: "Multi-Location Dashboard", desc: "Manage multiple outlets from a single dashboard with real-time sales, inventory, and staff analytics." },
  { icon: ShieldCheck, title: "Data Security", desc: "Enterprise-grade encryption and compliance with food industry data protection standards." },
  { icon: Smartphone, title: "Mobile Management", desc: "Full control from your phone — approve orders, check reports, and manage staff on the go." },
];

const FeaturesSection = () => {
  const ref = useGsapFadeIn(0.15);

  return (
    <section id="features" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <span className="gsap-fade inline-block font-accent text-accent italic text-sm uppercase tracking-widest mb-3">
              Features
            </span>
            <h2 className="gsap-fade section-title mb-6">Everything You Need to Run Smarter</h2>
            <p className="gsap-fade font-body text-lg text-muted-foreground leading-relaxed">
              Our platform is built specifically for food businesses. Every feature is designed to reduce friction, speed up service, and boost your bottom line.
            </p>
          </div>
          <div className="gsap-fade grid grid-cols-2 gap-4">
            <img src={features1} alt="POS system on deli counter" className="rounded-xl shadow-md w-full h-48 object-cover" loading="lazy" width={800} height={600} />
            <img src={features3} alt="Fast checkout experience" className="rounded-xl shadow-md w-full h-48 object-cover mt-8" loading="lazy" width={800} height={600} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div key={i} className="gsap-fade card-rustic p-8 group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
