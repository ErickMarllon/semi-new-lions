import suvImage from "@/assets/home/category/suv-category.jpg";
import sedanImage from "@/assets/home/category/sedan-category.jpg";
import hatchImage from "@/assets/home/category/hatch-category.jpg";
import utilityImage from "@/assets/home/category/utility-category.png";

export const CATEGORIES = [
  {
    name: "Utilitário",
    description: "Força e capacidade",
    image: utilityImage,
    href: "#",
  },
  {
    name: "SUV",
    description: "Espaço, conforto e versatilidade",
    image: suvImage,
    href: "#",
  },

  {
    name: "Hatch",
    description: "Agilidade urbana",
    image: hatchImage,
    href: "#",
  },
  {
    name: "Sedan",
    description: "Elegância e performance",
    image: sedanImage,
    href: "#",
  },
];
