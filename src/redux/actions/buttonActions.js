
export const createNewTimer=(timerObj)=>{
    return{
        type: "CREATE_NEW_TIMER",
        timerObj,
    }
}
