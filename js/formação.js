function showInfo () {
  const cursos = document.querySelectorAll('.cursos .js-concluido')
  const cursosInfo = document.querySelectorAll('.cursos .js-cursoInfo')
  cursos[0].classList.add('active')
  if (cursos.length && cursosInfo.length) {
      cursosInfo[0].classList.add('active')
      function activeAccordion() {
          const activeClass = 'active'
          this.classList.toggle(activeClass)
          this.nextElementSibling.classList.toggle(activeClass)
      }
      cursos.forEach((item) => {
          item.addEventListener('click', activeAccordion)
      })
  }
}
showInfo()