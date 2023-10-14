const inputEl = document.getElementById('example')
const btmEl = document.querySelector('.todo-list__btn')
const fielEl = document.querySelector('.todo-list__field')

function onButClick() {
    if (inputEl.value.length) {
        const divEl = document.createElement('div')
        divEl.classList.add('todo-list__item')

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        const text = document.createElement('p')
        text.classList.add('todo-list__item-text')
        text.innerText = inputEl.value

        const img = document.createElement('img')
        img.src = 'trach.jpg'

        divEl.appendChild(checkbox)
        divEl.appendChild(text)
        divEl.appendChild(img)

        fielEl.appendChild(divEl)
        inputEl.value = ''
    }
}
btmEl.addEventListener('click', onButClick)

inputEl.addEventListener('input', () => {
    console.log(inputEl.value);
}) 