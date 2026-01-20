import { motion } from "framer-motion";

type Props = {
  total: number;
};
export default function CatalogHeader({ total }: Props) {
  return (
    <section className="pt-32 pb-12 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl text-gradient-gold font-bold mb-4">
            Nosso Estoque
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Encontre o veículo perfeito para você. São mais de {total} opções de
            seminovos com qualidade garantida.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
