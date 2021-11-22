import makeElement from "../../utils/makeElement"
import button from "../../components/button"
import { Router } from "../../routes/router"
import { getStore } from "../../redux/store"
import reducer from "../../redux/reducer"
import logo from '../../icons/logo'
import header from '../../components/heading/header'
import tagline from '../../components/tag/tagline'

const cancelButton = button("cancel")
const deleteButton = button("delete")


const deletePage = function(props){
       const pageHeader =document.createElement('header')
    pageHeader.classList.add('page-header-todo')
    pageHeader.appendChild(makeElement(header('SPARKS','ui-small-header')))
    pageHeader.appendChild(makeElement(tagline('Take charge of your Todos')))

    const page = document.createElement('div') 
    // CANCEL DELETE EVENT HANDLER
    function onCancelDelete (e){
        
    cleanUp()
    Router('/todo')
    }

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelDelete)  
        deleteButton.removeEventListener('click', onDeleteTodo) 
    }

    console.log(props)


    function onDeleteTodo (e){
        
        if(props !== null){
            Router('/todo')
        const removeTodo = props
        const index = getStore().findIndex(todoitem => todoitem.id === removeTodo.id)
        //const index = getStore().findIndex(todoitem=>todoitem.id === props.id)
            const action = {
            type:"delete",
            payload:{index},
            cb:()=> Router('/todo')
            } 
            reducer(action)
            cleanUp()
        }

    }
    
    let template = `
<header class="welcome center-in-page">
<div><li class="todoitem" data-key="${props.id}">
<p class="category">${props.category}</p>
<p class="title">Todo: ${props.title}</p>
<p class="isCompleted">Completed?: ${props.isCompleted}</p>
<p class="startDate">Start Date :${props.startDate}</p>
<p class="startTime">Start Time: ${props.startTime}</p>
<p class="endDate">End Date:${props.endDate}</p>
<p class="endTime">End Time${props.endTime}</p>
</li>        
</div>
</header>
`
const body = makeElement(template) 
cancelButton.addEventListener('click', onCancelDelete) 
deleteButton.addEventListener('click', onDeleteTodo) 
body.querySelector('div').append(cancelButton, deleteButton)
page.append(body)
pageHeader.append(page)

return pageHeader
}

    export default deletePage