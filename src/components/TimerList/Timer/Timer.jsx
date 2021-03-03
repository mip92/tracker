import React from 'react';
import s from "./Timer.module.css"
import {Button} from "@material-ui/core";

import {useDispatch} from "react-redux";
import {deactivateTimer} from "../../../redux/timeResucer";
import {createNewTimer} from "../../../redux/actions/buttonActions";

const Timer = ({index, timer}) => {
    const dispatch=useDispatch()
    const onDeactivate = (id) => {
        dispatch(deactivateTimer(id))
    }
    return (
        <div style={{"grid-area": `${index + 1} / 2 / ${index + 2} / 3`}} className={s.Timer}>
            <div>{timer.name}</div>
            <div>{timer.start.format('dddd, MMMM DD YYYY, h:mm:ss')}</div>
            <Button variant="contained" color="primary">Стоп</Button>
            <Button onClick={() => onDeactivate(timer.id)} variant="contained" color="secondary">Удалить</Button>
        </div>

    )
        ;
};

export default Timer;