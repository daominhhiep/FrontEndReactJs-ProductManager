import React, {Component} from 'react';
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {actDeleteProductRequest, actFetchProductsRequest} from "../../actions";

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id)
    }

    findIndex = (products, id) => {
        let result = -1;
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index
            }
        })
        return result;
    }

    render() {
        // let {products} = this.props;
        let {products} = this.props;
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                    <Link to="/product/add" className="btn btn-secondary mt-4">Add</Link>
                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList>
                </div>
            </div>
        );
    }

    showProducts(products) {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            });
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest())
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
