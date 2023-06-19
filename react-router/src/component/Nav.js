import {Link, NavLink} from 'react-router-dom'


export default function Nav() {
    return (
        <nav>
        <Link to="/" state={{val: 123}}>[Home]</Link>
        <Link to="/users">[All Users]</Link>
        <Link to="/users/doplapo">[User 123]</Link>
        <Link to="/users/me">[User Me]</Link>
    <NavLink state={{val: 456}} to="/loc?id=23432&dolapo=fuulstact#somehash" style={({ isActive}) => ({color : isActive ? "red" : "gold"})} className={({isActive}) => {/*whateva you like*/}}>Location</NavLink>
        </nav>
    )
}