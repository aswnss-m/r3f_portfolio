import React from 'react'

function Contact() {
  return (
    <div className='flex w-full px-10 '>
      <div className="contact-form w-1/2 text-zircon-50 flex flex-col gap-1">
        <h1 className='text-3xl text-zircon-300 font-bold'>Get in touch</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum id tenetur molestias reiciendis totam incidunt, quis porro excepturi vitae, ab nisi dolore unde! Commodi mollitia, et necessitatibus similique fugit veritatis!
        </p>
        <form className='flex flex-col gap-3' >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-zircon-200"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-zircon-600 border border-zircon-300 text-zircon-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-zircon-200"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-zircon-600 border border-zircon-300 text-zircon-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-zircon-200"
            >
              Message
            </label>
            <textarea 
            name="message" 
            
            id="message" 
            rows="10" 
            placeholder='your message' 
            className='bg-zircon-600 px-2 py-1 rounded-md w-full'></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
