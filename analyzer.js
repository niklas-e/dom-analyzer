(() => {
    const analyzeCurrentPage = () => {
        const allElements = document.getElementsByTagName('*')

        browser.runtime.sendMessage(null, {
            data: { summary: `This page contains ${allElements.length} elements` },
            type: 'analyzeResult'
        })
    }

    browser.runtime.onMessage.addListener((message) => {
        if (message.type !== 'analyze') return
        analyzeCurrentPage()
    });
})()

