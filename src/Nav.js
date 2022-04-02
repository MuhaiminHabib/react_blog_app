import { Link } from 'react-router-dom';

const Nav = ({ searchText, setSearchText }) => {
    return (
        <nav className="nav">
            <form 
            className="nav__search" 
            onSubmit={(e) => (e.preventDefault)}>
                <label htmlFor="nav__search__text">Search for Posts</label>
                <input 
                id="nav__search__text"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}>
                </input>
            </form>
            <ul className="nav__items">
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
                <Link to="/about">About</Link>
            </ul>
        </nav>
    )
}

export default Nav;