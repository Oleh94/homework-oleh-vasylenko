import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from "./HW2"

type AffairsPropsType = {
    data?: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    // присвоение данных, которые пришли из props.data, а те из filteredAffairs, а также прогонка их через мап
    const mappedAffairs = props.data?.map((a => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    )))

    // задаём функции, кот вызываются при нажатии onClick и код алгоритм setFilter которых прописан в HW2
    const setAll = () => {props.setFilter("all")}
    const setHigh = () => {props.setFilter("high")}
    const setMiddle = () => {props.setFilter("middle")}
    const setLow = () => {props.setFilter("low")}

    return (
        <div>
            {/*отрисовка mappedAffairs*/}
            {mappedAffairs}
            {/*отрисовка кнопок с onClick*/}
            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
