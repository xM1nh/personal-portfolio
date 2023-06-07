import { useEffect, useState } from "react"

const Typewriter = ({className, content}) => {
    const [text, setText] = useState('')

    const writeText = (text) => {
        let str = ''
        let typeSpeed = 0

        text.split('').forEach(c => {
            typeSpeed += Math.random() * (90 - 50) + 50
            setTimeout(() => {
                str += c
                setText(str)
            }, typeSpeed + 700)
        })
    } 

    useEffect(() => {
        writeText(content)
    }, [])

    return (
        <div className={className}>
            {text}
            <span>&nbsp;</span>
        </div>
    )
}

export default Typewriter