import './App.css'
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import {Routes, Route} from 'react-router-dom'

// src/App.jsx

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<main><h1>Post Office</h1></main>}/>
          <Route path='/mailboxes' element={<main><h1><MailboxList /></h1></main>}/>
          <Route path='/new-mailbox' element={<main><h1><MailboxForm /></h1></main>}/>
          <Route path='/mailboxes/:mailboxId' element={<main><h1><MailboxDetails /></h1></main>}/>
          <Route path='*' element={<main><h1>Oops! We couldn’t find that page</h1></main>}/>
      </Routes>
    </>
  )
};

export default App;

