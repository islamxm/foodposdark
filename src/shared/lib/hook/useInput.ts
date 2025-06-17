import { useEffect, useRef, useState } from "react"

type Props = {
    isFocused?: boolean
}

const useInput = ({isFocused = false}: Props) => {
    const ref = useRef<HTMLInputElement>(null)
    const [focused, setFocused] = useState(false)

    useEffect(() => {
        setFocused(isFocused)
    }, [isFocused])

    const focus = () => ref.current && ref.current.focus()

    const focusOn = () => setFocused(true)
    const focusOff = () => setFocused(false)

    return {
        ref,
        focusOn,
        focusOff,
        focused,
        focus
    }
}

export default useInput