import React, { Component } from "react";

import Searchbar from "./Component/Searchbar";
import ImageGallery from "./Component/ImageGallery";

import s from "./App.module.css";

class App extends Component {
  state = {
    query: "",
  };

  onChangeQuery = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export default App;