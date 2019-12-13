import React from 'react'

class App extends React.Component {

    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    people: data.people
                })
            })
    }

    render() {
        return <div>
            <h1>
                Astronauts is Spaaaaaaaaaace!!!!
            </h1>

            <ul>
                {this.state.people.map(person => <li key={person.name}>{person.name} {person.craft}</li>)}
            </ul>
        </div>
    }

}

export default App