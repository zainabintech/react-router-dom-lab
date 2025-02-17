import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => (
    <div>
        <h1>Mailbox List</h1>
        <ul>
            {mailboxes.map(({ _id }) => (
                <li key={_id}>
                    <Link to={`/mailboxes/${_id}`} className="mail-box">
                        Mailbox {_id}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default MailboxList;
