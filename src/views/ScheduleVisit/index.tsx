import { useCreateScheduleVisit } from "@/queries/scheduleVisit/create";
import ScheduleVisitContentImg from "./components/ScheduleVisitContentImg";
import ScheduleVisitForm from "./components/ScheduleVisitForm";
import bg from "@/assets/scheduleVisit/imagem-de-fundo-CPX787uD.webp";
import Iconify from "@/components/Iconify";
import ConfirmationMessage from "./components/ConfirmationMessage";

export default function ScheduleVisitScreen() {
  const {
    mutate: submitForm,
    variables,
    isPending,
    isSuccess,
  } = useCreateScheduleVisit();

  return (
    <section className="min-h-screen flex items-center justify-center">
      {!variables && !isSuccess ? (
        <div className="grid md:grid-cols-2 gap-8 w-full h-screen justify-center items-center">
          <ScheduleVisitForm submitForm={submitForm} isPending={isPending} />
          <span className="hidden md:block">
            <ScheduleVisitContentImg />
          </span>
        </div>
      ) : (
        <div className="grid gap-8 w-full h-screen justify-center items-center">
          <div className="w-full max-w-200 flex-col h-screen items-center justify-center flex bg-cover bg-top-left bg-no-repeat">
            <span className="text-green-500 **">
              <Iconify
                icon="tabler:checks"
                size={112}
                className="[&_path]:stroke-[#008000]"
              />
            </span>
            <h1 className="text-3xl font-bold">VISITA AGENDADA COM SUCESSO!</h1>
            <ConfirmationMessage {...variables} />
          </div>
          <div
            className="w-1/2 absolute right-0 h-screen items-center justify-center flex bg-cover bg-top-left bg-no-repeat"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </div>
      )}
    </section>
  );
}
