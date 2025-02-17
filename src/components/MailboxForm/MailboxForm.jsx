import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState({ boxSize: "Small", boxOwner: "" });
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => setFormData({ ...formData, [name]: value });

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData({ boxSize: "Small", boxOwner: "" });
        navigate("/mailboxes");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>New Mailbox</h1>
            <input
                type="text"
                name="boxOwner"
                value={formData.boxOwner}
                onChange={handleChange}
                placeholder="Boxholder"
                required
            />
            <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
                {["Small", "Medium", "Large"].map(size => (
                    <option key={size} value={size}>{size}</option>
                ))}
            </select>
            <button type="submit">Add Mailbox</button>
        </form>
    );
};

export default MailboxForm;
