import './_Header.css'

interface HeaderProps {
    handleProjectClick: () => void,
    handleContactClick: () => void
}

const Header = ({handleContactClick, handleProjectClick}: HeaderProps) => {
    return (
        <header>
            <nav className="navBar">
                <a className='nav-link' onClick={handleProjectClick}>Projects</a>
                <a className='nav-link' onClick={handleContactClick}>Contact</a>
            </nav>
        </header>
    )
}

export default Header