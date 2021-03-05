import React, {useEffect, useState} from 'react';
import s from "./Timer.module.css"
import {Button} from "@material-ui/core";

import {useDispatch, useSelector} from "react-redux";
import {continueTimer, deactivateTimer, setSecond, stopTimer} from "../../../redux/timeResucer";
import {createNewTimer} from "../../../redux/actions/buttonActions";

const Timer = ({index, timer}) => {
    const isStarted = useSelector(state => state.timeReducer.time[index].isStarted)
    const time = useSelector(state => state.timeReducer.time)
    const start = useSelector(state => state.timeReducer.time[index].start)
    const localActiveSecond = useSelector(state => state.timeReducer.time[index].activeSecond)
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
                dispatch(setSecond(timer.id, activeSecond))
            }, 1000);
        }
        if (isStarted === false) {
                setActiveSecond(JSON.parse(localStorage.getItem("state"))[index].activeSecond)
        }
        console.log(time)
        localStorage.setItem('state', JSON.stringify(time))
        return()=>{
            clearTimeout(timerId);
        }
    }, [activeSecond, isStarted])


    return (
        <div style={{"grid-area": `${index + 1} / 2 / ${index + 2} / 3`}} className={s.Timer}>
            <div>{timer.name}</div>
            <div>{activeSecond}</div>
            {/*<div>{`${timer.start.getHours()} : ${timer.start.getMinutes()} : ${timer.start.getSeconds()}`}</div>*/}
            {!!isStarted === true
                ? <Button onClick={() => onStop(timer.id)} variant="contained" color="primary">Стоп</Button>
                : <Button onClick={() => onСontinue(timer.id)} variant="contained" color="primary">Продолжить</Button>}
            <Button onClick={() => onDeactivate(timer.id)} variant="contained" color="secondary">Удалить</Button>
        </div>

    )
        ;
};

export default Timer;