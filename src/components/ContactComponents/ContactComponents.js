import React from'react';

import emailjs from '@emailjs/browser';

function ContactComponents(props) {

    function sendEmail (e)  {
        e.preventDefault();
    

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

    return (
        <form action="" onSubmit="">
        <div class="formWord">
          <h2>Say Hello!</h2>
          <span>Full Name</span>
          <br />
          <input class="input100" type="text" name="fullName" required />
          <br />
          <span>Phone Number</span>
          <br />
          <input class="input100" type="text" name="phone" required />
          <br />
          <span>Enter Email</span>
          <br />
          <input class="input100" type="text" name="email" required />
          <br />
        </div>
        <div class="formWord">
          <span>Message</span>
          <br />
          <textarea name="message" required></textarea>
          <br />
          <button>SUBMIT</button>

          {/*<div class="row">{showResults ? <Results /> : null}</div>*/}
        </div>
      </form>
    );
}

export default ContactComponents;