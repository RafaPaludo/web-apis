const app = document.getElementById('app')

const wrapperAttr = {
  id: 'to-do-wrapper',
  action: '#'
}

const inputAttr = {
  type: 'text',
  placeholder: 'Novo item ...',
  name: 'add-item'
}

const submitButtomAttr = {
  type: 'submit',
  value: 'Adicionar',
  name: 'submit-button'
}

const wrapper = createElementWithAttibutes('form', wrapperAttr)
const input = createElementWithAttibutes('input', inputAttr)
const submitButtom = createElementWithAttibutes('input', submitButtomAttr)
const todosList = createElementWithAttibutes('ul', { id: 'todo-list'})

wrapper.style.marginBottom = '1rem'
input.style.marginRight = '1rem'
input.style.padding = '.5rem'
submitButtom.style.padding = '.5rem'

submitButtom.addEventListener('click', (e) => {
  e.preventDefault()

  if (!input.value) return;

  createTodoList()
  
  input.value = ''
})

app.appendChild(wrapper)
wrapper.appendChild(input)
wrapper.appendChild(submitButtom)
app.appendChild(todosList)

/** Functions */
function createElementWithAttibutes(tagName = 'div', attributes = {}) {
  const element = document.createElement(tagName)

  for (let key in attributes) {
    element.setAttribute(key, attributes[key])
  }

  return element
}

function createTodoList () {
  const length = todosList.children.length
  const todoWrapper = document.createElement('li')
  const todoCompleteButton = document.createElement('button')
  const todoDeleteButton = document.createElement('button')
  const todoRow = createElementWithAttibutes('span', { id: `todo-${length}` })

  todoWrapper.style.margin = '.5rem 0 .5rem 0'
  
  todoRow.innerText = input.value
  todoRow.style.padding = '.5rem'

  todoCompleteButton.innerText = '✅'
  todoCompleteButton.style.margin = '0 .5rem'
  todoCompleteButton.addEventListener('click', () => {
    const selfRow = document.getElementById('todo-' + length)
    if(selfRow) selfRow.style.textDecoration = "line-through";
  })
  
  todoDeleteButton.innerText = '🗑️'
  todoDeleteButton.addEventListener('click', () => {
    const selfRow = document.getElementById('todo-' + length)
    if(selfRow) selfRow.parentElement.remove()
  })

  todoWrapper.appendChild(todoRow)
  todoWrapper.appendChild(todoCompleteButton)
  todoWrapper.appendChild(todoDeleteButton)
  
  todosList.appendChild(todoWrapper)
}