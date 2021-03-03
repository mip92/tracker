import s from './App.module.css';
import {Provider} from "react-redux";
import {store} from "../redux/Redux";
import MyButton from "./Button/MyButton";
import TimerList from "./TimerList/TimerList";

function App() {
    return (
        <Provider store={store}>
            <div>
                <div className={s.App}>
                    <h2 className={s.Title}>tracker</h2>
                    <div className={s.Content}><MyButton/></div>
                </div>
                <TimerList/>
            </div>
        </Provider>
    );
}

export default App;
