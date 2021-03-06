import React, {useEffect, useState} from 'react';
import s from "./Timer.module.css"
import {Button} from "@material-ui/core";

import {useDispatch, useSelector} from "react-redux";
import {continueTimer, deactivateTimer, setSecond, stopTimer} from "../../../redux/timeResucer";

const Timer = ({index, timer}) => {
    const isStarted = useSelector(state => state.timeReducer.time[index].isStarted)
    const time = useSelector(state => state.timeReducer.time)
    const start = useSelector(state => state.timeReducer.time[index].start)
    const dispatch = useDispatch()

    const onStop = (id) => {
        dispatch(stopTimer(id,activeSecond))
    }
    const onСontinue = (id) => {
        let dateContinue =Date.now()
        dispatch(continueTimer(id,activeSecond,dateContinue))
    }
    const onDeactivate = (id) => {
        dispatch(deactivateTimer(id))
    }

    let [activeSecond, setActiveSecond] = useState(0)
    let timerId
    useEffect(() => {
        if (isStarted === true) {
            timerId = setTimeout(() => {
                setActiveSecond(Math.round((Date.now() - start) * 0.001))
                /*dispatch(setSecond(timer.id, activeSecond))*/
            }, 1000);
        }
        if (isStarted === false) {
            debugger
                setActiveSecond(JSON.parse(localStorage.getItem("state"))[index].activeSecond)
        }
        localStorage.setItem('state', JSON.stringify(time))
        return()=>{
            clearTimeout(timerId);
        }
    }, [activeSecond, isStarted])

    function sToH(seconds){//stackoverflow.com
        const days = Math.floor(seconds / (24*60*60));
        seconds -= days * (24*60*60);
        const hours    = Math.floor(seconds / (60*60));
        seconds -= hours   * (60*60);
        const minutes  = Math.floor(seconds / (60));
        seconds -= minutes * (60);
        return ((0<days)?(days+":"):"")+hours+":"+minutes+":"+seconds;
    }//
    return (!!timer && <div style={{"grid-area": `${index + 1} / 2 / ${index + 2} / 3`}} className={s.Timer}>
        <div className={s.Name}>{timer.name}</div>
        <div className={s.Date}>{sToH(activeSecond)}</div>
        {!!isStarted === true
            ? <Button onClick={() => onStop(timer.id)} variant="contained" color="primary">Стоп</Button>
            : <Button onClick={() => onСontinue(timer.id)} variant="contained" color="primary"
                      className={s.Button}>Продолжить</Button>}
        <Button onClick={() => onDeactivate(timer.id)} variant="contained" color="secondary"
                className={s.Button}>Удалить</Button>
    </div>
    )
        ;
};

export default Timer;