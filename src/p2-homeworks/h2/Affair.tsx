import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)}
    return (
        <div>
            <button onClick={deleteCallback}>X</button>__
            <span>{props.affair._id}</span>__
            <span>{props.affair.priority}</span>__
            <span>{props.affair.name}</span>__
        </div>
    )
}

export default Affair
