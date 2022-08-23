const changeHeaderBtn = document.getElementById('change-header-btn')
const header = document.getElementById('header')

changeHeaderBtn.addEventListener('click', () =>
{
    header.textContent = 'Hello, World!' ? 'Goodbye, World' : 'Hello, World!'
})
