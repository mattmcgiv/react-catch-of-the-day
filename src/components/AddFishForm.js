import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    // prevent form submit
    event.preventDefault();

    const fish = {
      nameRef: this.nameRef.current.value,
      priceRef: parseFloat(this.priceRef.current.value),
      statusRef: this.statusRef.current.value,
      descRef: this.descRef.current.value,
      imageRef: this.imageRef.current.value,
    };

    // add fish to app state
    this.props.addFish(fish);

    // reset form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Enter name of fish"
        />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Enter price of fish"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          placeholder="Enter description of fish"
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Enter image of fish"
        />
        <button type="submit">Add fish</button>
      </form>
    );
  }
}

export default AddFishForm;
