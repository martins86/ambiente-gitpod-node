import React, { Component } from "react";

import Content from "./../template/content";

const headerPrps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir.",
};

export default class UserCrud extends Component {
  render() {
    return (
      <Content {...headerPrps}>
        <h1>Cadastro de Usuário</h1>
        <hr />
      </Content>
    );
  }
}