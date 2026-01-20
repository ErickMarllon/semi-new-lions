import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
}
export function CategoryCard({
  title,
  subtitle,
  image,
  className = "",
}: Props) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group shadow-[0_0px_20px_-12px_hsl(43_74%_49%/0.1)] hover:shadow-[0_0px_28px_-12px_hsl(43_74%_49%/0.1)] border-gold-700/10 hover:border-gold-700/30 relative border border-gold/30 h-full rounded-2xl overflow-hidden card-hover shine-effect ${className}`}
    >
      <img
        src={image}
        alt={`Imagem de carro ${title}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
          </div>

          <Button
            variant={"gold"}
            className="rounded-full w-9 h-9  border flex group-hover:gold shadow-lg"
          >
            <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
          </Button>
        </div>
      </div>
    </motion.a>
  );
}
