import { CARD_CONTENT } from '../Constants/constants';
import userImg from '../../../assets/images/user.JPG';
import groupImg from '../../../assets/images/group.JPG';
import './selectCard.styles.css';

//Reusable card component to select usage
const SelectCard = ({card, setUseSelect, isActive}) => {

    //HandleUseSelect event to set the usage
    const handleUseSelect = () => {
        setUseSelect({useSelect: card+1})
    }

    return (
        <div className="Card" onClick={handleUseSelect}
        style={{ border: isActive ? "2px solid #5A4AD1": "2px solid #e2ebf6" }}>
            <img src={card === 0? userImg: groupImg} alt={card === 0? userImg: groupImg} />
            <h3>{CARD_CONTENT[card].main}</h3>
            <h4>{CARD_CONTENT[card].sub}</h4>
        </div>
    )
};

export default SelectCard;