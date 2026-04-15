import { useState } from "react";
import { useGsapFadeIn } from "./useGsapScrollTrigger";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Owner, Urban Bites",
    text: "DeliCraft completely transformed how we handle rush hour. Order mistakes dropped dramatically and our staff actually enjoys using the system. It paid for itself in the first month.",
    stars: 5,
  },
  {
    name: "James Chen",
    role: "Operations Manager, The Humble Loaf",
    text: "The inventory alerts alone saved us thousands in wasted ingredients. Now that we've expanded to three locations, the multi-location dashboard keeps everything running like clockwork.",
    stars: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, Sweet & Savory Co.",
    text: "With over 200 menu items and endless customization options, I never thought a POS system could handle our complexity. DeliCraft made it look easy. Our customers love the speed.",
    stars: 5,
  },
  {
    name: "David Park",
    role: "General Manager, Greenleaf Deli",
    text: "The 24/7 support team is incredible. They understand the food business and always provide solutions fast. I've never had such a responsive tech partner.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useGsapFadeIn();

  const prev = () => setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section className="section-padding bg-primary text-primary-foreground" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <span className="gsap-fade inline-block font-accent text-secondary italic text-sm uppercase tracking-widest mb-3">
          Testimonials
        </span>
        <h2 className="gsap-fade font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="gsap-fade relative">
          <Quote className="w-12 h-12 text-primary-foreground/20 mx-auto mb-6" />

          <div className="min-h-[200px] flex items-center justify-center">
            <div key={current} className="space-y-6">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-accent text-xl md:text-2xl italic leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
                "{testimonials[current].text}"
              </p>
              <div>
                <p className="font-heading text-lg font-semibold">{testimonials[current].name}</p>
                <p className="font-body text-primary-foreground/60 text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${current === i ? "bg-secondary w-6" : "bg-primary-foreground/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
