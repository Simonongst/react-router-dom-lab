import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = ({ addLetter, mailboxes }) => {
  const [mailboxId, setMailboxId] = useState(mailboxes[0]?._id || "");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
          <p>Select a Mailbox</p>
          <select
            value={mailboxId}
            onChange={(e) => setMailboxId(e.target.value)}
          >
            {mailboxes.map((_id) => (
              <option key={_id} value={_id}>
                Mailbox {_id}
              </option>
            ))}
          </select>
          <p>Recipient</p>
          <input
            type="text"
            placeholder="Recipient name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
          <p>Message</p>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LetterForm;
