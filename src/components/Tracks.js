import React, {Component} from 'react';

class Tracks extends Component{
    state={playing:false,audio:null, playingPreviewUrl:null};

    playAudio=previewUrl=>()=>{
        const audio=new Audio(previewUrl);
        if(!this.state.playing){
            audio.play();
            this.setState({playing:true,audio,playingPreviewUrl:previewUrl});
        }
        else{
            this.state.audio.pause();
            if(this.state.playingPreviewUrl==previewUrl){
                this.setState({playing:false});
            }
            else{
            audio.play();
            this.setState({playing:true,audio,playingPreviewUrl:previewUrl});
            }
            
        }
       
    }
    render(){
        const {tracks}= this.props;
        return(
            <div>
                {
                    tracks.map(track=>{
                        const{id,album,name, preview_url}=track;
                        return(
                            <div key={id} style={{float:"left"}} onClick={this.playAudio(preview_url)}>
                                <img src={album.images[0].url}
                                alt='track-image'
                                style={{width:200, height:200,margin:10}}/>
                                <p>{name}</p>
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Tracks;