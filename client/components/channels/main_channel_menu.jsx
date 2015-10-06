MainChannelMenu = React.createClass({
  render(){
    return(
      <div className="channel-menu">
          <span className="channel-menu_name">
              <span className="channel-menu_prefix">#</span>
              { this.props.channel }
          </span>
      </div>
    )
  }
})
