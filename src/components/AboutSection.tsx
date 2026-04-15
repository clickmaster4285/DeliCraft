import { useGsapFadeIn } from "./useGsapScrollTrigger";
import { Heart, Award, TrendingUp } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const AboutSection = () => {
  const ref = useGsapFadeIn(0.2);

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="gsap-fade inline-block font-accent text-accent italic text-sm uppercase tracking-widest mb-3">
            Our Story
          </span>
          <h2 className="gsap-fade section-title">Crafted with Passion,<br />Powered by Innovation</h2>
          <p className="gsap-fade section-subtitle max-w-2xl mx-auto">
            Where traditional craftsmanship meets modern technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="gsap-fade space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              We started as a passionate team driven by one simple idea — helping businesses serve better experiences through technology. Today, we build powerful, scalable solutions tailored for modern food businesses.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              From small dessert shops to growing franchises, we craft systems that simplify operations and elevate customer satisfaction.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Our expertise in POS systems, cloud integrations, and custom platforms empowers delis and sandwich shops to operate smarter, faster, and more efficiently.
            </p>
          </div>
          <div className="gsap-fade relative">
            <img src={about1} alt="Rustic deli interior" className="rounded-xl shadow-lg w-full h-80 object-cover" loading="lazy" width={800} height={600} />
            <img src={about2} alt="Chef team preparing sandwiches" className="absolute -bottom-8 -left-8 w-64 h-44 object-cover rounded-xl shadow-xl border-4 border-background hidden lg:block" loading="lazy" width={800} height={600} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Heart, title: "Passion-Driven", desc: "Every line of code reflects our love for the food industry and the people who power it." },
            { icon: Award, title: "Industry Experts", desc: "Years of experience building solutions specifically for delis, cafés, and food franchises." },
            { icon: TrendingUp, title: "Growth-Focused", desc: "Scalable systems that grow with your business from a single location to a nationwide chain." },
          ].map((item, i) => (
            <div key={i} className="gsap-fade card-rustic p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
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

export default AboutSection;
