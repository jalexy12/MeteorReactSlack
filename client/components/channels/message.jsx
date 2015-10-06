Message = React.createClass({
  render: function() {
    return (
      <div className="message">
          <a href="" className="message_profile-pic"></a>
          <a href="" className="message_username">{this.props.message.userName}</a>
          <span className="message_timestamp">{this.props.message.timeStamp}</span>
          <span className="message_star"></span>
          <span className="message_content">{this.props.message.content}</span>
      </div>
    );
  }
})
