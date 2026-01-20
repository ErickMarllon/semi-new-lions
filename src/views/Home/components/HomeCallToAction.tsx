import utilityImage from "@/assets/home/callToAction/banner_credito_desktop.webp";
import { motion } from "framer-motion";

export const HomeCallToAction = () => {
  return (
    <section id="cta" className="relative h-[80vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-position-[74%_0%] md:bg-position-[60%_0%] "
        style={{ backgroundImage: `url(${utilityImage})` }}
        initial={{
          opacity: 0,
          x: 120,
          y: -120,
          scale: 1.05,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />
      <div className="absolute inset-0 flex items-center">
        <div className="relative z-10 max-w-lg px-6">
          <h3 className="text-4xl font-bold leading-tight">
            Faça sua análise com a FIRST.
            <br />
            Seu crédito em primeiro lugar.
          </h3>
        </div>
      </div>
    </section>
  );
};
