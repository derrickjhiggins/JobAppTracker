import React from 'react';
import ProductQuantity from './ProductQuantity.js';

function ProductRow({product, company, price}) {
    return (
        <tr>
            <td>{product} from {company}</td>
            <td>{price}</td>
            <td><ProductQuantity /></td>
        </tr>
    )
};

export default ProductRow;