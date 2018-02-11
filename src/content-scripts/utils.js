export const getClassData = elements => {
    let classStats = {}
    for (let element of elements) {
        if (element.classList) {
            for (let className of element.classList) {
                if (!classStats[className])classStats[className] = 1
                else classStats[className] ++
            }
        }
    }

    return Object.keys(classStats).map((key) => ({
        className: key,
        timesUsed: classStats[key]
    }))
}
