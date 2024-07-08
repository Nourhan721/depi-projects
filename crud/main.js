//form inputs
const movieName = document.getElementById('name')
const movieYear = document.getElementById('year');
const movieGenre = document.getElementById('genre');

const searchInput = document.getElementById('search')

const addBtn = document.getElementById('add')
//update

let mood='create'
let updateditem;


let movieContainer=[]


if(localStorage.getItem('movie')){
    movieContainer = JSON.parse(localStorage.getItem('movie'))
    display()
}


//add movie
function addMovie(){
    let movie = {
        name:movieName.value,
        year:movieYear.value,
        genre:movieGenre.value,
    }

    if(mood === "Create"){
            movieContainer.push(movie);
        }else{
        movieContainer[updateditem] = movie;
        mood = "create";
        addBtn.innerHTML = "Create";
    }


    localStorage.setItem('movie',JSON.stringify(movieContainer))
    display()
    clearMovie()

}

// display

function display(){
    let show=''
    for(let i = 0 ;i < movieContainer.length; i++){
        show += `
        <tr>
        <td>${i}</td>
        <td>${movieContainer[i].name}</td>
        <td>${movieContainer[i].year}</td>
        <td>${movieContainer[i].genre}</td>
        <td><button onClick = 'update(${i})'<i class="fa-solid fa-pen-to-square" style="color: rgb(78, 50, 77)"></i></button></td>
        <td><button onClick ='deleteItem(${i})' <i class="fa-solid fa-delete-left" style="color:rgb(78, 50, 77) "></i></button></td>
        </tr>
        `
    }
    document.getElementById('showData').innerHTML=show;
}

//to clear

function clearMovie(){
    movieName.value=''
    movieYear.value=''
    movieGenre.value=''
}

function  deleteItem(index){
    movieContainer.splice(index,1)
    localStorage.setItem('movie',JSON.stringify(movieContainer))
    display()
}

//search

function search(text){
    let show=''
    for(let i = 0 ;i < movieContainer.length; i++){
    if(movieContainer[i].name.toLowerCase().includes(text.toLowerCase())){
        show += `
        <tr>
        <td>${movieContainer[i].name}</td>
        <td>${movieContainer[i].year}</td>
        <td>${movieContainer[i].genre}</td>
        <td><button onClick = 'update(${i})'  <i class="fa-solid fa-pen-to-square" style="color:rgb(78, 50, 77) ;"></i></button></td>
        <td><button onClick ='deleteItem(${i})' <i class="fa-solid fa-delete-left" style="color:rgb(78, 50, 77)" > </i></button></td>
        </tr>
        `
    }
    document.getElementById('showData').innerHTML=show;

    }

}

searchInput.addEventListener('input', () =>{search(searchInput.value)})


//update

function update(i){
    movieName.value=movieContainer[i].name
    movieYear.value=movieContainer[i].year
    movieGenre.value=movieContainer[i].genre
    addBtn.innerHTML='update'
    mood='update'
    updateditem = i ;

}
