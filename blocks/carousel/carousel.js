export default function decorate(block) {
  const slides = [...block.children].map((row) => {
    const img = row.children[1]?.querySelector('img')?.src;
    const title = row.children[2]?.textContent;
    const desc = row.children[3]?.textContent;
    const link = row.children[4]?.querySelector('a')?.href;

    return { img, title, desc, link };
  });

  block.innerHTML = `
    <div class="carousel-container">
      <div class="carousel-track">
        ${slides
          .map(
            (s) => `
          <div class="carousel-slide">
            <img src="${s.img}" alt="">
            <div class="carousel-caption">
              <h2>${s.title}</h2>
              <p>${s.desc}</p>
              ${s.link ? `<a href="${s.link}" class="cta">Explore</a>` : ''}
            </div>
          </div>`
          )
          .join('')}
      </div>
      <div class="carousel-dots">
        ${slides.map((_, i) => `<span class="dot" data-index="${i}"></span>`).join('')}
      </div>
    </div>
  `;

  const track = block.querySelector('.carousel-track');
  const dots = [...block.querySelectorAll('.dot')];
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  dots.forEach((d) =>
    d.addEventListener('click', () => {
      index = +d.dataset.index;
      update();
      resetTimer();
    })
  );

  function autoSlide() {
    index = (index + 1) % slides.length;
    update();
  }

  let timer = setInterval(autoSlide, 5000);
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 5000);
  }

  update();
}
