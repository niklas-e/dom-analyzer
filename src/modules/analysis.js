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