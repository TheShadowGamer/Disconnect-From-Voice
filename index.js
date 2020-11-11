const powercord = require('powercord/');
const { Plugin } = require('powercord/entities')
const { getModule } = require("powercord/webpack")
const { selectVoiceChannel } = getModule(["selectVoiceChannel"], false)
const Settings = require('./components/Settings.jsx');
module.exports = class DisconnectVoice extends Plugin {
  startPlugin () {
    powercord.api.settings.registerSettings("disconnect-voice", {
      label: "Disconnect-From-Voice",
      category: this.entityID,
      render: Settings
    })
    document.body.addEventListener("keyup", this.keyup)
  }
  pluginWillUnload () {
    document.body.removeEventListener("keyup", this.keyup)
    powercord.api.settings.unregisterSettings("disconnect-voice")
  }
  async keyup(event) {
    if(event.key == "F3") {
      selectVoiceChannel(null)
    }
  }
}