const { React } = require('powercord/webpack');
const KeybindRecorder = require('./KeybindRecorder');

module.exports = class Settings extends React.Component {
    render () {
        const { getSetting, updateSetting } = this.props;
        
        return (
            <div>
                <KeybindRecorder value={getSetting("disconnectBind")} 
                onChange={(e) => {
                    this.setState({value: e})
                    updateSetting("disconnectBind", e)
                }}
                onReset={() => {
                    this.setState({value: "F3"})
                    updateSetting("disconnectBind", "F3")
                }}
                >Disconnect From Voice Keybind</KeybindRecorder>
            </div>
        )
    }
}