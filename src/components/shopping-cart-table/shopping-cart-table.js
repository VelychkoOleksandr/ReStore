import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import { increaseAmountInCart, decreaseAmountInCart, deleteItemFromCart, calculateTotal } from "../../actions";

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete, calculateTotal }) => {
  const renderRow = (item, index) => {
    const { id, title, count, total } = item;
    console.log(item);
    return (
      <tr key={id}>
        <td>{++index}</td>
        <td className="text-primary booktitle">{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button onClick={() => {
            onDelete(id);
            calculateTotal()
          }}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button onClick={() => {
            onIncrease(id);
            calculateTotal()
          }}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button onClick={() => {
            onDecrease(id);
            calculateTotal()
          }}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStatetoProps = ({ shoppingCart: { cartItems, orderTotal }}) => ({
  items: cartItems,
  total: orderTotal
});

const mapDispatchToProps =  {
  onIncrease: increaseAmountInCart,
  onDecrease: decreaseAmountInCart,
  onDelete: deleteItemFromCart,
  calculateTotal
}

export default connect(mapStatetoProps, mapDispatchToProps)(ShoppingCartTable);
