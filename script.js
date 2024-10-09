/* 1. if no text in input then alert a message
2. then create li element 
3. put the input of user to the li
4. then put the li in html container
5. set a cross mark beside the li items
*/

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert ("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    inputBox.value = "";
  }
}

listContainer.addEventListener("click", function(e){
  if (e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});