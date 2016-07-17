import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Bert } from 'meteor/themeteorchef:bert'

export default class Feedback extends React.Component{
  constructor(){
    super()
    this.handleOnClick = this.handleOnClick.bind()
  }
  handleOnClick(){
    let nameClient= $('#name').val();
    let emailAddress= $('#email').val();
    let content= $('#message').val();

    // In your client code: asynchronously send an email
    // In your client code: asynchronously send an email

    Meteor.call('sendEmail',
    'capcarde@gmail.com',
    emailAddress,
    'You received a message from '+nameClient +'('+emailAddress+')' ,
    content);

    setTimeout(function() {
			Bert.alert('Thank you '+ nameClient +' for your feedback ¡¡¡ ', 'success');
		}, 300);

  }
  render(){
    return(
      <div className="content-wrap">
         <div id="feedback" className="inner-content">
            <section id="page-title" className="inner-section text-centered">
               <div className="container-fluid nopadding wow fadeInRight" data-wow-delay="0.4s" data-wow-offset="10">
                  <h2 className="font-accident-two-normal uppercase">Feedback</h2>
                  <h5 className="font-accident-one-bold uppercase subtitle">Hard-working person on the way to the success...</h5>

               </div>
            </section>

            <section className="inner-section feedback feedback-light">

               <div className="container-fluid nopadding">

                  <div className="row">

                     <div className="col-md-2">&nbsp;</div>
                     <div className="col-md-8 e-centered wow fadeInDown" data-wow-delay="0.6s" data-wow-offset="10">
                        <div className="dividewhite2"></div>
                        <div id="form-messages"></div>
                        <div className="wpcf7-form">
                           <div className="field">
                              <input type="text" id="name" name="name" placeholder="Name" required/>
                           </div>

                           <div className="field">
                              <input type="email" id="email" name="email" placeholder="Email" required/>
                           </div>

                           <div className="field">
                              <textarea id="message" name="message" placeholder="Message" rows="7" cols="30"  required></textarea>
                           </div>

                           <div className="dividewhite2"></div>

                           <div className="field text-center">
                              <a onClick={this.handleOnClick} className="btn btn-lg btn-darker">Send Message</a>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-2">&nbsp;</div>
                     <div className="col-md-12 divider-dynamic"></div>
                  </div>

               </div>

               <div className="dividewhite6"></div>

            </section>
         </div>
      </div>
    )
  }
}
