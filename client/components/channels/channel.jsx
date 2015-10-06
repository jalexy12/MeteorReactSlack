Channel = React.createClass({
  render(){
    return(
      <li className="channel">
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
