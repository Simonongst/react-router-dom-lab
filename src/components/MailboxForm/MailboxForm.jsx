import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState({
        boxSize: "Small",
        boxOwner: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData({ boxSize: "Small", boxOwner: ""});
        navigate('/mailboxes');
    };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          id="boxOwner"
          name="boxOwner"
          type="text"
          placeholder="Boxholder name"
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />

        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
          required
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MailboxForm