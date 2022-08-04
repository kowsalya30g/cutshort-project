import { useState } from "react";
import Header from "../Header/header.component";
import ProgressBar from "../ProgressBar/progressBar.component";
import Screen1 from "../Screen1/screen1.component";
import './layout.styles.css';

const Layout = () => {
    const [screen, SetScreen] = useState(1);
    return (
        <div className="Layout">
            <Header />
            <ProgressBar />
            {
                screen === 1 && <Screen1 />
            }
            {
                screen === 2 && <Screen1 />
            }
            {
                screen === 3 && <Screen1 />
            }
            {
                screen === 4 && <Screen1 />
            }
        </div>
    )
};

export default Layout;