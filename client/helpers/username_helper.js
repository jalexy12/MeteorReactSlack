usernameFromId = function (userId) {
  let user = Meteor.users.findOne({_id: userId})
  if (typeof user === "undefined") {
    return "Anonymous"
  }
  return user.username
}
