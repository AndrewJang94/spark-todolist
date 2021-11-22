import makeElement from "../../utils/makeElement"
import button from "../../components/button"
import { Router } from "../../routes/router"
import reducer from "../../redux/reducer"

const cancelButton = button("cancel")
const addButton = button("add")

const addPage = function(props) {
console.log(props)

    function onCancelAdd (e){
        cleanUp()
        Router('/todo')
    }
    const page = document.createElement('div') 

    function cleanUp (){
       cancelButton.removeEventListener('click', onCancelAdd)  
        addButton.removeEventListener('click', onAddTodo) 
    }
    function onAddTodo (e){
    
        Router('/todo')
        const newTodo = Object.assign({}, {id: pageBody.querySelector('#id').value},{category: pageBody.querySelector("#category").value},{title: pageBody.querySelector("#title").value}
        ,{isCompleted: pageBody.querySelector("#isCompleted").value},{startDate: pageBody.querySelector("#startDate").value}, {startTime: pageBody.querySelector("#startTime").value},
        {endDate: pageBody.querySelector("#endDate").value},{endTime: pageBody.querySelector("#endTime").value})
            const action = {
            type:"add",
            payload:{newTodo},
            cb:()=> Router('/todo')
            } 
            reducer(action)
            cleanUp()
        };

let body =`<body>
<form>
    <label>ID
        <input id="id" value="${props}""  disabled>
    </label>
    <br>
    <label>Category
        <input id="category">
    </label>
    <br>
    <label>Completed
        <input id="isCompleted" type="checkbox">
    </label>
    <br>
    <label>Todo
        <input id="title">
    </label>
    <br>
    <label>Start Date
        <input id="startDate">
    </label>
    <br>
    <label>Start Time
        <input id="startTime">
    </label>
    <br>
    <label>End Date Time
        <input id="endDate">
    </label>
    <br>
    <label>End Time
        <input id ="endTime">
    </label>
    <br>
    <div><div>

    
</form>
</body>`
const pageBody = makeElement(body)
cancelButton.addEventListener('click', onCancelAdd)  
addButton.addEventListener('click', onAddTodo) 
pageBody.querySelector('div').append(cancelButton, addButton)
page.append(pageBody)

return page

}
export default addPage