import { useGsapFadeIn } from "./useGsapScrollTrigger";
import { CheckCircle, Star, Rocket, Shield, Clock, Users } from "lucide-react";
import about1 from "@/assets/about-1.jpg";

const reasons = [
  { icon: Star, title: "Food Industry Specialists", desc: "We exclusively serve food businesses — our solutions are built from real deli and restaurant experience." },
  { icon: Rocket, title: "Rapid Deployment", desc: "Go live in as little as 48 hours. Our streamlined onboarding gets you up and running without disrupting your operations." },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-level security protects your customer data, payment information, and business analytics." },
  { icon: Clock, title: "99.9% Uptime", desc: "Our cloud infrastructure ensures your systems never go down — even during your busiest rush hours." },
  { icon: Users, title: "Dedicated Account Manager", desc: "Every client gets a dedicated point of contact who knows your business inside and out." },
  { icon: CheckCircle, title: "Proven ROI", desc: "Our clients see an average 35% reduction in order errors and 25% increase in throughput within the first month." },
];

const WhyChooseUsSection = () => {
  const ref = useGsapFadeIn(0.12);

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gsap-fade inline-block font-accent text-accent italic text-sm uppercase tracking-widest mb-3">
              Why Us
            </span>
            <h2 className="gsap-fade section-title mb-8">Why Choose DeliCraft?</h2>
            <div className="space-y-6">
              {reasons.map((item, i) => (
                <div key={i} className="gsap-fade flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                    <p className="font-body text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gsap-fade relative">
            <img src={about1} alt="Premium deli interior" className="rounded-xl shadow-xl w-full h-[500px] object-cover" loading="lazy" width={800} height={600} />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden lg:block">
              <p className="font-heading text-3xl font-bold">500+</p>
              <p className="font-body text-sm">Food Businesses Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
