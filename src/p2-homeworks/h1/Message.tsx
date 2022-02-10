import React from "react"
import s from "./Message.module.css"

type messageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: messageDataPropsType) {
    return (
        <div className={s.message}>
            <div className={s.item}><img src={props.avatar} alt="img"/></div>
            <div className={s.item}>
                <div className={s.comment}>
                    <p className={s.author}>{props.name}</p>
                    <p className={s.comment_text}>{props.message}</p>
                    <p className={s.time}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message;