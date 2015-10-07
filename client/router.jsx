FlowRouter.route("/", {
  action: function() {
    ReactLayout.render(ChatLayout, {
      channel: "general"
    })
  }
})
FlowRouter.route("/channels/:channelName", {
  action: function(params) {
    ReactLayout.render(ChatLayout, {
      channel: params.channelName
    })
  }
})
