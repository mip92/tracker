
import {Provider} from "react-redux";
import {store} from "../redux/Redux";

import Project from "./Project/Project";

function App() {

    return (
        <Provider store={store}>
            <Project/>
        </Provider>
    );
}

export default App;
