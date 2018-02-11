import { getClassData } from './utils'

let allElements
const analyzeCurrentPage = () => {
    allElements = document.getElementsByTagName('*')

    const totalElements = allElements.length
    const classData = getClassData(allElements)

    console.log('classData: ', classData)

    browser.runtime.sendMessage(null, {
        data: {
            totalElements,
            classData
        },
        type: 'analyzeResult'
    })
}

browser.runtime.onMessage.addListener(message => {
    console.log('contentMessage', message)
    if (message.type !== 'analyze') return
    analyzeCurrentPage()
})
