import { useGsapFadeIn } from "./useGsapScrollTrigger";
import { AlertTriangle, Clock, Package, Users, Wrench, Monitor, Bell, Zap } from "lucide-react";
import features2 from "@/assets/features-2.jpg";

const painPoints = [
  { icon: AlertTriangle, title: "Custom Order Mistakes", desc: "Handwritten tickets and verbal orders lead to costly errors. Wrong toppings, missed substitutions, and unhappy customers pile up during rush hours." },
  { icon: Clock, title: "Slow Prep Coordination", desc: "Without real-time communication between front-of-house and kitchen, orders get delayed and staff scramble to keep up with demand." },
  { icon: Package, title: "Inventory Mismanagement", desc: "Running out of key ingredients mid-service or over-ordering perishables means lost revenue and wasted food — a problem no deli can afford." },
  { icon: Users, title: "Customer Wait Frustration", desc: "Long lines and unclear wait times drive customers away. In today's fast-paced world, every minute of waiting costs you a potential loyal customer." },
];

const solutions = [
  { icon: Wrench, title: "Custom Order Builder", desc: "Digital order customization that captures every preference, substitution, and special request with zero room for error." },
  { icon: Monitor, title: "Real-Time Kitchen Sync", desc: "Live order display in the kitchen ensures prep staff see updates instantly, reducing miscommunication and speeding up service." },
  { icon: Bell, title: "Inventory Alerts", desc: "Smart alerts notify you before ingredients run low. Automated tracking means you'll never face an unexpected shortage again." },
  { icon: Zap, title: "Fast Checkout", desc: "Streamlined POS checkout reduces transaction time by up to 40%, keeping lines short and customers happy." },
];

const PainPointsSection = () => {
  const ref = useGsapFadeIn(0.12);

  return (
    <section className="section-padding bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="gsap-fade inline-block font-accent text-accent italic text-sm uppercase tracking-widest mb-3">
            The Challenge
          </span>
          <h2 className="gsap-fade section-title">Problems We Solve</h2>
          <p className="gsap-fade section-subtitle max-w-2xl mx-auto">
            Common pain points that hold food businesses back
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-6">
            {painPoints.map((item, i) => (
              <div key={i} className="gsap-fade card-rustic p-6 flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="gsap-fade">
            <img src={features2} alt="Fresh ingredients organized" className="rounded-xl shadow-lg w-full h-full object-cover min-h-[400px]" loading="lazy" width={800} height={600} />
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="gsap-fade inline-block font-accent text-primary italic text-sm uppercase tracking-widest mb-3">
            Our Answers
          </span>
          <h2 className="gsap-fade section-title text-3xl md:text-4xl">Smart Solutions, Real Results</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, i) => (
            <div key={i} className="gsap-fade card-rustic p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
