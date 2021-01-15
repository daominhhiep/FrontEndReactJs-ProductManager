import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Product Manager',
        to: '/products',
        exact: false
    },
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to}
               exact={activeOnlyWhenExact}
               children={({match}) => {
                   let active = match ? 'nav-item' : '';
                   return (
                       <li className={active}>
                           <Link to={to} className="nav-link">
                               {label}
                           </Link>
                       </li>
                   )
               }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <p className="navbar-brand">API</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.showMenus(menus)}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }
}

export default Menu;
