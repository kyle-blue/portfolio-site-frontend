import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    to: string
}

export default function Redirect({to}: Props): React.ReactElement {
    const navigate = useNavigate()
    useEffect(() => {
        navigate(to)
    }, [navigate, to])
    
    return (<></>)
}