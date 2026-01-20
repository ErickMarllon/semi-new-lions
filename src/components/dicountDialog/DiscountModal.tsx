import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Dispatch, SetStateAction } from "react";
import DiscountForm from "./DiscountForm";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
const DiscountModal = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        className="fixed -left-28 top-50 hidden md:block z-50"
      >
        <Button
          variant="default"
          className="-rotate-90 rounded-b-2xl text-lg rounded-t-none font-bold bg-brand hover:text-brand text-white hover:bg-white pb-8!"
        >
          seu desconto está aqui!
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

export default DiscountModal;
