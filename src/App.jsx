import './App.css'
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm/LetterForm';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

// src/App.jsx

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (formData) => {
    const mailbox = {
      _id: mailboxes.length + 1,
      ...formData,
    }
    setMailboxes([...mailboxes, mailbox]);
  }

  const addLetter = (formData) => {
    setLetters([...letters, formData]);
  }

  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<main><h1>Post Office</h1></main>}/>
          <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
          <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>}/>
          <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>}/>
          <Route path='/new-letter' element={<LetterForm addLetter={addLetter} mailboxes={mailboxes}/>}/>
          <Route path='*' element={<h1>Oops! We couldn't find that page</h1>}/>
      </Routes>
    </>
  )
};

export default App;

