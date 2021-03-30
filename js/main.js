
var listTable = document.getElementById("myList");
var addtolist = document.getElementById("addlist");
arr = [];
addtolist.onclick = function(){
    let titles = document.getElementById("title").value;
    let descri = document.getElementById("decription").value;
    if (check() == true) {
        if(localStorage.getItem("myList") != null){
            arr = JSON.parse(localStorage.getItem("myList"));
            addList(titles, descri);
        }
        else{
            localStorage.setItem("myList", arr);
            addList(titles, descri);
        }
    }
    else{
        alert(check());
    }
}

function check(){
    if((listTable == "" || listTable == null) && (addtolist == "" || addtolist == null)){
        return true;
    }
    else{
        return false;
    }
}

function addList(title, disc){
    arr.push([title,disc]);
    localStorage.setItem("myList",JSON.stringify(arr));
    document.getElementById("title").value = "";
    document.getElementById("decription").value = "";
    ListUpdate();
}

document.getElementById("clearlist").addEventListener("click",function(){
    if(confirm("List will be wiped out...")){
        localStorage.clear();
        ListUpdate()
    }
});

function ListUpdate(){
    let list = JSON.parse(localStorage.getItem("myList"));
    if (list == "") {
        console.log("Null");
    }
    else{
        listTable.innerHTML = ``;
        for (let i = 0; i < list.length; i++) {
            var element = list[i];
            
            if(element == null){
                console.log("Null value");
            }else{
                var num = i+1;
                listTable.innerHTML += `<tr><td>`+num+`</td><td>`+element[0]+`</td><td>`+element[1]+`</td><td><button onclick="deleteFromList(`+i+`)">Delete <i class="fa fa-trash"></i></button></td></tr>`;
            }
        }
    }
        
}

function deleteFromList(index){
    let list = JSON.parse(localStorage.getItem("myList"));
    list.splice(index,1);
    localStorage.setItem("myList",JSON.stringify(list));
    arr = list;
    ListUpdate()
}