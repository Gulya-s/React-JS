import React, {useState, useEffect, useRef, useActionState} from "react";

export default function Timer(){
    const [inputSeconds, setInputSeconds] = useState('')
    const [timeLeft, setTimeLeft] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const intervalRef = useRef(null)

    useEffect(()=> {
        if (!isRunning) return
        if (intervalRef.current) clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current)
                    intervalRef.current = null
                    setIsRunning(false)
                    alert("Время вышло!")
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => {
            if (intervalRef.current){
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [isRunning])
    const handleStart = () => {
        const parsed = parseInt(inputSeconds, 10)
        if (isNaN(parsed) || parsed <= 0){
            alert("Введите положительное число секунд")
            return
        }
        if (intervalRef.current) clearInterval(intervalRef.current)
        setTimeLeft(parsed)
        setIsRunning(true)
    }

    const handleInputChange = e => {
        setInputSeconds(e.target.value.replace(/\D/g, ''))
    }
    return(
        <div style={{ display: 'flex', flexDirection: "column", gap: 12, maxWidth: 320}}>
            <label>
                Введите секунд:
                <input
                    type="text"
                    value={inputSeconds}
                    onChange={handleInputChange}
                    placeholder="Например: 60"
                    style={{marginLeft: 8, padding: 6}}    
                />
            </label>
            <button onClick={handleStart}>Старт</button>
            <div style={{ fontSize: 20}}>
                Осталось: <strong>{timeLeft}</strong> с.
            </div>
        </div>
    )
}