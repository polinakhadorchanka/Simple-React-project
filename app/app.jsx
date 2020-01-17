let ReactDOM = require('react-dom');
let React = require('react');
let Vac = require('./components/vacancy.jsx');

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Vac.VacancyList} />
            <Route exact path="/str" children={()=><h2>sfgfhmg</h2>}/>
            <Route exact path="/:company_name-:position" component={Vac.Vacancy} />
        </Switch>
    </Router>,
    document.getElementById("container")
);