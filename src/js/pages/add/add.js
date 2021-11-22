import makeElement from "../../utils/makeElement"
import button from "../../components/button"
import { Router } from "../../routes/router"
import reducer from "../../redux/reducer"
import header from '../../components/heading/header'
import tagline from '../../components/tag/tagline'

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
        <input id="startDate" type="date">
    </label>
    <br>
    <label>Start Time
        <input id="startTime" type="time">
    </label>
    <br>
    <label>End Date Time
        <input id="endDate" type="date">
    </label>
    <br>
    <label>End Time
        <input id ="endTime" type="time">
    </label>
    <br>
    <div><div>

    
</form>
</body>`
const pageHeader =document.createElement('header')
pageHeader.classList.add('page-header-todo')
pageHeader.appendChild(makeElement(header('SPARKS','ui-small-header')))
pageHeader.appendChild(makeElement(tagline('Take charge of your Todos')))
const pageBody = makeElement(body)
cancelButton.addEventListener('click', onCancelAdd)  
addButton.addEventListener('click', onAddTodo) 
pageBody.querySelector('div').append(cancelButton, addButton)
page.append(pageBody)
pageHeader.append(page)

return pageHeader

}
export default addPage