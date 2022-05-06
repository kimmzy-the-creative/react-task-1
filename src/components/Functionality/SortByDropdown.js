import React, { useEffect, useState, Fragment } from "react";

const SortByDropdwon=(props)=>{
  const [sortType, setSortType] = useState();

  useEffect(() => {
    const sortArray = type => {
      const types = {
        size: 'size',
        date: 'date',
        price: 'price',
      };
      const sortProperty = types[type];
      const sorted = [...products].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return{
    <select>
      <option value="size">Size{props.product.size}</option>
      <option value="date">Date{props.product.date}</option>
      <option value="price">Price{props.product.price}</option>
    </select>
  }
}

export default SortByDropdwon;
