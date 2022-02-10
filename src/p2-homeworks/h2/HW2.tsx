import React, {useState} from "react"
import Affairs from "./Affairs"

// types
export type AffairPriorityType = "high" | "middle" | "low"
// экспорт и объявление AffairType
export type AffairType = {_id: number, name: string, priority: string}
// экспорт и объявление FilterType
export type FilterType = "all" | AffairPriorityType

// задали константы

const defaultAffairs: AffairType[] = [ // присвоили типизацию, альтернатива Array<AffairType>
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"}
]

// создали функцию filterAffairs, кот получает affairs и filter, а возвращает фильтр
// передали пропс AffairType и стринг
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === "all") return affairs;
    if (filter === "high") return affairs.filter(i => i.priority === "high");
    if (filter === "low") return affairs.filter(i => i.priority === "low");
    if (filter === "middle") return affairs.filter(i => i.priority === "middle");
    else return affairs;
}
// создали функцию deleteAffair, кот получает _id и affairs, и возвращает фильтром массив affairs без affair с _id
export const deleteAffair = (affairs: AffairType[], _id: number) => {
    return affairs.filter((i => i._id !== _id))
}

function HW2() {
    // присвоили "стартовое" значение affairs = defaultAffairs
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any

    // присвоили стартовое значение filter = 'all'
    const [filter, setFilter] = useState<FilterType>("all")

    // создали переменную, кот возвращает результаты обработки функции filterAffairs
    // первичное значение "all" и defaultAffairs
    const filteredAffairs = filterAffairs(affairs, filter)

    // создали функцию-колбэк, которая присваивает setAffairs данные полученные из deleteAffair
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                // передача вывода отфильрованных значений в зависимости от полученого параметра
                data={filteredAffairs}
                // передача результатов обработки setFilter
                setFilter={setFilter}
                // передача deleteAffairCallback
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
