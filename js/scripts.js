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
