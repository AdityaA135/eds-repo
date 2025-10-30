export default function decorate(block) {
  const slides = [...block.children].map((row) => {
    const img = row.children[1]?.querySelector('img')?.src;
    const link = row.children[2]?.querySelector('a')?.href;
    return { img, link };
  });

  block.innerHTML = `
    <div class="carousel-container">
      <div class="carousel-track">
        <!-- duplicate last slide for infinite loop -->
        <div class="carousel-slide" data-clone="true">
          <a href="${slides.at(-1).link || '#'}">
            <img src="${slides.at(-1).img}" alt="">
          </a>
        </div>

        ${slides.map((s,i) => `
          <div class="carousel-slide" data-index="${i}">
            <a href="${s.link || '#'}">
              <img src="${s.img}" alt="">
            </a>
          </div>
        `).join('')}

        <!-- duplicate first slide -->
        <div class="carousel-slide" data-clone="true">
          <a href="${slides[0].link || '#'}">
            <img src="${slides[0].img}" alt="">
          </a>
        </div>
      </div>

      <div class="carousel-dots">
        ${slides.map((_, i) => `<span class="dot" data-index="${i}"></span>`).join('')}
      </div>
    </div>
  `;

  const track = block.querySelector('.carousel-track');
  const dots = [...block.querySelectorAll('.dot')];
  const slideEls = [...block.querySelectorAll('.carousel-slide')];

  let index = 0;
  const realCount = slides.length;

  function update(instant = false) {
    const slideWidth = slideEls[0].offsetWidth + 20;
    const rawIndex = index + 1;
    const offset = rawIndex * slideWidth;

    track.style.transition = instant ? "none" : "transform 0.5s ease-in-out";
    track.style.transform = `translateX(calc(50% - ${offset}px - ${slideEls[0].offsetWidth/2}px))`;

    // update center slide
    slideEls.forEach((s,i) => s.classList.toggle('active', i === rawIndex));

    // update dots
    dots.forEach((d,i)=> d.classList.toggle('active', i === index));
  }

  // infinite loop handling
  track.addEventListener("transitionend", () => {
    if (index === -1) {
      index = realCount - 1;
      update(true);
    } else if (index === realCount) {
      index = 0;
      update(true);
    }
  });

  function autoSlide() {
    index++;
    update();
  }

  dots.forEach(d => d.addEventListener('click', () => {
    index = +d.dataset.index;
    update();
    reset();
  }));

  let timer = setInterval(autoSlide, 4000);
  function reset() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 4000);
  }

  track.style.transition = "none";
  update(true);
}

