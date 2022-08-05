import Button from "../utils/Button/button.component";
import { CONTENT } from "../utils/Constants/constants"
import './screen2.styles.css';

//Component for displaying second screen with workspace selection
const Screen2 = ({screen, workspace, handleChange, handleSubmit}) => {
    return (
        <>
            <div className="Content2">
                <h1>{CONTENT[screen-1].main}</h1>
                <span>{CONTENT[screen-1].sub}</span>
            </div>
            <form onSubmit={handleSubmit} className="Form">
                <label>Workspace Name</label>
                <input 
                type="text" 
                id="workspaceName"
                placeholder="Eden" 
                value={workspace.workspaceName} 
                onChange={handleChange} 
                minLength="4"
                maxLength="20"
                required/>

                <div id="Url">
                    <label>Workspace URL</label>&nbsp;
                    <span className="optional">(optional)</span>
                </div>
                <div className="UrlContainer">
                    <div className="UrlHost">
                        www.eden.com/
                    </div>
                    <input 
                    type="text"
                    id="workspaceUrl"
                    placeholder="Example"
                    value={workspace.workspaceUrl}
                    onChange={handleChange} 
                    minLength="4"
                    maxLength="25"
                    required/>
                </div>
                

                <Button text="Create Workspace"/>
            </form>
        </>    
    )
};

export default Screen2;