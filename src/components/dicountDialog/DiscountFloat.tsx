import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Dispatch, SetStateAction } from "react";
import DiscountForm from "./DiscountForm";
import vehicleSvg from "@/assets/svgexport-2.svg";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
const DiscountFloat = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        className="fixed left-4.5 bottom-8 z-40 group/discount gray-800 rounded-full  md:hidden"
      >
        <Button variant="default" className="p-0 bg-transparent ">
          <span className="h-16 w-16 rounded-full bg-brand hover:text-brand z-20 flex justify-center items-center">
            <img src={vehicleSvg} alt="" className="h-12 w-12" />
          </span>
          <div className="bg-[#262626] text-white px-4 py-2 pl-10 absolute left-[44%] rounded-full z-10">
            <p className="text-[0.55rem]">VOUCHER DE</p>
            <strong>R$ 3.000</strong>
          </div>
        </Button>
      </DialogTrigger>
      <DialogOverlay className="fixed inset-0 h-screen w-screen bg-black-10 backdrop-blur-xs" />

      <DialogContent
        className="sm:max-w-106.25 bg-brand!"
        showCloseButton={false}
      >
        <DiscountForm />
      </DialogContent>
    </Dialog>
  );
};

export default DiscountFloat;
