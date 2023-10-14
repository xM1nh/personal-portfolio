import { useEffect, useState } from "react"

const Typewriter = ({className, content}: {className: string, content: string}) => {
    const [text, setText] = useState('')

    const writeText = (text: string) => {
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
    }, [content])

    return (
        <div className={className}>
            {text}
            <span>&nbsp;</span>
        </div>
    )
}

export default Typewriter