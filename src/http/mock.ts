import { api } from "@/http/api";
import AxiosMockAdapter from "axios-mock-adapter";

export function setupHttpMock() {
  const mock = new AxiosMockAdapter(api, { delayResponse: 500 });

  mock.onPost("/agendamento").reply(201, {
    message: "Agendamento criado com sucesso",
  });

  // DESCOMENTAR PARA TESTAR ERRO
  // mock.onPost("/agendamento").reply(422, [
  //   {
  //     message:
  //       'Dados fornecidos inválidos: O campo "Busque o lead" é obrigatório, por favor preencha-o!',
  //     locations: [{ line: 3, column: 27 }],
  //     path: ["createCard"],
  //     extensions: {
  //       code: "MULTIPLE_INVALID_INPUT",
  //       correlation_id: "9c1083d5dd9e7e8c-GRU",
  //     },
  //   },
  // ]);
}
