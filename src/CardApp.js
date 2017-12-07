import React from 'react';
import List from './List';
import CardForm from './CardForm';

class CardApp extends React.Component {
  state = { cards: []}

  addCard = (card) => {
    this.setState({ cards: [...this.state.cards, card] });
  }

  toggleCard = (id) => {
    let cards = this.state.cards.map( card => {
      if (card.id === id) {
        return {
          ...card,
          complete: !card.complete
        }
      }

      return card;
    });

  this.setState({ cards });
}
  render() {
    return(
      <div>
        <CardForm addCard={this.addCard} />
      </div>
    )
  }
}

export default CardApp;
