import React from "react";
import "./App.css";
import Form from "./components/form";
import Card from "./components/card";

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: "",
      cardDescription: "",
      cardAttr1: "",
      cardAttr2: "",
      cardAttr3: "",
      cardImage: "",
      cardRare: "",
      cardTrunfo: false,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    console.log("fui clicado");
  }

  render() {
    return (
      <div>
        <header>Adicionar Nova Carta</header>
        <main>
          <Form
            onInputChange={this.onInputChange}
            onSaveButtonClick={this.onSaveButtonClick}
            inSaveButtonDisabled={false}
            cardName={this.state.cardName}
            cardDescription={this.state.cardDescription}
            cardAttr1={this.state.cardAttr1}
            cardAttr2={this.state.cardAttr2}
            cardAttr3={this.state.cardAttr3}
            cardImage={this.state.cardImage}
            cardRare={this.state.cardRare}
            cardTrunfo={this.state.cardTrunfo}
          />
          <Card
            cardName={this.state.cardName}
            cardDescription={this.state.cardDescription}
            cardAttr1={this.state.cardAttr1}
            cardAttr2={this.state.cardAttr2}
            cardAttr3={this.state.cardAttr3}
            cardImage={this.state.cardImage}
            cardRare={this.state.cardRare}
            cardTrunfo={this.state.cardTrunfo}
          />
        </main>
      </div>
    );
  }
}

export default App;
