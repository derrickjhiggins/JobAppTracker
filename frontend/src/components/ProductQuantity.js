import React, { useState } from 'react';
import { RxArrowUp, RxArrowDown } from "react-icons/rx";

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const increase = () => {
        if (quantity < 10) {
          setQuantity(quantity + 1);
        }
      };
      const decrease = () => {
        if (quantity > 0) {
          setQuantity(quantity - 1);
        }
      };

      return (
        <div>
          <button onClick={decrease}>
            <RxArrowDown />
          </button>
          <span>{quantity}</span>
          <button onClick={increase}>
            <RxArrowUp />
          </button>
        </div>
      );
    };

export default ProductQuantity;