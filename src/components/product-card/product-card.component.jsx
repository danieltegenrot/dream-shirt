import '../product-card/product-card.styles.scss'
import Button from '../button/button.component'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="product-card-footer">
                <span className="product-card-name">{name}</span>
                <span className="product-card-price">{`${price}kr`}</span>
            </div>
            <Button type="button" label="Add to cart" className="primary-button shop-button" />
        </div>
    )

}

export default ProductCard;