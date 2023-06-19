import { Component } from "react"


class Aboutc extends Component {
    constructor() {
        super()
        this.state = {
            name: {firstName: "Dolapo",
            lastName: "Lawal"},
            company: "Binary Clean Tech",
        }
    }

    render() {
        return (
            <div>
            <h1>i am about C section</h1>

            <p> Hi, {this.state.name.firstName} {this.state.name.lastName}. I am the C.E.O {this.state.company}</p>

            <button onClick={() => {this.setState({name : {firstName: "Engineer", lastName: "Lawal"}})}}>change Name</button>
            </div>
        )
    }
}

export default Aboutc