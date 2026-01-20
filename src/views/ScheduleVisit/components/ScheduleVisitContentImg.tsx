import bg from "@/assets/scheduleVisit/imagem-de-fundo-CPX787uD.webp";

const ScheduleVisitContentImg = () => {
  return (
    <div
      className="w-full h-screen items-center justify-center flex bg-cover bg-top-left bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="-mt-20 md:mt-0 px-4 mx-auto max-w-2xl">
        <h3 className="font-semibold text-5xl text-start py-1">
          A LIONS ESTÁ COM VOCÊ EM CADA ENCONTRO
        </h3>
        <p>
          Na LIONS, cada visita é pensada para você. Um momento exclusivo, com
          atendimento humano e atenção aos detalhes que realmente importam.
          Aqui, você não é apenas mais um horário na agenda — é alguém com
          planos, dúvidas e expectativas que merecem ser respeitadas. Agende
          quando for melhor para você. Estamos prontos para receber, ouvir e
          ajudar no que for preciso.
        </p>
      </div>
    </div>
  );
};
export default ScheduleVisitContentImg;
