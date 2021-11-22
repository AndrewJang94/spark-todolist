import logo from "~/src/js/icons/logo"

const header = function(title="uiHeader", className="ui-header") {

    const element = `<h1 class="${className}">${logo()}${title}</h>`

    return element
}

export default header