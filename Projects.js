import React, {Component} from 'react';
import PROJECTS from './data/projects';
class Project extends Component{
    render(){
        console.log('this.props ',this.props);
        const{title, image , description , link}=this.props.project;
        return(
            <div style={{display:'inline-block', width:200, margin:20}}>
                <h2>{title}</h2>
                <img src={image} alt='Profile' style={{width:200,height:120}}></img>
                <p>{description}</p>
                <a href={link} target="_blank">{link}</a>
            </div>
        )
    }
}
class Projects extends Component{
    render(){
        return(
            <div>
                <h2>Highlighted projects</h2>
                <div>
        {
            PROJECTS.map( PROJECT=>{
return(
<Project key={PROJECT.id} project={PROJECT}></Project>);
            }
            )
        }
                </div>
            </div>
        )
    }
}
export default Projects;