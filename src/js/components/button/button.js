import makeElement from "../../utils/makeElement"

const button = function(title='ui button',className='ui-button') {

    const template = `<button class="${className}">${title}</button>`
    const element = makeElement(template);

    return element
}


export default button