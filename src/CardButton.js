import React from 'react';

class CardButton extends React.Component {
  state = { show: 'Front' }

  toggleShow = () => {
    let show = this.state.show === 'Front' ? 'Back' : 'Front'
    this.setState({ show });
  }

  render() {
    let { show } = this.state;

    return (
      <div>
        <div>
          { this.props[show.toLowerCase()] }
        </div>
        <button onClick={this.toggleShow}>Flip</button>
      </div>
    )
  }
}
export default CardButton;
