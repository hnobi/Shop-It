import React from 'react'
import Card from './Card';
import {Link} from 'react-router-dom';

const itemList = ({ listOfItems }) => (
  <ul className="product-list">
    {listOfItems && listOfItems.map(item => (
      <Link to ={`/products/${item.product_id}/details`}  key={item.product_id} className="link">
      <Card
        img={`${process.env.image}/${item.thumbnail}`}
        price={item.price}
        title={item.name}
      />
       </Link>
    ))
    }
  </ul>
);



export default itemList;