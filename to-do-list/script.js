const inputBox=document.getElementById("input-box");        //defining a constant for the input box id in htm, for the add your text box
const ListContainer=document.getElementById("list-container"); //defining a constant for the list(the list for the tasks to be entered)  
//input box is the add your task box
function addTask(){
    if(inputBox.value === ''){                      //if the input box is empty, it gives an alert
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");        //creating an html element with the tag name li, using document.createElement and is stored in li variable as defined in the starting
        li.innerHTML=inputBox.value;            //the text we have entered in the input field will be added in the li variable
        ListContainer.appendChild(li);          //this is where the content is displayed
        let span=document.createElement("span");        //to display a cross mark on the right side for a task 
        span.innerHTML = "\u00d7";        //u00d7 is the code for cross mark, this will add the cross mark
        li.appendChild(span);           //to display the cross mark
    }

    inputBox.value = "";            //once you enter one text, the input box should become cleared and only "Add your text" be displayed , so making it empty after entering the text and clicking add
    saveData();     //calling the savedata function, everytime a task is added, it must be stored on the browser
}

 //function to enable the clicking events

ListContainer.addEventListener("click",function(e){         //adding an event listener, whenever we click the container where we have stored the tasks, it will check where we have clicked  
    if(e.target.tagName === "LI"){                          //if we have clicked in LI(the circle icon before the task), it should add the checked class name, it will make it checked, the cirle will become checked, and if we click again it will become unchecked, since we have used the toggle
        e.target.classList.toggle("checked");
        saveData()          //calling the savedata function again when we check or uncheck , it must be saved on the browser
    }
    else if(e.target.tagName === "SPAN"){               //if we have clicked in the span ie the cross mark, then it will delete the task
        e.target.parentElement.remove();
        saveData()              //calling the savedata function again, when a task is removed, it must be saved too
    }
},false);


//function for local storage(when we refresh or close the browser, the tasks should still be stored)
function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML);       //data is the name of contents to be stored, ListCOntainer.innerHTML is saying, everything in the list container ie all the tasks must be stored
    
}

//function to display the data again when the browser is opened or refreshed
function showTask(){

    ListContainer.innerHTML=localStorage.getItem("data");         //display every content named as data
}
showTask() //calling the funcion showdata 