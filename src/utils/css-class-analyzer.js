export const getTopUsedClasses = ({ classData, topAmount}) => {
    if (!classData || !topAmount) return []

    return classData
        .sort((a, b) => b.timesUsed - a.timesUsed)
        .slice(0, topAmount)
}

export const getTotalClasses = classData => {
    if (!classData) return []

    return classData.reduce((total, cssClass) => total + cssClass.timesUsed, 0)
}

export const getUnusualClasses = classData => {
    if (!classData) return []
    const regex = /(?=^[^\d])(?=^[\w\-]+$)/

    return classData.filter(cssClass => !regex.test(cssClass.className))
}