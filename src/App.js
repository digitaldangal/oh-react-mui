import React, {Component} from 'react';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import theme from './theme';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import Dashboard from './scenes/Dashboard/index';
import {MuiPickersUtilsProvider} from 'material-ui-pickers';

class App extends Component {
    render() {
        return (
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <MuiThemeProvider theme={createMuiTheme(theme)}>
                    <Dashboard username={"Dr. House"} hospitalName={"Hospital St. Democrito"}/>
                </MuiThemeProvider>
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
