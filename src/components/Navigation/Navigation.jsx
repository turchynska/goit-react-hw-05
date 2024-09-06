import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import classNames from 'classnames'


const getLinkClass = ({ isActive }) => 
    classNames(css.link, {
        [css.isActive] : isActive
    });

const Navigation = () => {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
             <NavLink className={getLinkClass} to="/">Home</NavLink> 
             <NavLink className={getLinkClass} to="/movies">Movies</NavLink>  
            </nav>
        </header>
    )
}

export default Navigation