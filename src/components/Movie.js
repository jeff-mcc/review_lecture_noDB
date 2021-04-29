import {Component} from 'react'

class Movie extends Component{
    constructor(props){
        super(props)
        this.state = {
            editMode: false,
            title: ''
        }
    }

    handleTitle = (title) => {
        this.setState({title: title})
    }

    toggleEdit = () => {
        this.setState({editMode: !this.state.editMode})
    }

    handleSave = () => {
        this.props.editMovie(this.props.movie.id,this.state.title)
        this.toggleEdit()
        this.setState({title: ''})
    }

    render(){
        return this.state.editMode ? (
            <div>
                <input value={this.state.title} onChange={(e)=>this.handleTitle(e.target.value)} placeholder="Edit Title Here"/>
                <button onClick={this.handleSave}>Save</button>
                <button onClick={()=>this.toggleEdit()}>Cancel</button>
            </div>
        ) : (
            <div>
                <p>Title: {this.props.movie.title}</p>
                <p>Director: {this.props.movie.director}</p>
                <img src={this.props.movie.image} alt={this.props.movie.title}/>
                <button onClick={()=>this.props.deleteMovie(this.props.movie.id)}>Delete Movie</button>
                <button onClick={()=>this.toggleEdit()}>Edit</button>
            </div>
        )
    }
}

export default Movie