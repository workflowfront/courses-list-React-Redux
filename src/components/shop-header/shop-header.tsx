import React, { FC } from 'react';
import { connect } from 'react-redux';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { RootState } from '../../types';

interface ShopHeaderProps {
  items: number;
  total: number;
}

const ShopHeader: FC<ShopHeaderProps> = ({ items, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">Courses Store</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          Количество: {items} &nbsp; Сумма: (${total})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = (state: RootState) => {
  const { cartItems, orderTotal } = state.shoppingCart;
  return {
    items: cartItems.reduce((sum: number, item) => sum + item.count, 0),
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(ShopHeader);
