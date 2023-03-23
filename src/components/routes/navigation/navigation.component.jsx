import { Outlet, Link } from 'react-router-dom';
import Footer from '../footer/footer.component';
import { Fragment } from 'react';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <div className="nav-links-container">
                    <Link className="nav-link" to='/men'>
                        Men
                    </Link>
                    <Link className="nav-link" to='/women'>
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
                    <Link className="nav-link" to='/sign-in'>
                        Sign in
                    </Link>
                </div>
            </div>
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Navigation