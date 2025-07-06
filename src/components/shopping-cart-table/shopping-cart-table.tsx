import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'antd';
import { courseAddedToCart, courseRemovedFromCart, allCoursesRemovedFromCart } from '../../actions';
import { RootState } from '../../types';

import './shopping-cart-table.css';

interface CartItem {
  id: number;
  title: string;
  count: number;
  total: number;
}

interface ShoppingCartTableProps {
  items: CartItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
}

const ShoppingCartTable: FC<ShoppingCartTableProps> = ({
  items,
  onIncrease,
  onDecrease,
  onDelete,
}: ShoppingCartTableProps) => {
  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (_: unknown, __: unknown, idx: number): number => idx + 1,
    },
    {
      title: 'Item',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Price',
      dataIndex: 'total',
      key: 'total',
      render: (text: number): string => `$${text}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: unknown, record: CartItem): React.ReactElement => (
        <>
          <Button
            onClick={() => onDelete(record.id)}
            type="primary"
            danger
            size="small"
            style={{ marginRight: 4 }}
          >
            Удалить
          </Button>
          <Button
            onClick={() => onIncrease(record.id)}
            type="primary"
            size="small"
            style={{ marginRight: 4 }}
          >
            +
          </Button>
          <Button onClick={() => onDecrease(record.id)} type="default" size="small">
            -
          </Button>
        </>
      ),
    },
  ];

  const total = items.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <Table
        dataSource={items.map((item, idx) => ({ ...item, key: item.id, index: idx }))}
        columns={columns}
        pagination={false}
        size="small"
      />
      <div className="total" style={{ marginTop: 16 }}>
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState): { items: CartItem[] } => {
  return {
    items: state.shoppingCart.cartItems as CartItem[],
  };
};

const mapDispatchToProps = {
  onIncrease: courseAddedToCart,
  onDecrease: courseRemovedFromCart,
  onDelete: allCoursesRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
