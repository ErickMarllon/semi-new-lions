import { Outlet } from "react-router-dom";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DiscountDialog from "@/components/dicountDialog";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <DiscountDialog />
      <WhatsAppFloat />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
