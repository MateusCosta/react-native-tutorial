/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar} from 'react-native';
import Routes from './routes';
if (__DEV__) {
    import('./config/ReactotronConfig').then(() =>
        console.log('Reactotron Configured')
    );
}

const App: () => React$Node = () => {
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <Routes />
        </>
    );
};

export default App;
