
import { Component } from "react";


class GitUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaRepositorios: [],
      nomeRepositorio: '',
      nome_usuario: "",
      id_Repositorio: 0,
      descricao_Repositorio: "",
      data_Repositorio: "",
      tamanho_Repositorio: 0
    }
  }

  buscarRepositorios = (elemento) => {
    elemento.preventDefault();

    console.log("O repositorio sera buscado")

    fetch('https://api.github.com/users/' + this.state.nomeRepositorio + '/repos?per_page=10') 

      .then(resposta => resposta.json())

      .then(dados => this.setState({ listaRepositorios: dados }))

      .catch(erro => console.log(erro))

  }

  componentDidMount() {

   }


  atualizaNome = async (nome) => {
    await this.setState({ nomeRepositorio: nome.target.value })
    console.log(this.state.nomeRepositorio)
  }

  render() {
    return (
      <div className="App">
        <main className="App">
          <section className="App-header">
            <h1> GitHub Repository </h1>
            <form onSubmit={this.buscarRepositorios}>
              <div>
                <input type="text" value={this.state.nomeRepositorio}   onChange={this.atualizaNome} placeholder="user name"/>
                <button type="submit" onClick={this.buscarRepositorios}> Pesquisar </button>
              </div>
            </form>
          </section>
          <section className="App-header">
            <table>
              <thead>
                <tr>
                  <th> ID </th>
                  <th> Nome </th>
                  <th> Descrição </th>
                  <th> Data de criação </th>
                  <th> Tamanho </th>
                </tr>
              </thead>
              <tbody>
                {this.state.listaRepositorios.map((repositorio) => {
                  return (
                    <tr key={repositorio.id}>
                      <td>{repositorio.id}</td>
                      <td>{repositorio.name}</td>
                      <td>{repositorio.description}</td>
                      <td>{repositorio.created_at}</td>
                      <td>{repositorio.size}</td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </section>
        </main>
      </div>
    )

  }
}


export default GitUsuarios;




