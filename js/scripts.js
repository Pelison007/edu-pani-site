function scrollBoxes(direction, containerId) {
    const container = document.getElementById(containerId);
    const wrapper = container.parentElement;

    const card = container.querySelector('.flex-shrink-0');
    const cardWidth = card.offsetWidth;
    const gap = 16;

    wrapper.scrollBy({
        left: direction * (cardWidth + gap),
        behavior: 'smooth'
    });
}

const loader = document.getElementById("page-loader");
const whatsappBtn = document.querySelector(".whatsapp-fixo");

// Ao carregar a página
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hidden");           // esconde loader
    if (whatsappBtn) whatsappBtn.classList.add("visible"); // mostra botão suavemente
  }, 500);
});

// Ao clicar em links internos
document.querySelectorAll("a[href]").forEach(link => {
  const url = link.getAttribute("href");

  if (
    url &&
    !url.startsWith("http") &&
    !url.startsWith("#") &&
    !url.startsWith("mailto") &&
    !url.startsWith("tel")
  ) {
    link.addEventListener("click", e => {
      e.preventDefault();
      loader.classList.remove("hidden");               // mostra loader
      if (whatsappBtn) whatsappBtn.classList.remove("visible"); // esconde botão suavemente

      setTimeout(() => {
        window.location.href = url;
      }, 500);
    });
  }
});



