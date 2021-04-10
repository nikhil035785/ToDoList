var listbox = document.getElementById("listbox");
var Topic_Name = document.getElementById("topicName");
var Topic_Description = document.getElementById("topicDescription");
var modal = document.getElementById("modal");

var modal2 = document.getElementById("modal2");
var tname = document.getElementById("topicName2");
var des = document.getElementById("topicDescription2");
var topic = document.getElementById("topic");

document.getElementById("Cancel").addEventListener("click", function(){
    modal.classList.remove("swipe-down");
    modal.classList.add("swipe-up");
    setTimeout(
        function(){
            modal.style.display = "none";
        },
        400
    );
});

document.getElementById("newToDo").addEventListener("click", function(){
    modal.style.display = "";
    modal.classList.remove("swipe-up");
    modal.classList.add("swipe-down");
    Topic_Name.focus();
});

document.getElementById("ClearList").addEventListener("click", function(){
    //let list = JSON.parse(localStorage.getItem("myList2"));
    if(confirm("List will be wiped out...")){
        let arr_myList = [];
        localStorage.setItem("myList2", JSON.stringify(arr_myList));
        listbox.innerHTML = `<h2>List is empty.</h2>`;
    }
});

function cancel(){
    modal.classList.remove("swipe-down");
    modal.classList.add("swipe-up");
    setTimeout(
        function(){
            modal.style.display = "none";
        },
        400
    );
}





document.getElementById("addNew").addEventListener("click", function(){
    let title = Topic_Name.value;
    let descipt  = Topic_Description.value;
    addList(title, descipt);
});

function addList(title, disc){
    if(localStorage.getItem("myList2") == null){
        let arr_myList = [];
        arr_myList.push([title,disc]);
        localStorage.setItem("myList2",JSON.stringify(arr_myList));
        Topic_Name.value = "";
        Topic_Description.value = "";
        cancel();
        todolist();
    }
    else{
        let arr_myList = JSON.parse(localStorage.getItem("myList2"));
        arr_myList.push([title,disc]);
        localStorage.setItem("myList2",JSON.stringify(arr_myList));
        Topic_Name.value = "";
        Topic_Description.value = "";
        cancel();
        todolist();
    }
}

// document.getElementById("listbox").addEventListener("click", function(){
//     todolist();
//     console.log("called");
// });
function todolist(){
    
    let list = JSON.parse(localStorage.getItem("myList2"));
    console.log(list);
    listbox.innerHTML = ``;
    for (let i = 0; i < list.length; i++){
        var num = list[i];
        var v = i;
        console.log(v+" & "+list.length);
        if (i == list.length-1) {
            listbox.innerHTML += `<div class="col-sm-4 col-md-4 zoom">
                <div class="box-container">
                    <div class="box-top">
                        <p class="topic-name">`+num[0]+`</p>
                        <div>
                            <button class="edit" id="edit`+v+`" title="Edit" onclick="edit(`+v+`)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                            <button class="removes" id="del`+v+`" title="Delete" onclick="remove(`+v+`)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <div class="box-body">
                        <p class="description">
                            `+num[1]+`
                        </p>
                    </div>
                </div>
            </div>`;
            break;
        }
        listbox.innerHTML += `<div class="col-sm-4 col-md-4">
        <div class="box-container">
            <div class="box-top">
                <p class="topic-name">`+num[0]+`</p>
                <div>
                    <button class="edit" id="edit`+v+`" title="Edit" onclick="edit(`+v+`)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                    <button class="removes" id="del`+v+`" title="Delete" onclick="remove(`+v+`)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </div>
            </div>
            <div class="box-body">
                <p class="description">
                    `+num[1]+`
                </p>
            </div>
        </div>
    </div>`;
    }
}

function remove(ids){
    //alert(ids);
    let list = JSON.parse(localStorage.getItem("myList2"));
    list.splice(ids,1);
    localStorage.setItem("myList2",JSON.stringify(list));
    //arr = list;
    todolist()
}


function cancel2(){
    modal2.classList.remove("swipe-down");
    modal2.classList.add("swipe-up");
    setTimeout(
        function(){
            modal2.style.display = "none";
        },
        400
    );
}

function edit(i){
    
    let arr = JSON.parse(localStorage.getItem("myList2"));
    let t1 = arr[i];
    modal2.style.display = "";
    modal2.classList.remove("swipe-up");
    modal2.classList.add("swipe-down");
    topic.innerText = 'Update : '+t1[0];
    tname.value = t1[0];
    des.value = t1[1];
    tname.focus();
    document.getElementById("update2").setAttribute("onclick", "update("+i+")");
}

function update(j){
    let arr = JSON.parse(localStorage.getItem("myList2"));
    let topic_title = tname.value;
    let topic_descr = des.value;
    let temp_arr = [topic_title, topic_descr];
    arr[j] = temp_arr;
    localStorage.setItem("myList2", JSON.stringify(arr));
    updatelist(j);
    cancel2();
}

function updatelist(k){
    
    let list = JSON.parse(localStorage.getItem("myList2"));
    console.log(list);
    listbox.innerHTML = ``;
    for (let i = 0; i < list.length; i++){
        var num = list[i];
        var v = i;
        console.log(v+" & "+list.length);
        if (i == k) {
            listbox.innerHTML += `<div class="col-sm-4 col-md-4 zoom">
                <div class="box-container">
                    <div class="box-top">
                        <p class="topic-name">`+num[0]+`</p>
                        <div>
                            <button class="edit" id="edit`+v+`" title="Edit" onclick="edit(`+v+`)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                            <button class="removes" id="del`+v+`" title="Delete" onclick="remove(`+v+`)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <div class="box-body">
                        <p class="description">
                            `+num[1]+`
                        </p>
                    </div>
                </div>
            </div>`;
            continue;
        }
        listbox.innerHTML += `<div class="col-sm-4 col-md-4">
        <div class="box-container">
            <div class="box-top">
                <p class="topic-name">`+num[0]+`</p>
                <div>
                    <button class="edit" id="edit`+v+`" title="Edit" onclick="edit(`+v+`)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                    <button class="removes" id="del`+v+`" title="Delete" onclick="remove(`+v+`)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </div>
            </div>
            <div class="box-body">
                <p class="description">
                    `+num[1]+`
                </p>
            </div>
        </div>
    </div>`;
    }
}