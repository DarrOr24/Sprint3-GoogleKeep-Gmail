const { useState } = React
const { useNavigate, useSearchParams } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"

export function MailCompose() {
    const [mail, setMail] = useState(mailService.getEmptyMail())
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    function handleChange({ target }) {
        const { type, name: prop } = target
        let { value } = target

        switch (type) {
            case 'range':
            case 'number':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break;
        }
        setMail(prevMail => ({ ...prevMail, [prop]: value }))
    }

    function onSave(ev) {
        ev.preventDefault()
        mailService.save(mail)
            .then(() => console.log('Mail has successfully saved!'))
            .catch(() => console.log(`couldn't save mail`))
            .finally(() => closeForm())
    }


    function closeForm() {
        searchParams.delete('compose')
        setSearchParams(searchParams)
    }

    if (!searchParams.get('compose')) {
        return null
    }

    // return (
    //     <section className="mail-compose">
    //         <form onSubmit={onSave} className='mail-form'>
    //             <div className='mail-modal'>
    //                 <h2>New Message</h2>
    //                 <button type="button" className='btn-close' onClick={closeForm}>x</button>
    //                 <div className="mail-input">
    //                     <label htmlFor="to">To </label>
    //                     <input onChange={handleChange} value={mail.to}
    //                         id='to' type="text" name='to' />
    //                 </div>

    //                 <input className="mail-input" onChange={handleChange} value={mail.subject}
    //                     id='subject' type="text" name='subject' placeholder="Subject"/>

    //                 <textarea
    //                         name='body'
    //                         cols='30'
    //                         rows='10'
    //                         value={mail.body}
    //                         onChange={handleChange}
    //                     ></textarea>

    //                 <button className="btn-send">Send</button>
    //             </div>
    //         </form>
    //     </section>
    // )

    return <section className="darr">
        <h1>HELLO</h1>
    </section>

    
}