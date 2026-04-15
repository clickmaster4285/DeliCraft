import { useState } from "react";
import { useGsapFadeIn } from "./useGsapScrollTrigger";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import services1 from "@/assets/services-1.jpg";

const ContactSection = () => {
  const ref = useGsapFadeIn(0.15);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API endpoint ready — POST to /api/contact
    console.log("Contact form data:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="gsap-fade inline-block font-accent text-accent italic text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="gsap-fade section-title">Contact Us</h2>
          <p className="gsap-fade section-subtitle max-w-2xl mx-auto">
            Ready to transform your food business? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="gsap-fade">
            <div className="card-rustic p-8 md:p-10">
              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 text-primary rounded-lg font-body text-center">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your business and how we can help..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                  />
                </div>
                <button type="submit" className="btn-accent w-full flex items-center justify-center gap-2 py-4">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="gsap-fade space-y-8">
            <img src={services1} alt="Friendly deli service" className="rounded-xl shadow-lg w-full h-64 object-cover" loading="lazy" width={800} height={600} />
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "+1 (555) 234-5678" },
                { icon: Mail, label: "Email", value: "hello@delicraft.com" },
                { icon: MapPin, label: "Office", value: "123 Artisan Lane, Brooklyn, NY 11201" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-heading text-lg font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
