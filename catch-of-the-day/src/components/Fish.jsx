import React from "react";
import { formatPrice } from "../helpers";
import PropTypes from "prop-types";

export default class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    addToOrder: PropTypes.func,
  };
  // static makes it lives only on this class, its children - all instances - will not make a copy of this

  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  // We can also do this in-line

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price"> {formatPrice(price)}</span>
        </h3>
        <p className="desc">{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add to Order" : "Sold Out"}
        </button>
      </li>
    );
  }
}
