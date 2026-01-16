import { Outlet } from "react-router-dom";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DiscountDialog from "@/components/dicountDialog";
import { Header } from "../header";
import { Footer } from "../footer";

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
