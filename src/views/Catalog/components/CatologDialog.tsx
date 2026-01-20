import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Dispatch, SetStateAction } from "react";
import Iconify from "@/components/Iconify";
import type { Vehicle } from "../types";
import CatalogDialogForm from "./CatalogDialogForm";

interface Props {
  setOpen: Dispatch<SetStateAction<Vehicle | null>>;
  open: Vehicle | null;
}

const CatalogDialog = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={!!open} onOpenChange={() => setOpen(null)}>
      <DialogContent
        className="sm:max-w-106.25 bg-white"
        showCloseButton={false}
      >
        <span className="absolute right-4 top-2">
          <DialogClose className="bg-brand text-gray-800! rounded-full h-6 w-6 flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
            <Iconify
              icon="famicons:close"
              size={12}
              className="text-gray-800! group-hover:text-gold-500 inline-block  transition-all"
            />
          </DialogClose>
        </span>
        <DialogHeader className="felx items-center">
          <DialogTitle className="text-2xl text-gradient-gold ">
            Solicite sua cotação
          </DialogTitle>
          <DialogDescription className="sr-only">
            Preencha o formulário abaixo para solicitar sua cotação.
          </DialogDescription>
        </DialogHeader>
        <CatalogDialogForm open={open} />
      </DialogContent>
    </Dialog>
  );
};

export default CatalogDialog;
