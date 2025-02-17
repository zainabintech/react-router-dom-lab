import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(mailbox => mailbox._id === Number(mailboxId));

    return selectedBox ? (
        <>
            <h1>Mailbox {selectedBox._id}</h1>
            <p><strong>Boxholder:</strong> {selectedBox.boxOwner}</p>
            <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
        </>
    ) : (
        <p>Mailbox not found</p>
    );
};

export default MailboxDetails;
