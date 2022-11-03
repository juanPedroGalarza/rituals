import { useState, useEffect } from "react"

export default function WriteText(props) {
    const [count, setCount] = useState(1)
    const [intervalId, setIntervalId] = useState()

    useEffect(() => {
        if (count < props.children.length) {  
            let id = setInterval(()=>setCount(c=>c+1), props.interval)
            setIntervalId(id)
            return () => clearInterval(intervalId)
        }
    },[])
    return (
        <>
            <p>{props.children.slice(0, count)}</p>
        </>
    )
}