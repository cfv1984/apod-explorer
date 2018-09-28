export default () => {
    Promise.all([
        import(/*webpackChunkName: 'react'*/"react"),
        import(/*webpackChunkName: 'react'*/"react-dom"),
        import(/*webpackChunkName: 'app'*/"./APODExplorer"),
    ]).then(
        ([{default: React}, {default: ReactDOM}, {default: App}]) => {
            ReactDOM.render(<App/>, document.querySelector('.app-container'));
        }
    );
}