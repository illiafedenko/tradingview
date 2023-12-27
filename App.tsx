import React from 'react';
import { WebView } from 'react-native-webview'

const webContent = require('./src/index.html')

function App(): JSX.Element {
  return (
    <WebView
      source={webContent}
    />
  );
}

export default App;
