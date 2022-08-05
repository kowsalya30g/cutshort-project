import { useContext } from "react";
import { UserContext } from "../../contexts/user/user.context";
import Button from "../utils/Button/button.component";
import { CONTENT } from "../utils/Constants/constants"
import check from "../../assets/images/check.JPG";
import './screen4.styles.css';

const Screen4 = ({screen}) => {
    const {formData} = useContext(UserContext);

    const handleClick = () => {
        console.log("Final form Data after submission:- " , formData);
    }

    return (
        <div className="Container">
            <img id="Check" src={check} alt={check} />
            <div className="Content4">
                <h1>{CONTENT[screen-1].main} {formData.displayName}!</h1>
                <span id="sub">{CONTENT[screen-1].sub}</span>
            </div>
            <Button id="Launch" text="Launch Eden" handleClick={handleClick} />
        </div>    
    )
};

export default Screen4;