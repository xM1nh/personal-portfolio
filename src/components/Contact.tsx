import { forwardRef } from 'react'
import './_Contact.css'

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div className="contact" ref={ref}>
            <div className="contact-links">
                <span>
                    <a href='mailto:minhnle311@gmail.com' rel="noopener" target="_blank">minhnle311@gmail.com</a>
                </span>
                <span>
                    <a href='' rel="noopener" target="_blank">LinkedIn</a>
                </span>
                <span>
                    <a href='https://github.com/xM1nh' rel="noopener" target="_blank">GitHub</a>
                </span>
            </div>
        </div>
    )
})

export default Contact