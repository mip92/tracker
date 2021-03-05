export const updateObjectArray=(items, itemId, objPropName, newObjProps)=> {
    debugger
    return items.map(u => {
        debugger
        if (u.objPropName === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
export const updateObjectArrayDoubleParam=(items, itemId, objPropName, newObjProps, secondNewObjProp)=> {
    return items.map(u => {
        if (u.objPropName === itemId) {
            return {...u, ...newObjProps}
        }
        if (u.objPropName === itemId) {
            return {...u, ...secondNewObjProp}
        }
        return u;
    })
}