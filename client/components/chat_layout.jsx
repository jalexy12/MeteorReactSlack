messages = [
  {userName: "Jalexy", timeStamp: "1:31", content: "Sup bro"},
  {userName: "Test Testly", timeStamp: "1:32", content: "Sup bro"},
  {userName: "Fak", timeStamp: "1:33", content: "Sup bro"},
  {userName: "Jalexy", timeStamp: "1:34", content: "Sup bro"},
]
ChatLayout = React.createClass({
  render(){
    return (
    <div>
        <div className="header">
          <div className="team-menu">Ironhack</div>
          <MainChannelMenu channel="general" />
        </div>
        <div className="main">
           <Listings />
           <MessageHistory messages={messages}/>
        </div>
         <div className="footer">
             <div className="user-menu">
                 <span className="user-menu_profile-pic"></span>
                 <span className="user-menu_username">danyll</span>
                 <img className="connection_icon" src="data:image/png;base64,iVBORw0KGgoAAAAN..." />
                 <span className="connection_status">online</span>
             </div>
             <MessageBox />
         </div>
       </div>
    )
  }
})
