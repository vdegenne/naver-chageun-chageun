const { render, html } = require('lit-html')

function getHiddenParts (div) {
  return [...div.querySelectorAll('.part')].filter(el => {
    return el.style.display === 'none'
  })
}

function isSpacePart (part) {
  return part.textContent === ' '
}

function bindEventListener (el) {
  el.addEventListener('click', (e) => {
    const div = e.target.classList.contains('part') ? e.target.parentElement : e.target;
    let parts = getHiddenParts(div)
    if (parts.length > 0) {
      parts[0].style.display = 'initial'
    }
    if (parts[1] && parts[1].textContent === ' ') {
      parts[1].style.display = 'initial'
    }
  })
}

window.onload = () => {
  const sentences = [...document.querySelectorAll('.translate > p')]
  sentences.forEach(p => {
    const parts = p.textContent.trim().match(/\s|[^\s]+/g)
    const container = document.createElement('div')
    container.style.height = '20px'
    container.style.cursor = 'pointer'
    render(html`
    ${parts.map(p => html`<span style="display:none" class="part">${p}</span>`)}
    `, container)
    render(container, p)
    // p.innerHTML = container;
    bindEventListener(container)
  })
}