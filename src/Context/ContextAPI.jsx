import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()
export const editResponseContext = createContext()

function ContextAPI({ children }) {
    const [addresponse, setAddResponse] = useState("")
    const [editResponse, setEditResponse] = useState("")

    return (
        < >
            <editResponse.Provider value={{ editResponse, setEditResponse }}>
                <addResponseContext.Provider value={{ addresponse, setAddResponse }}>
                    {children}
                </addResponseContext.Provider>
            </editResponse.Provider>
        </>
    )
}

export default ContextAPI