const Link = ReactRouterDOM.Link;

class Vacancy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item : Vacancy.getPositionInfo(this.props.match.params.position, this.props.match.params.company_name),
            title: document.title + ' - ' + this.props.match.params.position
        };
    }

    static getPositionInfo(pos, company) {
        return vacancies.positions.filter(function (item) {
            return item.position === pos &&
                item.company_name === company;
        });
    }

    render() {
        document.title = this.state.title;

        return <div className="vacancy-list">
            <div className="vacancy-block whitout-hover">
                <div className="my-row">
                    <div>
                        <span className="position">
                            {this.state.item[0].position}
                        </span> <br/>
                        <span className="company-name">
                            {this.state.item[0].company_name}
                        </span>
                    </div>
                    <span className="date">{this.state.item[0].date}</span>
                </div>
            </div>
            <div className="description" dangerouslySetInnerHTML = {{__html: this.state.item[0].description}} />
        </div>;
    }
}

class VacancyBlock extends React.Component {
    render() {
        return <Link to={'/' + this.props.company_name + '-' + this.props.position} target="_blank">
            <div className="vacancy-block">
                <div className="my-row">
                    <div>
                        <span className="position">{this.props.position}</span> <br/>
                        <span className="company-name">{this.props.company_name}</span>
                    </div>
                    <span className="date">{this.props.date}</span>
                </div>
            </div>
        </Link>;
    }
}

class VacancyList extends React.Component {
    render() {
        return <div className="vacancy-list">
            {
                vacancies.positions.map(function(position){
                    return <VacancyBlock position={position.position} company_name={position.company_name}
                                         date = {position.date} />
                })
            }
        </div>;
    }
}

module.exports = {Vacancy, VacancyBlock, VacancyList};