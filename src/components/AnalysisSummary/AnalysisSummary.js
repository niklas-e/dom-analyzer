import { h, Fragment } from 'preact'

const AnalysisSummary = props => (
    <Fragment>
        <p>Total elements: {props.totalElements}</p>
        <p>Total classes: {props.totalClasses}</p>
        <p>Top 5 classes:</p>
        <ul>
            {(props.topClasses || []).map(cssClass => {
                return <li key={cssClass.className}>.{cssClass.className} was used {cssClass.timesUsed} time(s)</li>
            })}
        </ul>
        <p>
            {
                (props.unusualClasses || []).length === 0
                    ? 'No unusual classes found'
                    : 'DOM contains unusual class names: ' + props.unusualClasses.map(cssClass => cssClass.className).join(', ')
            }
        </p>
    </Fragment>
)

export default AnalysisSummary
