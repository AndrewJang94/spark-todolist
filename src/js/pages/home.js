import logo from '../icons/logo'
import header from '../components/heading/header'
import makeElement from '../utils/makeElement'
import tagline from '../components/tag/tagline'
import link from '../components/button/links'


const home = function(params) {

    const pageHeader =document.createElement('header')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('Project Manager')))
    pageHeader.appendChild(makeElement(tagline('manage your projects in electrfying way')))
    pageHeader.appendChild(makeElement(link('GET STARTED', '/todo')))

    return pageHeader
}

export default home