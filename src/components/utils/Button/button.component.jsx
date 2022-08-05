import './button.styles.css';

//Reusable button component
const Button = ({text, handleClick}) => {
    return (
        <>
            <button className='Button' onClick={handleClick}>{text}</button>
        </>
    )
};

export default Button;