import { Meteor } from 'meteor/meteor'
import { Email } from 'meteor/email'
// In your server code: define a method that the client can call
Meteor.methods({
     sendEmail: (to, from, subject, text) => {
      // Let other method calls from the same client start running,
      // without waiting for the email sending to complete.
      //this.unblock();

      Email.send({
        to: to,
        from: from,
        subject: subject,
        text: text
      });

    }
});
