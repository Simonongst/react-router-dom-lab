import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes = [] }) => {
  return (
    <>
      <h1>Mailbox List</h1>
      <ul className="mailbox-list">
        {mailboxes.map(({ _id }) => (
          <li key={_id} className="mail-box">
            <Link to={`/mailboxes/${_id}`}>Mailbox {_id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
