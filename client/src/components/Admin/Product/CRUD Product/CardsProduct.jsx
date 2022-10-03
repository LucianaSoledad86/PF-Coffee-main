import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getAllProducts } from '../../../../redux/actions/index';
import CardProduct from './CardProduct';

import { useEffect } from 'react';

const CardsProduct = () => {

  let dispatch = useDispatch();

  let products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <table className="table">
        <thead className="table-primary">
          <tr>
            <th className="centrado">id</th>
            <th className="centrado">Image</th>
            <th className="centrado">Products</th>
            <th className="centrado">Price</th>
            <th className="centrado">Cost</th>
            <th className="centrado">Margin</th>
            <th className="centrado">Description</th>
            <th className="centrado">Like</th>
            <th className="centrado">Stock</th>
            <th className="centrado">Disable</th>
            <th className="centrado">Edit</th>
          </tr>
        </thead>
      {
        products && products.map(p => (
          <CardProduct
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            description={p.description}
            image={p.image}
            disable={p.disable}
            like={p.like}
            stock={p.stock}
            sale_count={p.sale_count}
            cost={p.cost}
            margin={p.margin}
            // diets={p.diets}
            // categories={p.categories}
            // providers={p.providers}
          ></CardProduct>
        ))
      }
      </table>
  );
};

export default CardsProduct