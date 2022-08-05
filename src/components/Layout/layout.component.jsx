import { lazy, Suspense, useContext, useState } from "react";
import { UserContext } from "../../contexts/user/user.context";
import Header from "../Header/header.component";
import ProgressBar from "../ProgressBar/progressBar.component";
import Spinner from "../utils/Spinner/spinner.component";
import './layout.styles.css';

// Lazy import to improve performance
const Screen1 = lazy(() => import("../Screen1/screen1.component"));
const Screen2 = lazy(() => import("../Screen2/screen2.component"));
const Screen3 = lazy(() => import("../Screen3/screen3.component"));
const Screen4 = lazy(() => import("../Screen4/screen4.component"));

// Component for Layout which holds all the contents on screen
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

    // HandleChange event for capturing the input provided by the user
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

            default: 
            break;
        }
    }

    // HandleSubmit event for setting the relevant screen and saving form data to context
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
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
        </div>
    )
};

export default Layout;