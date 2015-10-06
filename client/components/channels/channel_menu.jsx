ChannelMenu = React.createClass({
  render: function() {
    return (
      <div className="listings_channels">
          <h2 className="listings_header">Channels</h2>
          <ul className="channel_list">
              <li className="channel active ">
                  <a className="channel_name">
                      <span className="unread">0</span>
                      <span>
                          <span className="prefix">#</span>
                          hk
                      </span>
                  </a>
              </li>
          </ul>
      </div>
    )
  }
})
