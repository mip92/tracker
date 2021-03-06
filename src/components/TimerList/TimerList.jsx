import React from 'react';
import {useSelector} from "react-redux";
import s from "./TimerList.module.css"
import Timer from "./Timer/Timer";

const TimerList = () => {
    const timeList = useSelector(state => state.timeReducer.time)
    console.log(timeList)
    return (
        <div className={s.TimerList}>
           {/* {!!timeList && timeList.map((timer,index)=>console.log(timer,index))}*/}
            {!!timeList && timeList.map((timer,index)=><Timer key={index+"list"} index={index} timer={timer}/>)}
        </div>
    );
};

export default TimerList;