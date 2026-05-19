
export default function decorate(block) {

  const rows = [...block.children];

  // CONTROLS
  const controlsRow = rows[0];

  const playText =
    controlsRow.children[0]?.textContent.trim() || 'Play';

  const pauseText =
    controlsRow.children[1]?.textContent.trim() || 'Pause';

  // SLIDES
  const slides = rows.slice(1).map((row) => {

    const cols = [...row.children];

    return {
      image: cols[0]?.textContent.trim(),
      mobileImage: cols[1]?.textContent.trim(),
      eyebrow: cols[2]?.textContent.trim(),
      title: cols[3]?.textContent.trim(),
      description: cols[4]?.textContent.trim(),
      primaryText: cols[5]?.textContent.trim(),
      primaryLink: cols[6]?.textContent.trim(),
      secondaryText: cols[7]?.textContent.trim(),
      secondaryLink: cols[8]?.textContent.trim(),
    };
  });

  // CLEAR ORIGINAL
  block.textContent = '';

  // MAIN WRAPPER
  const carousel = document.createElement('section');
  carousel.className = 'hero-carousel';

  // CREATE SLIDES
  slides.forEach((slide, index) => {

    const slideEl = document.createElement('div');

    slideEl.className =
      `hero-slide ${index === 0 ? 'active' : ''} ${
        index % 2 === 0 ? 'dark-theme' : 'light-theme'
      }`;

    slideEl.innerHTML = `
      <div class="hero-content">

        <p class="eyebrow">
          ${slide.eyebrow || ''}
        </p>

        <h1>
          ${slide.title || ''}
        </h1>

        <p class="desc">
          ${slide.description || ''}
        </p>

        <div class="btn-wrap">

          ${
            slide.primaryText
              ? `
                <a
                  href="${slide.primaryLink || '#'}"
                  class="primary-btn"
                >
                  ${slide.primaryText}
                </a>
              `
              : ''
          }

          ${
            slide.secondaryText
              ? `
                <a
                  href="${slide.secondaryLink || '#'}"
                  class="outline-btn"
                >
                  ${slide.secondaryText}
                </a>
              `
              : ''
          }

        </div>

      </div>

      <div class="hero-image">
        <picture>
  ${slide.mobileImage ? `
    <source
      media="(max-width: 768px)"
      srcset="${slide.mobileImage}"
    />
  ` : ''}

  <img
    src="${slide.image}"
    alt="${slide.title || 'Hero Banner'}"
  />
</picture>
      </div>
    `;

    carousel.append(slideEl);
  });

  // CONTROLS
  const controls = document.createElement('div');

  controls.className = 'carousel-controls';

  controls.innerHTML = `
    <button class="nav-btn prev">
      &#8592;
    </button>

    <div class="slide-count">
      <span class="current-slide">1</span>/${slides.length}
    </div>

    <button class="nav-btn next">
      &#8594;
    </button>

    <button class="pause-btn">
      ${pauseText} ||
    </button>
  `;

  carousel.append(controls);

  block.append(carousel);

  // JS
  const heroSlides =
    block.querySelectorAll('.hero-slide');

  const nextBtn =
    block.querySelector('.next');

  const prevBtn =
    block.querySelector('.prev');

  const currentSlideText =
    block.querySelector('.current-slide');

  const pauseBtn =
    block.querySelector('.pause-btn');

  let currentSlide = 0;
  let autoPlay = true;

  function showSlide(index) {

    heroSlides.forEach((slide) => {
      slide.classList.remove('active');
    });

    heroSlides[index].classList.add('active');

    currentSlideText.textContent = index + 1;
  }

  function nextSlide() {

    currentSlide++;

    if (currentSlide >= heroSlides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }

  function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = heroSlides.length - 1;
    }

    showSlide(currentSlide);
  }

  nextBtn.addEventListener('click', nextSlide);

  prevBtn.addEventListener('click', prevSlide);

  setInterval(() => {

    if (autoPlay) {
      nextSlide();
    }

  }, 5000);

  pauseBtn.addEventListener('click', () => {

    autoPlay = !autoPlay;

    pauseBtn.textContent = autoPlay
      ? `${pauseText} ||`
      : `${playText} ▶`;
  });

}