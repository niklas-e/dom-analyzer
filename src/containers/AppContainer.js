import { h, Component } from 'preact'
import { Provider } from 'preact-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import defaultTheme from '~/default-theme'

export default class AppContainer extends Component {
    render({ store, children }) {
        return (
            <MuiThemeProvider theme={defaultTheme}>
                <Provider store={store}>
                    {children}
                </Provider>
            </MuiThemeProvider>
        )
    }
}