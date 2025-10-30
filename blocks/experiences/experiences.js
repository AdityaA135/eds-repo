export default function decorate(block) {
  // Add wrapper classes
  block.classList.add('exp-block');

  // Children nodes
  const rows = [...block.children];

  // First row = Experiences heading
  rows[0].classList.add('exp-heading-row');
  rows[0].querySelector('p')?.classList.add('exp-heading-text');

  // Second row = title + image
  rows[1].classList.add('exp-main-row');
  rows[1].children[0].classList.add('exp-title-col');
  rows[1].children[1].classList.add('exp-img-col');

  // Third row = subtitle
  rows[2].classList.add('exp-subtitle-row');

  // Fourth row = button text
  rows[3].classList.add('exp-btn-row');
  const btnText = rows[3].querySelector('p strong');

  if (btnText) {
    const btn = document.createElement('a');
    btn.className = 'exp-btn';
    btn.href = '#';
    btn.textContent = btnText.textContent;
    rows[3].innerHTML = '';
    rows[3].append(btn);
  }
}
