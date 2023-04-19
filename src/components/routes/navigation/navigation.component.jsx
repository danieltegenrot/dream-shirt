import { Outlet, Link } from 'react-router-dom';
import Footer from '../footer/footer.component';
import { Fragment, useContext, useState } from 'react';
import './navigation.styles.scss';
import { UserContext } from '../../../context/user.context';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../../context/cart.context';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <div className="navigation">
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Men
                    </Link>
                    <Link className="nav-link" to='/shop'>
                        Women
                    </Link>
                </div>
                <div className="logo-container">
                    <span>DREAMSHIRT</span>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/'>
                        Home
                    </Link>
                    <Link className="nav-link" to='/contact'>
                        Contact
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>Sign out</span>
                        ) : <Link className="nav-link" to='/auth'>Sign in</Link>
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Navigation