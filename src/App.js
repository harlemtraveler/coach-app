import React, { Component } from 'react';
import './App.css';
import './styles/font-awesome.min.css';
import './styles/noscript.css';
import './styles/main.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div id="page-wrapper" className="App">
        <Header />
        <Banner />
        <MoreInfo />
        <Footer />
      </div>
    );
  }
}

export default App;

/*
  Tip: STATE

  When setting state, use a function rather than an Object.
  The reason for this is because React does not guarantee
  state after running .setState().

  So rather than using code similar to that below:

    this.setState({correctData: !this.state.correctData});

  Use a function within .setState() to make it reliable:

    this.setState((prevState, props) => {
      return {correctData: !prevState.correctData};
    })

  The function will recieve previous state as its first argument,
  and the props at the time the update is applied as its second
  argument.

  Tip: PROP-TYPES

  Look into installing an external library called "prop-types":

    npm install prop-types --save

  It is a library for typechecking props in your application.
  After installtion, just inport it into your file, and define
  it as so:

    import PropTypes from 'prop-types';

    class Welcome extends Component {
      render() {
        return <h1> Hello, {this.props.name}</h1>;
      }
    }

    Welcome.PropTypes = {
      name: PropTypes.string.isRequired
    }
*/
