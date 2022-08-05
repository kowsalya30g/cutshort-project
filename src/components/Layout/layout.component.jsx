import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user/user.context";
import Header from "../Header/header.component";
import ProgressBar from "../ProgressBar/progressBar.component";
import Screen1 from "../Screen1/screen1.component";
import Screen2 from "../Screen2/screen2.component";
import Screen3 from "../Screen3/screen3.component";
import Screen4 from "../Screen4/screen4.component";
import './layout.styles.css';

const Layout = () => {
    const [screen, SetScreen] = useState(1);
    const [user , setUser] = useState({
        fullName: "",
        displayName: ""
    });
    const [workspace, setWorkspace] = useState({
        workspaceName: "",
        workspaceUrl: ""
    });

    const [useSelect, setUseSelect] = useState({
        useSelect: 1
    });
    const {saveForm} = useContext(UserContext);

    const handleChange = (event) => {
        const value = event.target.value;
        event.preventDefault();
        switch(event.target.id){
            case "fullName": setUser({
                ...user,
                fullName: value
            });
            break;

            case "displayName": setUser({
                ...user,
                displayName: value
            });
            break;

            case "workspaceName" : setWorkspace({
                ...workspace,
                workspaceName: value
            });
            break;

            case "workspaceUrl" : setWorkspace({
                ...workspace,
                workspaceUrl: value
            });
            break;

            default: setUser({
                ...user
            });
            break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(screen === 4) return;
        saveForm({...user, ...workspace, ...useSelect});
        SetScreen((screen) => screen + 1);
    }

    return (
        <div className="Layout">
            <Header />
            <ProgressBar screen={screen}/>
            {
                screen === 1 && <Screen1 screen={screen} user={user} handleChange={handleChange} handleSubmit={handleSubmit} />
            }
            {
                screen === 2 && <Screen2 screen={screen} workspace={workspace} handleChange={handleChange} handleSubmit={handleSubmit}/>
            }
            {
                screen === 3 && <Screen3 screen={screen} useSelect={useSelect} setUseSelect={setUseSelect} handleSubmit={handleSubmit}/>
            }
            {
                screen === 4 && <Screen4 screen={screen} />
            }
        </div>
    )
};

export default Layout;