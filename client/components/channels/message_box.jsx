MessageBox = React.createClass({
    render: function() {
      return (
        <div className="input-box">
            <input
              type="text"
              className="input-box_text"
              ref="message-input"
              onSubmit={this.submitMessage}/>
        </div>
      );
    }
})
