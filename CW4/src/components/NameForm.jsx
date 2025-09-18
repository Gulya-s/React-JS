import React, {useRef, useCallback, useState} from "react";

export default function NameForm(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const lastNameRef = useRef(null)

    const showData = useCallback(() => {
        alert (`First name: ${firstName}, Last name: ${lastName}`)      
    }, [firstName, lastName])

    const focusLastName = () => {
        if (lastNameRef.current) {
            lastNameRef.current.focus()
        }
    }
    return(
        <div style={{display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 300}}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <input 
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            />

            <button onClick={focusLastName}>Focus</button>
            <button onClick={showData}>Показать данные</button>
        </div>
    )
}