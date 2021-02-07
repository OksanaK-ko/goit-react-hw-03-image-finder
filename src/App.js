import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    imageName: "",
  };
  formSubmitHandler = (imageName) => {
    this.setState({ imageName });
    console.log(imageName);
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.formSubmitHandler} />
        <ImageGallery imageName={this.state.imageName} />

        <ToastContainer position="top-left" />
      </div>
    );
  }
}

export default App;
