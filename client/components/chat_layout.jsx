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
             <UserMenu user={{userName: "jalexy12", onlineStatus: "online"}} />
             <MessageBox />
         </div>
       </div>
    )
  }
})
