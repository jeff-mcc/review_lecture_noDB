let movies = [
    {
        id: 0,
        title: 'Star Wars',
        director: 'George Lucas',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/SW_-_Empire_Strikes_Back.jpg/220px-SW_-_Empire_Strikes_Back.jpg'
    }
];
let id = 1;

module.exports = {
    getMovies: (req,res)=>{
        res.status(200).send(movies)
    },
    addMovie: (req,res)=>{
        const {title,director,image} = req.body
        const movie = {
            id,
            title,
            director,
            image
        }
        id++
        movies.push(movie)
        res.status(200).send(movies)
    },
    deleteMovie: (req,res)=>{
        let idx = +req.params.id
        const index = movies.findIndex((e)=>{
            return e.id === idx
        })
        movies.splice(index,1)
        // movies = movies.filter((e)=>{e.id!==idx})
        res.status(200).send(movies)
    },
    editMovie: (req,res)=>{
        const {title} = req.body
        let idx = +req.params.id
        const index = movies.findIndex((e)=>{
            return e.id === idx
        })
        movies[index] = {
            ...movies[index],
            title: title
        }
        res.status(200).send(movies)
    }
}