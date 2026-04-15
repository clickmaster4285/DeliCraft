import { Sandwich, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sandwich className="w-7 h-7 text-accent" />
              <span className="font-heading text-xl font-bold text-primary-foreground">DeliCraft</span>
            </div>
            <p className="font-body text-sm text-primary-foreground/60 mb-6">
              Smart technology solutions for modern food businesses. Simplify operations, delight customers.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Features", href: "#features" },
                { label: "Case Studies", href: "#case-studies" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={scrollTo(link.href)} className="font-body text-sm hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Blog", "Documentation", "FAQ", "Support Center"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-3 font-body text-sm">
              <p>Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad. Pakistan</p>
          
              <p>marketing@clickmasters.pk</p>
              <p>+92 333-1116842</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-primary-foreground/40">
            © 2026 DeliCraft. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="font-body text-sm text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
