import "@babel/polyfill";
import React, {PureComponent} from "react";
import {connect, Provider}    from "react-redux";
import Header                 from "./Header";
import Content                from "./Content";
import Nav                    from "./Nav";
import store                  from "../store";
import {getCurrentDate}       from "../store/selectors/selectors";
import {setCurrentDate}       from '../store/actions';
import today                  from "../utils/date/today";

export class APODExplorer extends PureComponent {
    componentWillMount() {
        this.props.setCurrentDate(...today());
    }

    render() {
        return (
            <>
                <Header/>
                <Content/>
                <Nav/>
            </>
        );
    }
}

const ConnectedAPODExplorer = connect(state => ({
    currentDate: getCurrentDate(state)
}), {
    setCurrentDate
})(APODExplorer);

export default () => <Provider store={store}><ConnectedAPODExplorer/></Provider>;
