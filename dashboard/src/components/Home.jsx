import Dashboard from "./Dashboard";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Menu from "./Menu";
import App from "./App";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import TopBar from "./TopBar";
import WatchList from "./WatchList";

function Home() {
    return ( 
        <>
            <TopBar/>
            <App/>
            <Dashboard/>
            <Funds/>
            <Holdings/>
            <Menu/>
            <Orders/>
            <Positions/>
            <Summary/>
            <WatchList/>
        </>
     );
}

export default Home;