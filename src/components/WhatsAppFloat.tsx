import { generateWhatsAppLink } from "../utils/generateWhatsAppLink";
import Iconify from "./Iconify";
import { Link } from "react-router-dom";

const WhatsAppFloat = () => {
  return (
    <div className="fixed right-4.5 bottom-5 z-40 group/wpp bg-[linear-gradient(135deg,#25d366,#128c7e)] rounded-full">
      <Link
        to={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-wpp group-hover/wpp:bg-[#dcf8c7] relative flex h-16 w-16 items-center justify-center rounded-full  text-white shadow-lg transition-all duration-500 ease-in-out group-hover/wpp:w-54"
      >
        <Iconify
          icon="logos:whatsapp-icon"
          size={38}
          className="relative z-10 shrink-0 transition-transform group-hover/wpp:scale-100"
        />
        <span className="max-w-0 overflow-hidden text-lg group-hover/wpp:pl-2 text-[#26d366] font-bold whitespace-nowrap  transition-all duration-500 ease-in-out group-hover/wpp:max-w-xs">
          Quero comprar
        </span>
      </Link>
    </div>
  );
};

export default WhatsAppFloat;
