import React, {Component} from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="card mt-3">
                <div className="card-header">
                    <h3 className="card-title">List</h3>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                        <tr>
                            <th>STT</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                            <th colSpan={2}>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                            {this.props.children}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ProductList;
