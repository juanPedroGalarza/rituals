import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { startWriting, stopWriting } from "../features/game/gameSlice"

export default function WriteText(props) {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const [intervalId,setIntervalId] = useState(null)
    const text = props.children
    useEffect(() => {
        return ()=>clearInterval(intervalId)
    },[intervalId])
    useEffect(() => {
        if (count >= text?.length) {
            dispatch(stopWriting())
        } else if(count < text?.length){   
            dispatch(startWriting())
            let id = setInterval(() => {
                setCount(c => c + 1)
            }, props.interval)
            setIntervalId(id)
        }
    }, [props.interval,count,text?.length,dispatch])
    return (
        <p>{text?.slice(0, count)}</p>
    )
}