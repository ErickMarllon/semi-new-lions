import type { IScheduleVisitFormData } from "@/schemas/scheduleVisit";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const ConfirmationMessage = ({ ...variables }: IScheduleVisitFormData) => {
  const date = variables.date
    ? format(new Date(variables.date), "dd/MM/yyyy", { locale: ptBR })
    : "";
  return (
    <div className="text-2xl text-center space-y-4">
      <p>
        Tudo certo,<strong className="capitalize px-2">{variables.name}</strong>
        !
      </p>

      <p>
        Sua visita à loja
        <strong className="capitalize px-2">{variables.store}</strong>foi
        confirmada para o dia
        <strong className="px-2">{date}</strong>
        às<strong className="pl-2">{variables.time}</strong>.
      </p>

      <p>
        Prepare-se para um atendimento atencioso, personalizado e feito para te
        ajudar a tomar as melhores decisões.
      </p>

      <p>
        Seus dados para contato estão registrados como telefone:{" "}
        <strong className="px-2">{variables.phone_number}</strong> e email:{" "}
        <strong className="pl-2">{variables.email}</strong>.
      </p>

      <p>
        Se precisar reagendar ou tiver alguma dúvida, nossa equipe está à
        disposição.
      </p>
    </div>
  );
};

export default ConfirmationMessage;
