const selectElements = document.querySelectorAll('[name="status"]')

selectElements.forEach((select) => {
    select.addEventListener('change', () => {
        select.classList.toggle('select-work', select.value === "work")
    })
})

const buttonElements = document.querySelectorAll('.periods-button')

buttonElements.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('active-button')
    })
})