import React, {PureComponent} from "react";
import PropTypes              from "prop-types";
import {connect}              from "react-redux";
import {findPictureByDate}    from "../store/selectors/selectors";
import today                  from "../utils/date/today";
import PODValue               from "../api/values/POD";
import {setCurrentDate}       from "../store/actions/index";
import Empty                  from "./Content/Empty";
import Error                  from "./Content/Error";
import Entry                  from "./Content/Entry";

class POD extends PureComponent {
    static propTypes = {
        POD      : PropTypes.instanceOf(PODValue),
        hasErrors: PropTypes.bool
    };

    static defaultProps = {
        POD      : undefined,
        hasErrors: false
    };

    componentWillMount() {
        if (!this.hasRequested) {
            this.props.setCurrentDate(...today());
            this.hasRequested = true;
        }
    }

    render() {
        const {hasErrors, POD: currentPOD} = this.props;
        return (
            <main className="app-content">
                {!currentPOD && !hasErrors && <Empty/>}
                {hasErrors && <Error/>}
                {currentPOD && <Entry value={currentPOD}/>}
            </main>
        );
    }
}

export default connect(
    (state) => ({
        POD      : findPictureByDate(state, state.currentDate),
        hasErrors: state.errors.length > 0
    }),
    {
        setCurrentDate
    }
)(POD);
