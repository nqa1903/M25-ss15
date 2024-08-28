import React from "react";

async function getData() {
  const res = await fetch(" https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

export default async function ServerProduct() {
  const products = await getData();
  return (
    <div>
      Products list :
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product:any)=>(
            <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}$</td>
                <td><img src={product.image} alt={product.image} className="w-24 h-24"/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
