import { render, h } from 'preact'
import createStore from '~/store/createStore'
import AppContainer from '~/containers/AppContainer'
import { receiveAnalyzeResult } from '~/modules/analysis'
import CoreLayout from '~/layouts/CoreLayout';

const store = createStore()

const analyze = tabs => {
    browser.tabs.sendMessage(tabs[0].id, {
        type: 'analyze'
    });
}

const init = () => {
    browser.tabs.query({ active: true, currentWindow: true })
        .then(analyze)
        .catch(reason => console.error('Error: "active tab" query failed.', reason))
}

const reportExecuteScriptError = reason => {
    console.error('Executing content script failed. ', reason)
}

const MOUNT_NODE = document.body
render(
    <AppContainer store={store}>
        <CoreLayout />
    </AppContainer>, 
    MOUNT_NODE
)

browser.tabs.executeScript({ file: 'dist/content-scripts/analyzer.js' })
    .then(init)
    .catch(reportExecuteScriptError);

browser.runtime.onMessage.addListener(message => {
    if (message.type !== 'analyzeResult') return

    store.dispatch(receiveAnalyzeResult(message.data))
})