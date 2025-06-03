const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
console.log(listContainer)

document.getElementById("add-btn").addEventListener("click",addTask);
addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        addTask()
    }

})

function addTask(){
    if(inputBox.value==""){
        alert("You must write something!!!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        let span=document.createElement("span");
        span.innerHTML="<i class=' fa fa-trash-o'style='font-size:36px' ></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value="";
    saveData()
}
// save data to localstorage

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName.toUpperCase()==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if( e.target.tagName.toUpperCase()==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
        

})
// fetch data from localstorage

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()