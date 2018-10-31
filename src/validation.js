const regularExpresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const isNotEmpty = value => (value !== '');
const isEmail = value => (regularExpresion.test(value))
const isMessage = value => (value.trim() !== '');

const validationEmail = (value) =>{
   return isNotEmpty(value) && isEmail(value) && isMessage(value)
}