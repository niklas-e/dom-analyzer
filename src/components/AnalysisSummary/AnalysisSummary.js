import { h, Fragment } from 'preact'

const AnalysisSummary = props => (
    <Fragment>
        <p>Total elements: {props.totalElements}</p>
        <p>ClassData: {(props.classData || []).map(JSON.stringify).join('\n')}</p>
    </Fragment>
)

export default AnalysisSummary
