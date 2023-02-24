import React from 'react';

import twitterIcon from '../../assets/images/rounded-twitter.png';
import emailIcon from '../../assets/images/rounded-mail.png';

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <p>Follow and get in touch with One Art on</p>
      <img src={twitterIcon} alt="twitter icon" />
      <p>Send an email to us</p>
      <img src={emailIcon} alt="email icon" />
    </div>
  );
};

export default Contact;
