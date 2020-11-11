const { Plugin } = require('powercord/entities')
const { getModule } = require("powercord/webpack")
const { selectVoiceChannel } = getModule(["selectVoiceChannel"], false)
module.exports = class DisconnectVoice extends Plugin {
  startPlugin () {
    document.body.addEventListener("keyup", this.keyup)
  }
  pluginWillUnload () {
    document.body.removeEventListener("keyup", this.keyup)
  }
  async keyup(event) {
    if(event.key == "F3") {
      selectVoiceChannel(null)
    }
  }
}
