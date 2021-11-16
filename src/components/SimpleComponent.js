// Code SimpleComponent Here
// SimpleComponent will be a presentation component with a tiny bit of state. It won't be quite as simple as things could be. 
// It will have a full component class declaration and will need to manage a state variable.
// In the components/SimpleComponent.js file, create a SimpleComponent component.
// The component should be declared as a class (instance of Component) so that it can carry state.
// The component should have a state property called mood that has a default value of happy.
// The component should simply render its current mood state to the page in a div.
// The component should implement a handleClick function that can serve as a callback to the <div>'s click event. 
// When clicked, the component's mood should toggle between happy and sad states.

import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    
    state = {
        mood: "happy"
    }

    handleClick = (e) => {
        
        this.state.mood === 'happy'?this.setState({mood: 'sad'}):this.setState({mood: 'happy'})

    }

    render(){
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }



}
