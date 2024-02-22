import {NavLink} from 'react-router-dom';

function Nav(){
    return (
        <>
        <h3>Nav page</h3>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Users">Users</NavLink>
        </>
    )
}
export default Nav;