import React, { Component } from 'react';
import LetterForm from './LetterForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleChange(event) {
    let newName = event.target.value;
    this.setState({ name: newName });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let newName = {
      id: Date.now(),
      name: this.state.name
    };

  }

  handleButtonClick(event) {
    alert('Button was clicked');
  }



  render() {
    return (
      <div>
        <div className = "letter-background">
          <div>
            <LetterForm
              handleFormSubmit={this.handleFormSubmit} />
              handleChange={this.handleChange}
              name ={this.state.name}

          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" className = "shield" />
          <div>
            <h1 className="title">HOGWARTS SCHOOL OF WITCHRAFT AND WIZARDRY</h1>

            <h4 className="sub-title">Headmaster: Albus Dumbledore</h4>
            <p>(Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump,
            International Confed. of Wizards)</p>

            <p>Dear Adressee,</p>

            <p>We are pleased to inform you that you have a place at Hogwarts School of
            Witchcraft and Wizardry. Please find enclosed a list of all necessary books and
            equipment.</p>

            <p>Term begins on 1 September. We await your owl by no later than 31 July.</p>

            <p>Your sincerely,</p>

            <p>Minerva McGonagall
              Deputy Headmistress
            </p>
          </div>
        </div>
      </div>
    );
  }
  };


export default App;
