import React, {useEffect} from 'react';
import s from "../App.module.css";
import MyButton from "../Button/MyButton";
import TimerList from "../TimerList/TimerList";
import {useDispatch} from "react-redux";
import {setLocalStorageState} from "../../redux/timeReduser";

const Project = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setLocalStorageState(JSON.parse(localStorage.getItem("state"))))
    },[])
    return (
        <div>
            <div className={s.App}>
                <h2 className={s.Title}>Таймер</h2>
                <div className={s.Content}><MyButton/></div>
            </div>
            <TimerList/>
        </div>
    );
};

export default Project;