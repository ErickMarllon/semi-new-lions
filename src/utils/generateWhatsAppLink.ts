interface Props {
  phone?: string;
  message?: string;
}

export const generateWhatsAppLink = ({
  phone = "558004540505",
  message = "Olá, vim pelo site da Lions Seminovos.",
}: Props = {}) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};
