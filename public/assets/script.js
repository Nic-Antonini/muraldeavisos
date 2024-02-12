document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts()
})

function updatePosts(){
   let promise = fetch("https://nic-antonini.github.io/muraldeavisos/api/all").then(res =>{
        return res.json()
    }).then(json=>{
        let postElements = "";

        let posts = JSON.parse(json);
        posts.forEach((post)=>{

            let postElement = 
            `<div id="${post.id}" class="card mb-4">
            <div class="card-header">
            <h5 class="card-title">${post.title}</h5>
            </div>
    
            <div class="card-body">
            <div class="card-text">${post.description}</div>
            </div>
            </div>`;

            postElements += postElement;

        })

        document.getElementById("posts").innerHTML = postElements

    })

}

function newPost(){

    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;
    let post = {title, description}

    //a constante options vai ser usada para avisar que essa
    //requisição é um post e que ela é um objeto (json) e colocar
    //no header e no body.
    const options = {method: "POST",
                    headers: new Headers({'content-type': 'application/json'}),
                    body: JSON.stringify(post)
                    }

    fetch("https://nic-antonini.github.io/muraldeavisos/api/new", options).then( res => {
        updatePosts()
        let title = document.getElementById("title").value = "";
        let description = document.getElementById("desc").value = "";
    })

}
