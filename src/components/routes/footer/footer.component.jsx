import './footer.styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-contact">
                <p className="footer-contact-title">Contact</p>
                <p className="footer-contact-email">info@dream.shirt</p>
            </div>
            <div className="footer-slogan">
                <span>Shirts that talk</span>
            </div>
            <div className="footer-address">
                <p className="footer-address-street">Drömgatan 12</p>
                <p>-</p>
                <p className="footer-adsress-post-number">165 65</p>
                <p>-</p>
                <p className="footer-adsress-city">Sthlm</p>
            </div>
        </div>
    )
  };

export default Footer;