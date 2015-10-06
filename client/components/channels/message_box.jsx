MessageBox = React.createClass({
    submitMessage(event){
      event.preventDefault()
      let messageText = React.findDOMNode(this.refs.messageInput).value.trim()
      if (!!messageText){
        Meteor.call('newMessage', {text: messageText} )
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
