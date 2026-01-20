import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_CONFIG } from "@/routers/path-config";
import brandImg from "@/assets/brand/svgexport-4.svg";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border/50 transition-colors duration-300 ${
        scrolled || isOpen ? "bg-background" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div>
              <img src={brandImg} alt="Logo da empresa Lions seminovos" />
            </div>
          </motion.a>

          <nav className="hidden md:flex items-center md:gap-6 lg:gap-8">
            {NAV_CONFIG.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-base font-bold text-foreground hover:text-gold-500 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="premium"
              onClick={() =>
                toast.error("Funcionalidade ainda não implementada")
              }
              className=" tracking-wider font-semibold"
            >
              Simular Financiamento
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto flex flex-col items-center h-screen">
              {NAV_CONFIG.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="group text-lg font-medium text-foreground border-b transition-colors py-4 w-full items-center flex justify-center "
                  onClick={() => setIsOpen(false)}
                >
                  <span className="max-w-fit relative group-hover:text-gold-500">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full rounded-full" />
                  </span>
                </Link>
              ))}
              <Button
                variant="default"
                onClick={() =>
                  toast.error("Funcionalidade ainda não implementada")
                }
                className="bg-gradient-gold text-primary-foreground font-semibold mt-6"
              >
                Simular Financiamento
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
