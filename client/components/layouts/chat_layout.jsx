ChatLayout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      currentUser: Meteor.user(),
      messages: Messages.find({}).fetch()
    }
  },

  render(){
    let userWidget = this.data.currentUser === null ? <UserMenu user={{userName: Meteor.user.username, onlineStatus: "online"}} /> : <AccountsUIWrapper />
    return (
    <div>
        <div className="header">
          <div className="team-menu">
            <span className="team-name">
              Ironhack
            </span>
          </div>
          <MainChannelMenu channel="general" />
        </div>
        <div className="main">
           <Listings />
           <MessageHistory messages={this.data.messages}/>
        </div>
         <div className="footer">
           <div className="user-menu">
             { userWidget }
           </div>
             <MessageBox />
         </div>
       </div>
    )
  }
})
