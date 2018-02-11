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

browser.tabs.executeScript({ file: '/analyzer.js' })
    .then(init)
    .catch(reportExecuteScriptError);

browser.runtime.onMessage.addListener(message => {
    if (message.type !== 'analyzeResult') return

    document.getElementById('results').innerHTML = message.data
})