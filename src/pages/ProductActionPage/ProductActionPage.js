import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {actAddProductRequest, actGetProductRequest, actUpdateProductRequest} from "../../actions";

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount() {
        let {match} = this.props;
        if (match) {
            let id = match.params.id;
            this.props.onEditProduct(id)
            console.log(id)
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps && nextProps.itemEditing){
            let {itemEditing} = nextProps;
            this.setState ({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price
            })
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        let {id, txtName, txtPrice} = this.state;
        let {history} = this.props;
        let product = {
            id: id,
            name: txtName,
            price: parseInt(txtPrice),
            status: true
        }
        console.log(id);
        if (id) {
            this.props.onUpdateProduct(product)
        } else {
            console.log(product)
            product.id =  1;
            this.props.onAddProduct(product)
        }
        history.goBack();
    }

    render() {
        let {txtName, txtPrice} = this.state;

        return (
            <div className="container">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-5">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text" className="form-control" name="txtName" value={txtName}
                                   onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label>Price: </label>
                            <input type="number" className="form-control" name="txtPrice" value={txtPrice}
                                   onChange={this.onChange}/>
                        </div>
                        <div className="mt-2">
                            <Link to="/products" className="btn btn-dark">Back</Link>
                            <button type="submit" className="btn btn-primary" onChange={this.onChange}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
