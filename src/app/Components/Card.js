import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const { img, price, title } = props;
  return (
    <li className="card">
      {/* <Link to={`/products/${props/id}/`}> */}
        <img src={img} />
        <h2> {title}</h2>
        <p>&euro; {price}</p>
        <button>Buy now</button>
      {/* </Link> */}
    </li>
  );
}

export default Card;