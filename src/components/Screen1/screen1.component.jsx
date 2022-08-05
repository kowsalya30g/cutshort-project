import Button from "../utils/Button/button.component";
import { CONTENT } from "../utils/Constants/constants"
import './screen1.styles.css';

const Screen1 = ({screen, user, handleChange, handleSubmit}) => {
    return (
        <>
            <div className="Content1">
                <h1>{CONTENT[screen-1].main}</h1>
                <span>{CONTENT[screen-1].sub}</span>
            </div>
            <form onSubmit={handleSubmit} className="Form">
                <label>Full Name</label>
                <input 
                type="text" 
                id="fullName"
                placeholder="Steve Jobs" 
                value={user.fullName} 
                onChange={handleChange} 
                minLength="4"
                maxLength="25"
                required/>

                <label>Display Name</label>
                <input 
                type="text"
                id="displayName"
                placeholder="Steve"
                value={user.displayName}
                onChange={handleChange} 
                minLength="4"
                maxLength="20"
                required/>

                <Button text="Create Workspace"/>
            </form>
        </>    
    )
};

export default Screen1;