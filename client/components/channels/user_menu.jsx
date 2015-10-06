UserMenu = React.createClass({
  render(){
    return (
      <div className="user-menu">
          <span className="user-menu_profile-pic"></span>
          <span className="user-menu_username">{this.props.user.userName}</span>
          <img className="connection_icon" src="data:image/png;base64,iVBORw0KGgoAAAAN..." />
          <span className="connection_status">{this.props.user.onlineStatus}</span>
      </div>
    )
  }
})
