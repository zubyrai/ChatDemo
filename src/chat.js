import React, { Component } from 'react';
import { render } from 'react-dom';
class KommunicateChat extends Component {
    constructor(props){
    super(props);
}
componentDidMount(){
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"29b0c80aa4ae3542edc67131b8cce22ae","popupWidget":true,"automaticChatOpenOnNavigation":true,"SpeechToText": true, "TextToSpeec": true, "voiceName":"Google UK English Male"};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
}
render() {
    return (
        <div></div>
    )
}
}

   
export default KommunicateChat;
