import { useState } from 'react';
const SubscribeForm = (img) => {



return (
  <div id="mc_embed_shell" className="signup-form">
    <div className="signup-img">
      <img src={ Object.entries(img).length !== 0 ? img :"/images/info.png" } alt="" />
    </div>
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us5.list-manage.com/subscribe/post?u=bc06b9fa1d95924adee5bf131&amp;id=6325a67bdb&amp;f_id=006984ebf0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <div id="mc_embed_signup_scroll">
          <h1>Subscribe to get updated</h1>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span> 
            </label>
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              required
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">First Name <span className="asterisk">*</span> 
        </label>
            <input
              type="text"
              name="FNAME"
              className="text"
              id="mce-FNAME"
              required
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-LNAME">Last Name <span className="asterisk">*</span> 
          </label>
            <input
              type="text"
              name="LNAME"
              className="text"
              id="mce-LNAME"
              required
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-MMERGE3">ZipCode </label>
            <input
              type="text"
              name="MMERGE3"
              className="text"
              id="mce-MMERGE3"
            />
          </div>
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_bc06b9fa1d95924adee5bf131_0eafbffd68" tabIndex="-1" value="" />
          </div>
          <div className="optionalParent">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Subscribe"
              />
              <p>
                Support By Mailchimp
              </p>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
};


export default SubscribeForm;
