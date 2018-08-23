import { StackNavigator, DrawerNavigator } from 'react-navigation';

import DrawerContainer from './DrawerContainer';


import HomeScreen from './home/HomeScreen';
import LibraryScreen from './library/LibraryScreen';
import AddCatalogScreen from './addcatalog/AddCatalogScreen';
import UsersScreen from './users/UsersScreen';
import SettingsScreen from './settings/SettingsScreen';

import BookListScreen from './booklist/BookListScreen';
import Book01DetailScreen from './booklist/bookdetail/Book01DetailScreen';
import AddBookScreen from './booklist/addbook/AddBookScreen';

const DrawerNav = DrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Library: {
            screen: LibraryScreen,
        },
        AddCatalog: {
            screen: AddCatalogScreen,
        },
        Users: {
            screen: UsersScreen,
        },
        Settings: {
            screen: SettingsScreen,
        }
    },
    {
        headerMode: 'none',
        contentComponent: DrawerContainer,
    }
);

const StackNav = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Library: {
            screen: LibraryScreen,
        },
        AddCatalog: {
            screen: AddCatalogScreen,
        },
        Users: {
            screen: UsersScreen,
        },
        Settings: {
            screen: SettingsScreen,
        },
        BookList: {
            screen: BookListScreen,
        },
        Book01Detail: {
            screen: Book01DetailScreen,
        },
        AddBook: {
            screen: AddBookScreen,
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    }
);

const AppNav = StackNavigator(
    {
        Stack: {
            screen: StackNav,
        },
        Drawer: {
            screen: DrawerNav,
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Drawer',
        navigationOptions: {
            
        }
    }
);

export default AppNav;
