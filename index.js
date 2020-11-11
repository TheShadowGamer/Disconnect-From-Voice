const { Plugin } = require('powercord/entities')
const { getModule } = require("powercord/webpack")
const { selectVoiceChannel } = getModule(["selectVoiceChannel"], false)
const Settings = require('./components/Settings');
let _this
module.exports = class DisconnectVoice extends Plugin {
  startPlugin () {
    _this = this;
    if(!_this.settings.get("disconnectBind")) _this.settings.set("disconnectBind", "F3")
    powercord.api.settings.registerSettings("disconnect-voice", {
      label: "Disconnect From Voice",
      category: this.entityID,
      render: Settings
    })
    document.body.addEventListener("keyup", this.keydown)
  }
  pluginWillUnload () {
    document.body.removeEventListener("keyup", this.keydown)
    powercord.api.settings.unregisterSettings("disconnect-voice")
  }
  async keydown(event) {
    if(event.key.toUpperCase() === _this.settings.get("disconnectBind")) {
      selectVoiceChannel(null)
    }
  }
}