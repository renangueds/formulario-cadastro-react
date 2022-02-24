import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "@fontsource/roboto";
import { Container, Typography } from "@material-ui/core";
import {
	validarCpf,
	validarNome,
	validarSenha,
	validarSobrenome,
} from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
	render() {
		return (
			<section>
				<Container component='article' maxWidth='sm'>
					<Typography variant='h3' component='h1' align='center'>
						Formulário de cadastro
					</Typography>
					<ValidacoesCadastro.Provider
						value={{
							cpf: validarCpf,
							senha: validarSenha,
							nome: validarNome,
							sobrenome: validarSobrenome,
						}}
					>
						<FormularioCadastro aoEnviar={aoEnviarForm} />
					</ValidacoesCadastro.Provider>
				</Container>
			</section>
		);
	}
}

function aoEnviarForm(dados) {
	console.log(dados);
}

export default App;
