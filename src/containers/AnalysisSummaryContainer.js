import { connect } from 'preact-redux'
import AnalysisSummary from '~/components/AnalysisSummary'

const mapDispatchToProps = {}

const mapStateToProps = state => ({
    ...state.analysis
})

export default connect(mapStateToProps, mapDispatchToProps)(AnalysisSummary)