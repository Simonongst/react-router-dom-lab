import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes = []}) => {
  return (
    <>
      <h1>Mailbox List</h1>
      {mailboxes.map(({ _id }) => (
        <Link key={_id} to={`/mailboxes/${_id}`}>
          <div className="mail-box">Mailbox {_id}</div>
        </Link>
      ))}
    </>
  );
}

export default MailboxList