/*const initState = {
    time: [
        {id: "", name: "", start: "", isStarted: false, isMute: true, count}
    ],
}*/
const initState = {
    time: [],
}
export default function timeReducer(state = initState, action) {
    switch (action.type) {
        case "DEACTIVATE_TIMER": {
            return {...state, time: state.time.filter(obj => obj.id != action.id)}
        }
        case "CONTINUE_TIMER": {
            return {
                ...state,
                time: state.time.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u, ...{isStarted: true}, ...{start:action.dateContinue-action.activeSecond*1000}
                        }
                    }
                })
            }
        }
        case "SET_ACTIVE_SECOND": {
            return {
                ...state,
                time: state.time.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u, ...{activeSecond: action.activeSecond}
                        }
                    }
                })
            }
        }
        case "STOP_TIMER": {
            return {
                ...state,
                time: state.time.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u, ...{isStarted: false}, ...{activeSecond: action.activeSecond}
                        }
                    }
                })
            }
        }
        case "SET_LOCAL_STORAGE_STATE":{
            return {
                ...state,
                time: action.state
            }
        }

        case"CREATE_NEW_TIMER": {
            let newTimer = {
                id: action.timerObj.id,
                name: !action.timerObj.name ? `Tаймер № ${action.timerObj.id}` : action.timerObj.name,
                start: action.timerObj.start,
                isStarted: true,
                isMute: false,
            }
            return {...state, time: [...state.time, newTimer]}
        }
        default:
            return state
    }
}


export const deactivateTimer = (id) => {
    return {
        type: "DEACTIVATE_TIMER",
        id,
    }
}

export const stopTimer = (id, activeSecond) => {
    return {
        type: "STOP_TIMER",
        id,
        activeSecond
    }
}
export const continueTimer = (id,activeSecond, dateContinue) => {
    return {
        type: "CONTINUE_TIMER",
        id,
        activeSecond,
        dateContinue
    }
}
export const setSecond = (id, localActiveSecond) => {
    return {
        type: "SET_ACTIVE_SECOND",
        id,
        localActiveSecond,
    }
}
export const setLocalStorageState = (state) => {
    return {
        type: "SET_LOCAL_STORAGE_STATE",
        state:  state==null? [] : state
    }
}
export const createNewTimer=(timerObj)=>{
    return{
        type: "CREATE_NEW_TIMER",
        timerObj,
    }
}

