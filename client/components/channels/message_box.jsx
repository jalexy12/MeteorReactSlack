MessageBox = React.createClass({
    submitMessage(event){
      event.preventDefault()
      let input = React.findDOMNode(this.refs.messageInput).value.trim()
      //Todo add new message
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
