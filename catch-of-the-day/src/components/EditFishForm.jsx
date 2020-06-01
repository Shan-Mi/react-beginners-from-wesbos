import React from "react";

class EditFishForm extends React.Component {
  handleChange = (e) => {
    // console.log(e.currentTarget.value);
    // currentTarget is where the event got fired on
    // create an updated fish object,
    // 1. take a copy of the current fish
    const updateFish = {
      ...this.props.fish,
      //computed property name
      [e.currentTarget.name]: e.currentTarget.value,
    };
    // console.log(updatedFish);
    this.props.updateFish(this.props.index, updateFish);
    // this will send all changes upstream to App.js
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
