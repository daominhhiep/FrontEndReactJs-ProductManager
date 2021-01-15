import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ProductItem extends Component {
    render() {
        let {product, index} = this.props;
        let statusName = product.status ? 'Stocking' : 'No stocking';
        let statusClass = product.status ? 'bg-success' : 'bg-warning';
        return (
            <tr>
                <th>{index + 1}</th>
                <th>{product.name}</th>
                <th>{product.price}</th>
                <th>
                    <span className={`badge rounded-pill ${statusClass}`}>{statusName}</span>
                </th>
                <th>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-warning"> Edit</Link>
                </th>
                <th>
                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Delete
                    </button>
                </th>
            </tr>
        );
    }

    onDelete = (id) => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm('Delete product?')){
            this.props.onDelete(id)
        }
    }
}

export default ProductItem;
