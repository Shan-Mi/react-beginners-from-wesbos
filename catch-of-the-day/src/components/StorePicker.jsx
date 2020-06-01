import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (e) => {
    e.preventDefault();
    // 1. get text from input
    const storeName = this.myInput.current.value;
    console.log(this.myInput.current.value);
    // don't touch the DOM

    // 2. change page to /store/whatever they entered
    // StorePicker is the child of Router, so delegation allows it to use Router's property
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store➡</button>
        </form>
      </>
    );
  }
}

export default StorePicker;