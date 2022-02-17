import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();

    // get text from input
    const storeName = this.myInput.current.value;

    // route to the store
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          require="true"
          placeholder="Store name"
          defaultValue={getFunName()}
        ></input>
        <button type="submit">Visit store</button>
      </form>
    );
  }
}

export default StorePicker;
