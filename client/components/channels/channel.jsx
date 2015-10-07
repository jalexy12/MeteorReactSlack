Channel = React.createClass({
  
  switchChannel(){
    FlowRouter.go(`/channels/${this.props.channel.name}`)
  },

  render(){
    let channelClass = this.props.active ? "channel active" : "channel"
    return(
      <li onClick={this.switchChannel} className={channelClass}>
          <a className="channel_name">
              <span className="unread">0</span>
              <span>
                  <span className="prefix">#</span>
                  {this.props.channel.name}
              </span>
          </a>
      </li>
    )
  }
})
