import '../cart-dropdown/cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {

    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {[].map(item => <CartItem cartItem={item} />)}
            </div>
            <Button className="primary-button" label="Go to checkout" />
        </div>
    )
}

export default CartDropdown