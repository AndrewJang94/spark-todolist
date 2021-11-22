import makeElement from "../../utils/makeElement"
import button from "../../components/button"
import { Router } from "../../routes/router"
import { getStore } from "../../redux/store"
import reducer from "../../redux/reducer"

const cancelButton = button("cancel")
const deleteButton = button("delete")


const deletePage = function(props){

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
    
    let headerTemplate = `
<header class="welcome center-in-page">
<h1>Delete Employee</h1>
<p>Remove Employee</p> 
<div><li class="todoitem" data-key="${props.id}">
<p class="category">${props.category}</p>
<p class="title">${props.title}</p>
<p class="isCompleted">${props.isCompleted}</p>
</li>        
</div>
</header>
`
const pageHeader = makeElement(headerTemplate) 
cancelButton.addEventListener('click', onCancelDelete) 
deleteButton.addEventListener('click', onDeleteTodo) 
pageHeader.querySelector('div').append(cancelButton, deleteButton)
page.append(pageHeader)

return page
}

    export default deletePage