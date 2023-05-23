import React from "react";
import "./App.css";
import Form from "./components/form";
import Card from "./components/card";

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange(event) {
    console.log(event.target);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    console.log(event.target);
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
          />
          <Card />
        </main>
      </div>
    );
  }
}

export default App;
