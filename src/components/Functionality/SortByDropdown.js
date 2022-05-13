import React, { useEffect, useState, Fragment } from "react";

const SortByDropdown=(props)=>{

  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       size: 'size',
  //       date: 'date',
  //       price: 'price',
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...products].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //     setData(sorted);
  //   };

  //   sortArray(sortType);
  // }, [sortType]);

  const handleChange = (event) => {
    props.setSortType(event.target.value);
  }

  return (
    <select value={props.sortType} onChange={handleChange}>
      <option value="size">Size</option>
      <option value="date">Date</option>
      <option value="price">Price</option>

      {/* <option value="size">Size{props.product.size}</option>
      <option value="date">Date{props.product.date}</option>
      <option value="price">Price{props.product.price}</option> */}
    </select>
  )
}

export default SortByDropdown;
