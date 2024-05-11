import React, { useRef } from 'react'
import './join.css'
import emailjs from 'emailjs-com';

const Join = () => {
  const form = useRef();

    const handleJoin = (e)=> {
        e.preventDefault()
        emailjs.sendForm(
            'service_0dvpvic',
            'template_wscuvub',
            form.current,
            'knftbvL31mQ92oUA-'
        )
        .then((result)=>{
            console.log('done')
        },
        (error)=>{
            console.log(error)
        }
        )
    }
  return (
   <div className="Join" id='join-us'>
    <div className="left-j">
        <hr />
        <div><span className='stroke-text'>Ready to</span><span>Level up</span></div>
        <div><span>your body</span><span className='stroke-text'>with us?</span></div>
    </div>
    <div className="right-j">
        <form className="email-container" ref={form} onSubmit={handleJoin}>
            <input type="email" name='user_email' placeholder='Enter your Email Address '/>
            <button type='submit' className="btn btn-j">Join now</button>
        </form>
    </div>
   </div>
  )
}

export default Join