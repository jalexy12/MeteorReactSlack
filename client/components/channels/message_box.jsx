MessageBox = React.createClass({
    submitMessage(event){
      event.preventDefault()
      let messageText = React.findDOMNode(this.refs.messageInput).value.trim()
      let current = FlowRouter.current()
      if (!!messageText){
        Meteor.call('newMessage', {text: messageText, channel: current.params.channelName })
      }
      React.findDOMNode(this.refs.messageInput).value = ""
    },

    render() {
      return (
        <div className="input-box">
          <form onSubmit={this.submitMessage}>
            <input
              type="text"
              className="input-box_text"
              ref="messageInput"
              />
          </form>
        </div>
      );
    }
})
