import makeElement from "../../utils/makeElement"
import todolist from "../../components/cards/todolist"
import { getStore } from "../../redux/store"
import todoitem from "../../components/cards/todoitem"
import header from '../../components/heading/header'
import tagline from '../../components/tag/tagline'
import addIcon from "../../icons/add"
import { Router } from "../../routes/router"
import { v4 as uuidv4} from 'uuid'


const todoListDirectory = function(){
    const todoList = getStore()
    const pageHeader =document.createElement('header')
    pageHeader.classList.add('page-header-todo')
    pageHeader.appendChild(makeElement(header('SPARKS','ui-small-header')))
    pageHeader.appendChild(makeElement(tagline('Take charge of your Todos')))
    const page = document.createElement('div')
    const container = todolist() 

    function render(){
      const ul = container.querySelector('ul')
      const elements = todoList.map(emp => todoitem(emp))
      elements.forEach(element=>{ element.querySelector('#delete').addEventListener('click', onDeleteTodo) 
      ul.append(element)})
      elements.forEach(element=>{ element.querySelector('#edit').addEventListener('click', onEditTodo) 
      ul.append(element)})
      page.append(container)
      const footer = document.createElement('footer')
      footer.classList.add('footer')
      footer.append(makeElement(addIcon()))
      footer.addEventListener('click', onAddTodo) 
      page.append(footer)
      pageHeader.append(page)
    }

    function cleanUp( ){
      const todoitems = container.querySelectorAll('aside') 
      const footer = page.querySelector('footer')
      todoitems.forEach((todoitem)=>{
           todoitem.removeEventListener('click', onDeleteTodo)
           todoitem.removeEventListener('click', onEditTodo)
           
      })
      footer.removeEventListener('click', onAddTodo)
   }

    function onDeleteTodo(e){
      const todoId = e.currentTarget.dataset.key
      const todoitem = getStore().filter((todoitem) => todoitem.id === todoId)
      cleanUp()
      Router('/delete', todoitem[0])
    }

    function onEditTodo(e) {
      const todoId = e.currentTarget.dataset.key
      const todoitem = getStore().filter((todoitem) => todoitem.id === todoId)
      cleanUp()
      Router('/edit', todoitem[0])
    }

    function onAddTodo(e) {
      const todoId  = uuidv4().substr(0,8)
      cleanUp()
      Router('/add', todoId)
    }

    render()
    
    
    return pageHeader
}

export default todoListDirectory


