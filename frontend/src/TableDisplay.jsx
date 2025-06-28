import React from 'react';

function TableDisplay({ items, total }) {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.medicine}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Price: ₹{total}</h3>
    </div>
  );
}

export default TableDisplay; 