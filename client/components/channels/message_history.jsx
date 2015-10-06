MessageHistory = React.createClass({
  renderMessages(){
    return this.props.messages.map((message) => {
      return <Message message={message} />
    })
  },

  render() {
    return (
      <div className="message-history">
        { this.renderMessages() }
      </div>
    );
  }
})
