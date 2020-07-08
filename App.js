import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects'
import SocialProfiles from './SocialProfiles';

import PROJECTS from './data/projects';
class App extends Component{
    state={displayBio: false};
toggleDisplay=()=>{
    this.setState({displayBio:!this.state.displayBio});
}


    render(){
        return(
            <div>
                <h1>Hello!!</h1>
                <p>My name is Kirti</p>
                {
                this.state.displayBio ? (
            <div>
                <p>I love coding!! And I live in  India.</p>
                <button onClick={this.toggleDisplay}> read less</button>
            </div>
        ):(
        <div>
            <button onClick={this.toggleDisplay}>Read more</button>
        </div>
        )
        }
        <hr/>
        <Projects/>
        <hr/>
        <SocialProfiles/>
         </div>
            
        )
    }
}
export default App;