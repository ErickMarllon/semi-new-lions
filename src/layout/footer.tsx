import { NAV_CONFIG } from "@/routers/path-config";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/svgexport-4.svg";
import { SOCIAL_ICONS } from "@/constants/socialIcons";
import Iconify from "@/components/Iconify";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Footer = () => {
  return (
    <motion.footer
      className="bg-card border-t border-border/50 min-w-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="mx-auto px-4" variants={containerVariants}>
        <motion.div
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div>
                <span className="text-xl font-bold text-gradient-gold font-serif">
                  <img
                    src={logo}
                    alt="Logo da empresa Lions seminovos"
                    className="w-30"
                  />
                </span>
                <span className="text-xl font-light text-foreground ml-1">
                  Seminovos
                </span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Há mais de 15 anos realizando o sonho de milhares de brasileiros.
              Qualidade, confiança e as melhores condições do mercado.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_ICONS.map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  variants={itemVariants}
                >
                  <Iconify icon={icon} size={20} className="min-w-5 min-h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {NAV_CONFIG.map((link) => (
                <motion.li
                  key={link.label}
                  variants={itemVariants}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Link to={link.href}>{link.label}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <Phone className="w-5 h-5 min-w-5 min-h-5 text-primary" />
                <span>(21) 99999-9999</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <Mail className="w-5 h-5 min-w-5 min-h-5 text-primary" />
                <span>contato@lions.com.br</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <MapPin className="w-5 h-5 min-w-5 min-h-5 text-primary shrink-0 mt-0.5" />
                <span>10+ lojas no Rio de Janeiro e São Paulo</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Newsletter
            </h4>
            <p className="text-muted-foreground mb-4">
              Receba ofertas exclusivas e novidades diretamente no seu email.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-secondary border border-border/50 rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 bg-gradient-gold rounded-lg text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                →
              </button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
          variants={itemVariants}
        >
          <p className="text-sm text-muted-foreground">
            © 2026 Lions Seminovos. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};
