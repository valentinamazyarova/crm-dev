import Logo from "./Logo";
import Navigation from "./NavigationStatus";
import User from "./User";
const LeftPanel = () => {
    return (
        <div className="left-panel blue-skin">
            <Logo />
            <User />
            <Navigation />
        </div>
    );
}

export default LeftPanel;