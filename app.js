function fetchAllData()
{
    const url = "https://reqres.in/api/users";
fetch(url)
.then(response => {
    //console.log(response);
    if(!response.ok){
        throw Error("ERRRORRR");
    }return response.json()
})
.then(data => {
    console.log(data.data);
    const html = data.data.map(user =>{
        return `
        <div class="user">
        <p> <img src="${user.avatar}" alt="${user.first_name}"></p>
        <p> Name :${user.first_name}</p>
        <p> Surname: ${user.last_name}</p>
        <p> Email :${user.email} </p>
        <button type="button"> Details </button>
        </div>
        
        `
    }).join("");
    //console.log(html);
    document
    .querySelector('#app')
    .insertAdjacentHTML('afterbegin',html);
})
.catch(error =>{
    console.log(error)
});
}
fetchAllData();


function fetchName()
{
const url = "https://reqres.in/api/users";
    fetch(url)
    .then(response => {
    //console.log(response);
    if(!response.ok){
        throw Error("ERRRORRR");
    }return response.json()
    })
    .then(data => {
        console.log("datanın datası");
        console.log(data.data);
        console.log("datanın datasının namesi");
        console.log(data.data[0]);
        const ourdata = data.data;
        var names = ourdata.map(getName);
        console.log("names");
        console.log(names);
       // ourdata.map(item =>{
        //    console.log(item.first_name);

       // });
       

        names.forEach(element => {
            //document.getElementById("name").innerHTML += data.data.map(getName);
            console.log(element);
        });

        
        document.getElementById("name").innerHTML += names[0];
        
        //document.querySelector("#deneme").innerHTML = data.data.first_name;
        //document.getElementById("name").innerHTML += data.data.map(getName);
        console.log(typeof(data.data.map(getName)));
})
.catch(error =>{
    console.log(error)
});
}

fetchName();


function getName(item){
    return [item.first_name].join(" ");
}




