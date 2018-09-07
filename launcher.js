'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
// ... the starter code you pasted ...

const domContainer = document.querySelector('#launcher.js');
ReactDOM.render(e(LikeButton), domContainer);