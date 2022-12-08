const menu = document.querySelector("#menu");
const menu_btn = document.querySelector("#menu-btn").addEventListener('click', () => {
  menu.classList.toggle('hidden');
})

const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach(accordionHeader => {
  accordionHeader.addEventListener("click", event => {
    const flechita = accordionHeader.childNodes[3];
    accordionHeader.classList.toggle("active");
    flechita.classList.toggle("flechita-active")
    const accordionBody = accordionHeader.nextElementSibling
    if(accordionHeader.classList.contains("active")){
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"
    } else {
      accordionBody.style.maxHeight = 0;
    }
  })
})