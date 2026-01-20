import suvImage from "@/assets/home/category/suv-category.jpg";
import sedanImage from "@/assets/home/category/sedan-category.jpg";
import hatchImage from "@/assets/home/category/hatch-category.jpg";
import utilityImage from "@/assets/home/category/utility-category.png";
import { CategoryCard } from "./HomeCategoryCard";

export const HomeCategories = () => {
  return (
    <section className="py-24 bg-gradient-dark" id="estoque">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-2">
          <CategoryCard
            title="Utilitário"
            subtitle="Força e capacidade"
            image={utilityImage}
            className="md:row-span-2 min-h-[clamp(12rem,25vw,16rem)]"
          />

          <CategoryCard
            title="SUV"
            subtitle="Espaço, conforto e versatilidade"
            image={suvImage}
            className="md:row-span-1 min-h-[clamp(12rem,25vw,16rem)]"
          />

          <CategoryCard
            title="Sedan"
            subtitle="Elegância e performance"
            image={sedanImage}
            className="md:row-span-2 min-h-[clamp(12rem,25vw,16rem)]"
          />

          <CategoryCard
            title="Hatch"
            subtitle="Agilidade urbana"
            image={hatchImage}
            className="md:row-span-1 min-h-[clamp(12rem,25vw,16rem)]"
          />
        </div>
      </div>
    </section>
  );
};
