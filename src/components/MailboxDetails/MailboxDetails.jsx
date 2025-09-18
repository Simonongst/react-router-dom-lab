import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  if (!selectedBox) return <h1>Mailbox Not Found!</h1>;

  return (
    <>
      <h1>Mailbox {selectedBox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>

      {selectedLetters.length === 0 ||
        selectedLetters.map((letter, index) => (
          <div key={index}>
            <h3>Letters</h3>
            <p>Dear {letter.recipient},</p>
            <p>{letter.message}</p>
          </div>
        )
      )}
    </>
  );
};

export default MailboxDetails;
