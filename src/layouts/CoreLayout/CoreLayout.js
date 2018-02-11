import { h, Fragment } from 'preact'
import AnalysisSummary from '~/containers/AnalysisSummaryContainer'
import Button from 'material-ui/Button'

const CoreLayout = () => (
    <Fragment>
        <AnalysisSummary />
        <Button 
            variant='raised'
            color='primary'
            onClick={() => alert('this is a magical alert')}
        >
            Do magic
        </Button>
    </Fragment>
)

export default CoreLayout
