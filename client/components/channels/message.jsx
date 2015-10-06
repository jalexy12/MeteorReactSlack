Message = React.createClass({
  render: function() {
    return (
      <div className="message">
          <a href="" className="message_profile-pic"></a>
          <a href="" className="message_username">{usernameFromId(this.props.message.user)}</a>
          <span className="message_timestamp">{timeStampToTime(this.props.message.timestamp)}</span>
          <span className="message_star"></span>
          <span className="message_content">{this.props.message.text  }</span>
      </div>
    );
  }
})
