import './button.styles.scss';

const Button = ({ label, ...otherProps }) => {
    return (
        <button {...otherProps}>{label}</button>
    ) 
}

export default Button;