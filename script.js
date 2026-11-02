async function fetchAPI(username) {
    let data = await fetch(`https://api.github.com/users/${username}`)
    let info = await data.json();
    return info ; 
}
async function fetchRepos(username) {
    let data = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`)
     let info = await data.json();
    return info ; 
    
}
let button = document.getElementById("btn");
let input = document.getElementById("input")
let main = document.getElementById("main")

function viewUser (info,repos){
    let profile = document.createElement("div") ;
    profile.innerHTML =`<div class="identifier flex flex-row m-10 gap-10 items-center">
            <img src="${info.avatar_url}" alt="" class="w-30 rounded-full ">
            <h3 class="name font-2xl text-white font-sans">${info.login}</h3>
        </div>
        <div class="projectsGrid grid grid-cols-2 gap-10">
            <div class="projectCard p-7 bg-slate-800 rounded-lg border border-white">
                <h4 class="projectName text-xl text-white">${repos[0].name}</h4>
                <p class="description text-white">${repos[0].description}</p>
            </div>
             <div class="projectCard p-7 bg-slate-800 rounded-lg border border-white">
                <h4 class="projectName text-xl text-white">${repos[1].name}</h4>
                <p class="description text-white">${repos[1].description}</p>
            </div>
             <div class="projectCard p-7 bg-slate-800 rounded-lg border border-white">
                <h4 class="projectName text-xl text-white">${repos[2].name}</h4>
                <p class="description text-white">${repos[2].description}</p>
            </div>
             <div class="projectCard p-7 bg-slate-800 rounded-lg border border-white">
                <h4 class="projectName text-xl text-white">${repos[3].name}</h4>
                <p class="description text-white">${repos[3].description}</p>
            </div>
        </div>`
    return profile ; 

}

button.addEventListener("click",async (e)=>{
    e.preventDefault() ; 
     main.innerHTML=""
    let user = input.value ; 
    input.value = "" ;
    let info = await fetchAPI(user);
    let repos = await fetchRepos(user);
    if(!info){console.log("User not found !!!");    
    }
    else{
       
        main.appendChild(viewUser(info,repos));

    }
})