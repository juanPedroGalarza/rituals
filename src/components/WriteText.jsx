import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { startWriting, stopWriting } from "../features/game/gameSlice"

export default function WriteText(props) {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const text = props.children
    const changeCount = (interval, count, length) => {
        if (count < length) {
            let intervalId = setInterval(() => {
                setCount(c => c + 1)
                dispatch(stopWriting())
                return clearInterval(intervalId)
            }, interval)
        } else {
            dispatch(startWriting())
        }
    }
    const memoizedChangeCount = useCallback(changeCount,[dispatch])
    useEffect(() => {
        return () => memoizedChangeCount(props.interval,count,text?.length)
    }, [memoizedChangeCount,props.interval,count,text?.length])
    return (
        <p>{text?.slice(0, count)}</p>
    )
}