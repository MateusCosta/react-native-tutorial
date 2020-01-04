import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const headerConfig = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
    },
};

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User,
        },
        headerConfig
    )
);

export default Routes;
