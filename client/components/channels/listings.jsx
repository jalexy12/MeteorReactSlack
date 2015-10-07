Listings = React.createClass({
  render () {
    return (
      <div className="listings">
          <ChannelMenu channel={this.props.channel}/>
          <DirectMessages />
      </div>
    )
  }
})
