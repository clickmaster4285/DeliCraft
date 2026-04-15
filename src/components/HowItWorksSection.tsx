import { useGsapFadeIn } from "./useGsapScrollTrigger";
import { MessageSquare, Settings2, Rocket, HeartHandshake } from "lucide-react";
import services2 from "@/assets/services-2.jpg";

const steps = [
  { icon: MessageSquare, step: "01", title: "Discovery Call", desc: "We learn about your business, pain points, and goals in a free 30-minute consultation." },
  { icon: Settings2, step: "02", title: "Custom Setup", desc: "Our team configures and customizes the platform to match your exact workflow and menu." },
  { icon: Rocket, step: "03", title: "Go Live", desc: "Seamless deployment with hands-on training for your staff. We're there every step of the way." },
  { icon: HeartHandshake, step: "04", title: "Ongoing Support", desc: "Continuous optimization, updates, and 24/7 support to keep your operations running smoothly." },
];

const HowItWorksSection = () => {
  const ref = useGsapFadeIn(0.18);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="gsap-fade inline-block font-accent text-accent italic text-sm uppercase tracking-widest mb-3">
            Process
          </span>
          <h2 className="gsap-fade section-title">How It Works</h2>
          <p className="gsap-fade section-subtitle max-w-2xl mx-auto">
            From first call to first order — we make it seamless
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="gsap-fade">
            <img src={services2} alt="Kitchen workflow" className="rounded-xl shadow-xl w-full h-[450px] object-cover" loading="lazy" width={800} height={600} />
          </div>
          <div className="space-y-8">
            {steps.map((item, i) => (
              <div key={i} className="gsap-fade flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading text-lg font-bold">
                    {item.step}
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 h-12 bg-border mt-2" />}
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gsap-fade text-center mt-16">
          <button onClick={scrollToContact} className="btn-primary text-lg py-4 px-12">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
