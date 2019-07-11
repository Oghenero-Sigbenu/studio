import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
    return (
        <nav>
            <h2>Logo</h2>
            <ul className='nav-links'>
                <Link to='/login'>
                    <li>Login</li>
                </Link>
                <Link to='/register'>
                    <li>Register</li>
                </Link>
                <Link to='/dashboard'>
                    <li>Dashboard</li>
                </Link>
            </ul>
        </nav>
    )
    }
}

export default Nav;