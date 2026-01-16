import { toast as sonnerToast } from "sonner";
import type { ReactNode } from "react";

export type ToastOptions = {
  title?: ReactNode;
  description?: ReactNode;
  duration?: number;
};

function toast({ title, description, duration }: ToastOptions) {
  return sonnerToast(title ?? "", {
    description,
    duration,
  });
}

toast.success = (title: ReactNode, description?: ReactNode) =>
  sonnerToast.success(title, { description });

toast.error = (title: ReactNode, description?: ReactNode) =>
  sonnerToast.error(title, { description });

toast.warning = (title: ReactNode, description?: ReactNode) =>
  sonnerToast.warning(title, { description });

toast.info = (title: ReactNode, description?: ReactNode) =>
  sonnerToast.info(title, { description });

export function useToast() {
  return { toast };
}

export { toast };
