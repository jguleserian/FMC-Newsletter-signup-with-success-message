// Signup Form
const submitBtn = document.querySelector('.submit')
const email = document.getElementById('email')
const errorText = document.querySelector('.error-text')
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//Modal Form
const successMsg = document.getElementById('success-message')
const textInsert = document.querySelector('.text-insert')
const modalBtn = document.querySelector('.modal-button')

submitBtn.addEventListener('click', e => {
  e.preventDefault()
  if (checkInput(email.value)) {
    textInsert.innerHTML = email.value
    successMsg.classList.remove('hide')
  } else {
    email.classList.add('input-error')
    errorText.style.color = '#ff6257'
    document.getElementById('email').placeholder.style.color = '#ff6257'
  }
})

const checkInput = input => {
  return emailRegex.test(input)
}

modalBtn.addEventListener('click', () => {
  location.reload()
})
