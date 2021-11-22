import makeElement from "../../utils/makeElement"
import button from "../../components/button"
import { Router } from "../../routes/router"
import { getStore } from "../../redux/store"
import reducer from "../../redux/reducer"

const cancelButton = button("cancel")
const editButton = button("edit")

const editPage = function(props) {
console.log(props)
    function onCancelEdit (e){
        cleanUp()
        Router('/todo')
    }
    const page = document.createElement('div') 

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelEdit)  
        editButton.removeEventListener('click', onEditTodo) 
    }
    function onEditTodo (e){
    
        Router('/todo')
        const newTodo = Object.assign({}, {id: pageBody.querySelector('#id').value},{category: pageBody.querySelector("#category").value},{title: pageBody.querySelector("#title").value}
        ,{isCompleted: pageBody.querySelector("#isCompleted").value},{startDate: pageBody.querySelector("#startDate").value}, {startTime: pageBody.querySelector("#startTime").value},
        {endDate: pageBody.querySelector("#endDate").value},{endTime: pageBody.querySelector("#endTime").value})
            const index = getStore().findIndex(todoitem => todoitem.id === newTodo.id)
            const action = {
            type:"edit",
            payload:{index, newTodo},
            cb:()=> Router('/todo')
            } 
            reducer(action)
            cleanUp()
        };

let body =`<body>
<form>
    <label>ID
        <input id="id" value="${props.id}" disabled>
    </label>
    <br>
    <label>Category
        <input id="category" value="${props.category}">
    </label>
    <br>
    <label>Completed
        <input id="isCompleted" type="checkbox" value="${props.isCompleted}">
    </label>
    <br>
    <label>Todo
        <input id="title" value="${props.title}">
    </label>
    <br>
    <label>Start Date
        <input id="startDate" value="${props.startDate}">
    </label>
    <br>
    <label>Start Time
        <input id="startTime" value="${props.startTime}">
    </label>
    <br>
    <label>End Date Time
        <input id="endDate" value="${props.endDate}">
    </label>
    <br>
    <label>End Time
        <input id ="endTime" value="${props.endTime}">
    </label>
    <br>
    <div><div>

    
</form>
</body>`
const pageBody = makeElement(body)
cancelButton.addEventListener('click', onCancelEdit)  
editButton.addEventListener('click', onEditTodo) 
pageBody.querySelector('div').append(cancelButton, editButton)
page.append(pageBody)

return page

}
export default editPage