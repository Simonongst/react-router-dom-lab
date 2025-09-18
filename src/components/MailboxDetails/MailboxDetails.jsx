import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
  const selectedLetters = props.Letters.filter((letter) => (letter.mailboxId === Number(mailboxId)));

  if (!selectedBox) return <h1>Mailbox Not Found!</h1>;

  return (
    <>
        
    </>
  );
};

export default MailboxDetails;
