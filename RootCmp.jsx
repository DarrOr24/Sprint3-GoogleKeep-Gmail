const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"

import { UserMsg } from "./cmps/UserMsg.jsx"
import { eventBusService } from "./services/event-bus.service.js"

import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
// import { MailList } from "./apps/mail/cmps/MailList.jsx"
// import { MailDetails } from "./apps/mail/cmps/MailDetails.jsx"
import { AddMail } from "./apps/mail/cmps/AddMail.jsx"

import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"
import { AddNote } from "./apps/note/cmps/AddNote.jsx"
import { NoteEdit2 } from "./apps/note/cmps/NoteEdit2.jsx"



export function App() {
    return (
        <Router>
            <section className="app main-layout full">
                <AppHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/mail" element={<MailIndex />}>
                        <Route index element={<MailList />} />
                        <Route path=":mailId" element={<MailDetails />} />
                    </Route> */}
                    <Route path="/mail/*" element={<MailIndex />}></Route>
                    {/* <Route path="/mail" element={<MailIndex />} />
                    <Route path="/mail/:mailId" element={ <MailDetails /> }/> */}
                    <Route path='/mail/new' element={<AddMail />} />
                    
                  
                    <Route path="/note" element={<NoteIndex />}>
                        <Route path="/note/add" element={<AddNote />} />   
                        <Route path="/note/edit/:noteId" element={<NoteEdit2 />} />
                    </Route>
                </Routes>
                <UserMsg />
            </section>
        </Router>
    )
}
