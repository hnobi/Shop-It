import React from 'react'
import Card from './Card';

const itemList = (props) => (
  <ul className="product-list">
    {props.listOfItems && props.listOfItems.map(item => (
      <Card
        key={item.product_id}
        img={`${process.env.image}/${item.thumbnail}`}
        price={item.price}
        title={item.name}
      />
    ))
    }
  </ul>
);



export default itemList;