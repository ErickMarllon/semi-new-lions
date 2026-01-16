import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Dispatch, SetStateAction } from "react";
import DiscountForm from "./DiscountForm";
import Iconify from "../Iconify";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
const DiscountModal = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        className="fixed -left-25 top-50 hidden md:block z-100"
      >
        <Button
          variant="default"
          className="-rotate-90 rounded-b-2xl text-lg rounded-t-none font-bold bg-brand hover:text-brand  text-white hover:bg-white"
        >
          seu desconto está aqui!
        </Button>
      </DialogTrigger>

      <DialogOverlay className="fixed inset-0 h-screen w-screen bg-black-10 backdrop-blur-xs z-999" />
      <DialogContent
        className="sm:max-w-106.25 bg-brand! z-9999"
        showCloseButton={false}
      >
        <span className="absolute right-4 top-2">
          <DialogClose className="bg-white rounded-full h-6 w-6 flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
            <Iconify
              icon="famicons:close"
              size={12}
              className="text-gray-800 group-hover:text-gold-500 inline-block  transition-all"
            />
          </DialogClose>
        </span>
        <DialogHeader>
          <DialogTitle className="sr-only">Formulário de contato</DialogTitle>
          <DialogDescription className="sr-only">
            Preencha o formulário abaixo para receber seu desconto exclusivo da
            Lions Seminovos.
          </DialogDescription>
        </DialogHeader>

        <DiscountForm />
      </DialogContent>
    </Dialog>
  );
};

export default DiscountModal;
