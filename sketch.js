const grid = document.querySelector('#grid')


for (let i=1; i<=16; i++) {
    grid.innerHTML += `<div class=box> ${i} <div>`
}