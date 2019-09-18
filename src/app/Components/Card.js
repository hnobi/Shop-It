import React from 'react'

const Card = (props) => {
  const { img, price, title } = props;
  return (
    <li className="card">
        <img src={img} />
        <h2> {title}</h2>
        <p>&euro; {price}</p>
        <button>Buy now</button>
    </li>
  );
}

export default Card;