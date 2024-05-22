const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header main-layout full">
        <Link to="/">
            <h3>Mail&Keep&Read</h3>
        </Link>
        
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
