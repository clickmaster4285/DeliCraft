import { useState, useRef, useEffect } from "react";
import { Send, Phone, Mail, MapPin, Clock, Navigation, MessageSquare } from "lucide-react";
import { toast } from "sonner";

// Location data
const LOCATION = {
  fullAddress:
    "Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Punjab 45700, Pakistan",
};

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  LOCATION.fullAddress
)}&output=embed`;

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  
  // Form state
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // GSAP animation
  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        
        gsap.utils.toArray<HTMLElement>(".contact-animate").forEach((el, i) => {
          gsap.fromTo(el, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7, delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
      });
    });
  }, []);

  // Submit handler with API integration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Button animation
    if (btnRef.current) {
      import("gsap").then(({ gsap }) => {
        gsap.fromTo(btnRef.current, { scale: 1 }, { scale: 1.05, duration: 0.15, yoyo: true, repeat: 1 });
      });
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          phone: form.phone,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again or email marketing@clickmasters.pk");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="contact-animate inline-block font-accent text-accent italic text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="contact-animate text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-4">
            Contact <span className="text-gradient-primary">Us</span>
          </h2>
          <p className="contact-animate text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ice cream shop? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Form */}
          <div className="contact-animate">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-xl border border-border space-y-5">
              <div className="flex gap-2 items-center mb-4 pb-3 border-b border-border">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h3 className="font-[var(--font-heading)] font-semibold text-foreground text-lg">Send us a message</h3>
              </div>
              
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="Your full name"
                />
              </div>
              
              {/* Email and Phone Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number <span className="text-muted-foreground text-xs">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>
              </div>
              
              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message <span className="text-primary">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                  placeholder="Tell us about your ice cream shop and requirements..."
                />
              </div>
              
              <button
                ref={btnRef}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right side - Contact Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="contact-animate rounded-xl overflow-hidden border border-border h-64">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Location"
                className="w-full h-full"
              />
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="contact-animate flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium text-foreground">{LOCATION.fullAddress}</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="contact-animate flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">marketing@clickmasters.pk</p>
                  <p className="font-medium text-foreground">info@clickmasters.pk</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="contact-animate flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+92 333-1116842</p>
                  <p className="font-medium text-foreground">+92 332-5394285</p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-animate flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Business Hours</p>
                  <p className="font-medium text-foreground">Monday - Saturday: 9AM - 6PM</p>
                  <p className="font-medium text-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Directions Link */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                LOCATION.fullAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-animate inline-flex items-center gap-2 text-primary text-sm hover:underline"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}