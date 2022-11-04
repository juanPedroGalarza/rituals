import { useCallback, useEffect, useState } from "react"

export default function WriteText(props) {
    const [count, setCount] = useState(1)

    const changeCount = (interval,count,length) => {
        if (count < length) {
        let intervalId = setInterval(() => {
            setCount(c => c + 1)
            return clearInterval(intervalId)
        }, interval)
        }
    }
    const memoizedChangeCount = useCallback(() => {
        return changeCount(props.interval, count, props.children.length)
        },
        [count, props.children.length, props.interval])
    useEffect(() => {
        return () => memoizedChangeCount()
    }, [memoizedChangeCount])
    return (
        <p>{props.children.slice(0, count)}</p>
    )
}