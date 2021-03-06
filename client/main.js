if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
  Meteor.subscribe('messages')
  Meteor.subscribe('allUsernames')
  Meteor.subscribe('channels')
  Meteor.startup(() => {
    Session.set('channel', 'general')
    WebFontConfig = {
        google: { families: [ 'Lato:400,700,400italic:latin' ] }
      };
      (() => {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
  })
}
