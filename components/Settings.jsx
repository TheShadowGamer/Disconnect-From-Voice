const { React } = require('powercord/webpack');
const { FormTitle } = require('powercord/components');
const { SwitchItem, ButtonItem, Category, KeybindRecorder } = require('powercord/components/settings');
const { Button } = require('powercord/components');

module.exports = class Settings extends React.Component {
    render () {
        return (
            <div>
                <FormTitle>Edit Keybinds</FormTitle>
                <KeybindRecorder></KeybindRecorder>
            </div>
        )
    }
}