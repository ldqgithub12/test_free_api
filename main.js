const btnPost = document.getElementById("posts")
const btnPhotos = document.getElementById("photos")
const btnAlbums = document.getElementById("albums")
const listEl = document.querySelector("ul")
const titleEl = document.getElementById("title")
btnPost.addEventListener("click",()=>{

    btnPost.style.backgroundColor = "red";
    btnPhotos.style.backgroundColor = "white";
    btnAlbums.style.backgroundColor = "white";
    titleEl.innerText = `Type: Post`
    getPostList();
})
btnPhotos.addEventListener("click",()=>{
    btnPhotos.style.backgroundColor = "red";
    btnAlbums.style.backgroundColor = "white";
    btnPost.style.backgroundColor = "white";
    titleEl.innerText = "Type: Photos"
    getPhotosList();
})
btnAlbums.addEventListener("click",()=>{
    btnAlbums.style.backgroundColor = "red";
    btnPhotos.style.backgroundColor = "white";
    btnPost.style.backgroundColor = "white";
    titleEl.innerText = "Type: Albums"
    getAlbumsList();
})
async function getPostList() {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    listEl.innerText="";
    for(i = 0;i<10;i++){
        listEl.insertAdjacentHTML("afterbegin",`<li>${res.data[i].title}</li>`)
    }
}
async function getAlbumsList() {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
    listEl.innerText="";
    for(i = 0;i<10;i++){
        listEl.insertAdjacentHTML("afterbegin",`<li>${res.data[i].title}</li>`)
    }
}
async function getPhotosList() {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    listEl.innerText="";
    for(i = 0;i<10;i++){
        listEl.insertAdjacentHTML("afterbegin",`<li>${res.data[i].title}</li>`)
    }
}
console.log(listEl);
