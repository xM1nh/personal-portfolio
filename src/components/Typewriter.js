import TypewriterComponent from "typewriter-effect"

const Typewriter = ({text}) => {
    return (
        <TypewriterComponent
            onInit={(typewriter) => {
                typewriter.typeString(text)
                .start()
            }}
        />
    )
}

export default Typewriter