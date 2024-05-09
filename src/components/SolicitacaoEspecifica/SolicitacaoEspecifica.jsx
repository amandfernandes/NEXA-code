/* Esse componente vai tratar da solicitação detalhada */
import React from "react";
import { Cliente, Data, Historico, Status, Dosimetria, Dados, Botao, bt_download, bt_relatorio, Solicitacao, Button, Botoes  } from "./Style";

const SolicitacaoEspecifica = () => {
  return (
    <Solicitacao>
      <Cliente>Cliente</Cliente>
      <Data>28/04/2024</Data>
      <Historico>Histórico</Historico>
      <Status>Status</Status>
      <Dosimetria>Dosimetria Clínica</Dosimetria>
      <Dados>Dados do Cliente</Dados>
      <Botoes>
        <Button>Arquivo Download</Button>
        <Button>Enviar Relatorio</Button>
      </Botoes>
    </Solicitacao>
  );
};

export default SolicitacaoEspecifica;
