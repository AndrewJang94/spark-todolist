

const makeElement = function(temeplateString=``) {

    const docFrag = document.createRange().createContextualFragment(temeplateString)
    const element = docFrag.children[0]

    return element
}

export default makeElement