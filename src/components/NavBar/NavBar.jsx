import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/mailboxes">Mailboxs</Link>
                </li>
                <li>
                    <Link to="/new-mailbox">New Mailbox</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
