import { urlValidation } from './js/nameChecker.js'
import { handleSubmit } from './js/formHandler.js'
import { updateUI } from './js/UIresponse'


import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log("****************************");
console.log(urlValidation);

alert("I EXIST")

export {
    urlValidation,
    handleSubmit,
    updateUI
   }