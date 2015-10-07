ChannelMenu = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      channels: Channels.find().fetch()
    }
  },

  renderChannels(){
    return this.data.channels.map((channel) => {
      let active = this.props.channel === channel.name
      return <Channel channel={channel} active={active}/>
    })
  },

  render: function() {
    return (
      <div className="listings_channels">
          <h2 className="listings_header">Channels</h2>
          <ul className="channel_list">
            {this.renderChannels()}
          </ul>
      </div>
    )
  }
})
