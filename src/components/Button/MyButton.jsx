import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MyInput from "../Input/Input";
import {createNewTimer} from "../../redux/actions/buttonActions";
import { makeStyles } from '@material-ui/core/styles';
import useStyles from "../../style/style"
import {Button} from "@material-ui/core";
import s from"./MyButton.module.css"
import moment from "moment";

const MyButton = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const lastId = useSelector(state => state.timeReducer.time.length)
    const [timerName, setTimerName] = useState('');
    const onCreateNewTimer = () => {
        const dateStart = moment()
        dispatch(createNewTimer({
            name:timerName,
            start:dateStart,
            id:lastId+1
        }))
    }
    return (
        <div >
            <form className={classes.root} className={s.Wrapper} noValidate autoComplete="off">
                <MyInput className={s.Input} value={timerName} setValue={setTimerName} id="outlined-basic"
                         label="Enter tracker name" variant="filled" />
                <Button className={s.Button} variant="contained" color="secondary" onClick={() => onCreateNewTimer()}>Старт</Button>
            </form>
        </div>
    );
};

export default MyButton;