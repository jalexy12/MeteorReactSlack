ChatLayout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      messages: Messages.find({}).fetch()
    }
  },

  render(){
    return (
    <div>
        <div className="header">
          <div className="team-menu">Ironhack</div>
          <MainChannelMenu channel="general" />
        </div>
        <div className="main">
           <Listings />
           <MessageHistory messages={this.data.messages}/>
        </div>
         <div className="footer">
             <UserMenu user={{userName: "jalexy12", onlineStatus: "online"}} />
             <MessageBox />
         </div>
       </div>
    )
  }
})
