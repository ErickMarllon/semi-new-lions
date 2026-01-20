import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { GALLERY_IMAGES } from "@/constants/galleryImagesHomeHero";
import { Button } from "@/components/ui/button";
import Iconify from "@/components/Iconify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const textContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function HomeHero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        className="w-full z-0 overflow-hidden"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 6000, stopOnFocusIn: true })]}
      >
        <CarouselContent className="-ml-1">
          {GALLERY_IMAGES.map((el, index) => (
            <CarouselItem
              key={index}
              className="pl-1 w-full h-[90dvh] overflow-hidden relative"
            >
              <motion.img
                src={el.img}
                alt={`Gallery ${el.img}`}
                className="h-full w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black " />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" />

              <motion.div
                key={current}
                className="absolute bottom-36 left-6 md:left-12 text-white flex flex-col gap-4 max-w-160 select-none"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={textContainerVariants}
              >
                <motion.h1
                  variants={textItemVariants}
                  className="text-clamp-7xl font-extrabold leading-clamp"
                >
                  {el.title}
                </motion.h1>

                {el.subTitle && (
                  <motion.p variants={textItemVariants} className="text-base ">
                    {el.subTitle}
                  </motion.p>
                )}

                <motion.div variants={textItemVariants}>
                  <Link
                    to={el.href}
                    onClick={() =>
                      toast.error("Funcionalidade ainda não implementada")
                    }
                  >
                    <Button
                      variant="outline"
                      className="min-h-10 max-h-none px-8! border-white! text-xl"
                    >
                      {el.action ? (
                        el.action
                      ) : (
                        <Iconify
                          icon="akar-icons:arrow-right"
                          className="min-w-18 min-h-8"
                        />
                      )}
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {GALLERY_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index + 1 === current ? "bg-brand" : "bg-white/90"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
