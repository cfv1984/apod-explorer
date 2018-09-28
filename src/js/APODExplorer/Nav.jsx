import React, {PureComponent}                 from "react";
import PropTypes                              from 'prop-types';
import {connect}                              from 'react-redux';
import {noop}                                 from 'lodash-es';
import dateArrayToString                      from "../utils/date/dateArrayToString";
import {getCurrentDate}                       from "../store/selectors/selectors";
import {setCurrentDate}                       from "../store/actions";
import {nextDayTo, prevDayTo, toArray, today} from '../utils/date';

export class Nav extends PureComponent {
    static now = new Date();

    static propTypes = {
        onBackPressed : PropTypes.func,
        onNextPressed : PropTypes.func,
        currentDate   : PropTypes.arrayOf(PropTypes.number),
        setCurrentDate: PropTypes.func
    };

    static defaultProps = {
        onBackPressed: noop,
        onNextPressed: noop,
        currentDate  : [Nav.now.getFullYear(), Nav.now.getMonth(), Nav.now.getDate()].map(s => String(s).padStart(2, '0'))
    };

    isTodayLatest() {
        const current = dateArrayToString(this.props.currentDate, '');
        const now     = dateArrayToString(today(), '');

        return Number(now) <= Number(current);
    }

    handleBackPressed = () => {
        const yesterday = prevDayTo(this.props.currentDate);
        this.props.onBackPressed(yesterday);
        this.props.setCurrentDate(...yesterday);
    };

    handleNextPressed = () => {
        if (this.isTodayLatest()) {
            alert("");
            return;
        }
        const tomorrow = nextDayTo(this.props.currentDate);
        this.props.onBackPressed(tomorrow);
        this.props.setCurrentDate(...tomorrow);
    };

    render() {
        const isTodayLatest = this.isTodayLatest();
        return <>
            <button onClick={this.handleBackPressed} className={"nav button prev"}>Yesterday</button>
            <button onClick={this.handleNextPressed} disabled={isTodayLatest} className={"nav button next"}>Tomorrow
            </button>
        </>;
    }
}

export default connect(state => ({
    currentDate: toArray(getCurrentDate(state))
}), {
    setCurrentDate
})(Nav);