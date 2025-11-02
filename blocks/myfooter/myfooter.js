export default function decorate(block) {
  block.classList.add('footer');

  const rows = [...block.children];
  const headerRow = rows[0];
  const socialColumnIndex = headerRow.children.length - 2;
  const localeColumnIndex = headerRow.children.length - 1;

  const colWrapper = document.createElement('div');
  colWrapper.className = 'footer-columns';

  const socials = document.createElement('div');
  socials.className = 'footer-social';

  const locale = document.createElement('div');
  locale.className = 'footer-locale';

  rows.forEach((row, i) => {
    [...row.children].forEach((cell, idx) => {
      if (idx === socialColumnIndex) {
        const iconName = cell.textContent.trim().toLowerCase();
        if (iconName) {
          const img = document.createElement('img');
          img.src = `/icons/${iconName}.svg`;
          img.alt = iconName;
          socials.appendChild(img);
        }
      } else if (idx === localeColumnIndex) {
        if (cell.textContent.trim()) locale.textContent = cell.textContent.trim();
      } else {
        if (i === 0) {
          cell.className = 'footer-heading';
        } else if (cell.textContent.trim()) {
          cell.className = 'footer-link';
        }
        colWrapper.appendChild(cell);
      }
    });
  });

  block.innerHTML = `
    <div class="footer-top">
      <img class="footer-logo" src="/icons/coca-logo.svg" alt="logo">
      <hr>
    </div>
  `;

  block.appendChild(colWrapper);

  const rightSide = document.createElement('div');
  rightSide.className = 'footer-right';
  rightSide.appendChild(locale);
  rightSide.appendChild(socials);
  block.appendChild(rightSide);
}
