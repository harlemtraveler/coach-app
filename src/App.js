import React, { Component } from 'react';
import './App.css';
import './styles/font-awesome.min.css';
import './styles/noscript.css';
import './styles/main.css';
import Header from './components/partials/Header/Header';
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
