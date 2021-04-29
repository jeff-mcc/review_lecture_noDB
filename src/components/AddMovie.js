import {Component} from 'react'

class AddMovie extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            director: '',
            image: ''
        }
    }

    handleTitle = (value) => {
        this.setState({title: value})
    }

    handleDirector = (value) => {
        this.setState({director: value})
    }

    handleImage = (value) => {
        this.setState({image: value})
    }

    render(){
        return(
            <div>
                <h2>Add Movie Form</h2>
                <input value={this.state.title} onChange={e=>this.handleTitle(e.target.value)} placeholder="Enter Title Here"/>
                <input value={this.state.director} onChange={e=>this.handleDirector(e.target.value)} placeholder="Enter Director Here"/>
                <input value={this.state.image} onChange={e=>this.handleImage(e.target.value)} placeholder="Enter Image Link Here"/>
                <button onClick={()=>{this.props.addMovie(
                    this.state.title,
                    this.state.director,
                    this.state.image
                )
                this.setState({
                    title: '',
                    director: '',
                    image: ''
                })
                }}>Add Movie</button>
            </div>
        )
    }
}

export default AddMovie