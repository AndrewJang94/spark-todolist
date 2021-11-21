import makeElement from "../utils/makeElement"
import todolist from "../components/cards/todolist"
import { getStore } from "../redux/store"
import todoitem from "../components/cards/todoitem"
import logo from '../icons/logo'
import header from '../components/heading/header'
import tagline from '../components/tag/tagline'
import addIcon from "../icons/add"
import { Router } from "../routes/router"

function onDeleteTodo(e){
  const todoId = {id:e.currentTarget.dataset.key}
  Router('/delete', todoId)
}


const todoListDirectory = function(){
    const todoList = getStore()
    const pageHeader =document.createElement('header')
    pageHeader.classList.add('page-header-todo')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('PROJECT MANAGER','ui-small-header')))
    pageHeader.appendChild(makeElement(tagline('manage your projects in electrfying way')))
    const page = document.createElement('div')
    const container = todolist() 

    if(todoList !== null){
      const ul = container.querySelector('ul')
      const elements = todoList.map(emp => todoitem(emp))
    
      elements.forEach(element=>{ element.querySelector('#delete').addEventListener('click', onDeleteTodo) 
      ul.append(element)})
      page.append(container)
      const footer = document.createElement('footer')
      footer.classList.add('footer')
      footer.append(makeElement(addIcon()))
      page.append(footer)
      pageHeader.append(page)
    }
    
    return pageHeader
}

export default todoListDirectory


