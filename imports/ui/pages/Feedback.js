import React from 'react'
import Meteor from 'meteor/meteor'

export default Feedback = () => (
<div className="content-wrap">

   <div id="feedback" className="inner-content">

      <section id="page-title" className="inner-section">
         <div className="container-fluid nopadding wow fadeInRight" data-wow-delay="0.4s" data-wow-offset="10">
            <h2 className="font-accident-two-normal uppercase">Feedback</h2>
            <h5 className="font-accident-one-bold uppercase subtitle">Hard-working person on the way to the success...</h5>
            <p className="small fontcolor-medium">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id metus purus. Ut vulputate, est vel tincidunt mattis, orci neque iaculis lectus, et interdum quam felis vel tortor. Fusce ultrices dui quis nunc dignissim faucibus. Ut ac odio quis nibh viverra fringilla ac id nisi. Suspendisse tincidunt augue quis ligula cursus, non efficitur ligula faucibus. Mauris id neque maximus, tincidunt metus et, sodales nulla.
            </p>
         </div>
      </section>

      <section className="inner-section feedback feedback-light">

         <div className="container-fluid nopadding">

            <div className="row">

               <div className="col-md-2">&nbsp;</div>
               <div className="col-md-8 e-centered wow fadeInDown" data-wow-delay="0.6s" data-wow-offset="10">
                  <div className="dividewhite2"></div>
                  <div id="form-messages"></div>
                  <form id="ajax-contact" method="post" action="assets/custom/php/form.php" className="wpcf7-form">
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
                        <button type="submit" className="btn btn-lg btn-darker">Send Message</button>
                     </div>
                  </form>
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
