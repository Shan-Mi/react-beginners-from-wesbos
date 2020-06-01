import React from "react";
import { formatPrice } from "../helpers";

export default class Order extends React.Component {
  // seperate funtion out, NOTICE here this.remderOrder, now this point to class Order.
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";

    // make sure fish is loaded before we continue.
    if (!fish) return null;

    if (!isAvailable) {
      // Probably the whole item got deleted, so there is no way to get its name, then we put 'fish' here.
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available.
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)} </ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}
