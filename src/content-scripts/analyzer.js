import { getClassData } from './utils'

let allElements
const analyzeCurrentPage = () => {
    allElements = document.getElementsByTagName('*')

    const totalElements = allElements.length
    const classData = getClassData(allElements)

    browser.runtime.sendMessage(null, {
        data: {
            totalElements,
            classData
        },
        type: 'analyzeResult'
    })
}

browser.runtime.onMessage.addListener(message => {
    if (message.type !== 'analyze') return
    analyzeCurrentPage()
})
