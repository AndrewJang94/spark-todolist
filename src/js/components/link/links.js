import {Router} from "../../routes/router";
import makeElement from "../../utils/makeElement"

const onRequestPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path);
    return false;
}



/*const button = function(title='ui button',className='ui-button') {

    const element = `<button class="${className}">${title}</button>`

    return element
}

export default button*/

const link = function (label="ui link", path="/", className="ui-link"){
    const template = `<a href="${path}" data-path="${path}" class="${className}">${label}</a>`
    const element = makeElement(template)
    element.addEventListener('click', onRequestPage)
    
    return element
}

export default link