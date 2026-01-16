import { useState } from "react";
import DiscountModal from "./DiscountModal";
import DiscountFloat from "./DiscountFloat";

const DiscountDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <DiscountModal open={open} setOpen={setOpen} />
      <DiscountFloat open={open} setOpen={setOpen} />
    </>
  );
};

export default DiscountDialog;
