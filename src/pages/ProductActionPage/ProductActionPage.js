import React, {Component} from 'react';
import callApi from "../../utils/apiCaller";
import {Link} from "react-router-dom";

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }


    componentDidMount() {
        let {match} = this.props;
        if (match) {
            let id = match.params.id;
            callApi(`product/${id}`, 'GET', null).then(res => {
                let data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price
                })
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
        if (id) {
            callApi(`product/${id}`, 'PUT', {
                id: id,
                name: txtName,
                price: parseInt(txtPrice),
                status: true,
            }).then(res => {
                history.goBack();
            });
        } else {
            callApi('product', 'POST', {
                id: 1,
                name: txtName,
                price: parseInt(txtPrice),
                status: true,
            }).then(res => {
                // history.push("/")
                history.goBack();
            })
        }


    }

    render() {
        let {txtName, txtPrice, chkbStatus} = this.state;

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

export default ProductActionPage;
