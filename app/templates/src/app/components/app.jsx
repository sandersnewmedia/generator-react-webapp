import React, {Component} from 'react';
//components
import Header from 'components/common/header';
import Footer from 'components/common/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
