//import {Router} from "../../routes/router";




/*const button = function(title='ui button',className='ui-button') {

    const element = `<button class="${className}">${title}</button>`

    return element
}

export default button*/

const link = function (label="ui link", path="/", className="ui-link"){
    const element = `<a href="${path}" data-path="${path}" class="${className}">${label}</a>`
    return element
}

export default link