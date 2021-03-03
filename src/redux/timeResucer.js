import {updateObjectArray, updateObjectArrayDoubleParam} from "../moment/objectHelper";
/*const initState = {
    time: [
        {id: "", name: "", start: "", isStarted: false, isMute: true}
    ],
}*/
const initState = {
    time: [],
}
export default function timeReducer(state = initState, action) {
    switch (action.type) {
        case "DEACTIVATE_TIMER":{
            return {...state, time: state.time.filter(obj => obj.id != action.id)}
        }
        case "CREATE_NEW_TIMER": {
            let newTimer = {
                id: action.timerObj.id,
                name: !action.timerObj.name ? "таймер":action.timerObj.name,
                start: action.timerObj.start,
                isStarted: true,
                isMute: false,
            }
            return{...state,time:[...state.time,newTimer]}
            /*let newTimer = {
                id: action.timerObj.id,
                name: !action.timerObj.name ? "таймер":action.timerObj.name,
                start: action.timerObj.start,
                isStarted: true,
                isMute: false,
            }
            let stateCopy = {...state};
            stateCopy.time = [...state.time];
            stateCopy.time.push(newTimer);
            return stateCopy;*/
        }


        default:
            return state
    }
}


export const deactivateTimer=(id)=>{
    return{
        type: "DEACTIVATE_TIMER",
        id,
    }
}


