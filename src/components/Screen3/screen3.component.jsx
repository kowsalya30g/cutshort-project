import Button from "../utils/Button/button.component";
import { CONTENT } from "../utils/Constants/constants"
import SelectCard from "../utils/SelectCard/selectCard.component";
import './screen3.styles.css';


//Component for displaying third screen with usage selection
const Screen3 = ({screen, useSelect, setUseSelect, handleSubmit}) => {
    return (
        <>
            <div className="Content3">
                <h1>{CONTENT[screen-1].main}</h1>
                <span>{CONTENT[screen-1].sub}</span>
            </div>
            <form onSubmit={handleSubmit} className="Form">
                <div className="CardContainer">
                    <SelectCard card={0} setUseSelect={setUseSelect} isActive={0 === useSelect.useSelect -1}/>
                    <SelectCard card={1} setUseSelect={setUseSelect} isActive={1 === useSelect.useSelect -1}/>
                </div>
                <Button text="Create Workspace"/>
            </form>
        </>    
    )
};

export default Screen3;