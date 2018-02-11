import * as cssClassAnalyzer from '~/utils/css-class-analyzer'

// ----------------------
// Constants
// ----------------------
const RECEIVE_ANALYZE_RESULT = 'RECEIVE_ANALYZE_RESULT'

// ----------------------
// Actions
// ----------------------
export const receiveAnalyzeResult = data => ({
    type: RECEIVE_ANALYZE_RESULT,
    payload: { data }
})

export const processDomData = data => dispatch => {
    const topClasses = cssClassAnalyzer.getTopUsedClasses({ classData: data.classData, topAmount: 5 })
    const totalClasses = cssClassAnalyzer.getTotalClasses(data.classData)
    const unusualClasses = cssClassAnalyzer.getUnusualClasses(data.classData)

    dispatch(receiveAnalyzeResult({
        totalElements: data.totalElements,
        topClasses,
        totalClasses,
        unusualClasses
    }))
}

// ----------------------
// Reducer
// ----------------------
const ACTION_HANDLERS = {
    [RECEIVE_ANALYZE_RESULT]: (state, { payload }) => ({ 
        ...state, 
        ...payload.data
    })
}

const initialState = {}
export default function analysisReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}