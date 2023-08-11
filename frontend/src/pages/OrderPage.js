import React from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage({ products }) {
    return (
        <>
        <h2>Order Some Products</h2>
            <article>
                <h3>Please place your order here:</h3>
                <p>Be sure to select the quantity of the items you would like (max quantity is 10).</p>
                <table id="productTable">
                    <caption>Available For Purchase</caption>
                    <thead>
                        <tr>
                            <th>Item, company</th>
                            <th>Price</th>
                            <th>Choose Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products.map((currentProduct, index) => 
                            <ProductRow
                                item={currentProduct}
                                key={index}
                                company={currentProduct.company}
                                product={currentProduct.product}
                                price={currentProduct.price.toLocaleString('en-US', {
                                    style: 'currency', currency: 'USD', currencyDisplay: 'symbol'
                                })}
                            />
                        )}
                    </tbody>
                </table>
            </article>
        </>
    )
}

export default OrderPage;