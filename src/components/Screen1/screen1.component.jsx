import Button from "../utils/Button/button.component";
import { CONTENT } from "../utils/Constants/constants"
import './screen1.styles.css';

const Screen1 = ({handleSubmit}) => {
    return (
        <>
            <div className="Content1">
                <h1>{CONTENT[0].main}</h1>
                <span>{CONTENT[0].sub}</span>
            </div>
            <form onSubmit={handleSubmit} className="Form">
                <label>Full Name</label>
                <input type="text" placeholder="Steve Jobs" required/>

                <label>Display Name</label>
                <input type="text" placeholder="Steve" required/>

                <Button text="Create Workspace" />
            </form>
        </>    
    )
};

export default Screen1;