import { HomeCallToAction } from "./components/HomeCallToAction";
import { HomeCategories } from "./components/homeCategory";
import HomeHero from "./components/homeHero";
import HomeVideo from "./components/HomeVideo";

export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-2">
      <HomeHero />
      <HomeCategories />
      <HomeCallToAction />
      <HomeVideo />
    </div>
  );
}
