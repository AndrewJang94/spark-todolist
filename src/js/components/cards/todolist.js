import makeElement from './../../utils/makeElement'
const todo = function (){
    const template = `
    <aside id="todolist" class="todolist">
    <ul id="todoitem" class="todoitem">
     
    </ul>
    <footer>

    </footer>
</aside>
    `

    return makeElement(template)
}

export default todo