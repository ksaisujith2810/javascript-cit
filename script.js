const getPosts = async() => {
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    let postData = await posts.json();
    let div1 = document.getElementById("post");
    if(postData.length > 0){
        console.log(postData);
        let div = document.createElement('div');
        div.setAttribute("class","list-group");
        for(let post of postData){
            let button = document.createElement("button");
            button.setAttribute("class","list-group-item list-group-item-action");
            button.setAttribute("onclick",`getPostDetail(${post.id})`);
            button.innerText = post.id;
            div.appendChild(button);
        }
        div1.appendChild(div);
    }
}

const getPostDetail = async(pId) => {
    let postData = await fetch(`https://jsonplaceholder.typicode.com/posts/${pId}`);
    let pData = await postData.json();
    // console.log(pData);
    
    let div2 = document.getElementById("postDetail");
    div2.innerHTML = `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                            <p class="card-text">${pData.userId}</p>
                            <p class="card-text">${pData.id}</p>
                            <h5 class="card-title">${pData.title}</h5>
                            <p class="card-text">${pData.body}</p>
                        </div>
                        </div>`;
}

