export default async function decorate(block) {
  // Read metadata value
  const breadcrumbEnabled = document
    .querySelector('meta[name="breadcrumb"]')
    ?.content;

  // Stop if breadcrumb is not enabled
  if (breadcrumbEnabled !== 'true') {
    block.remove();
    return;
  }

  // Get current path
  const path = window.location.pathname;

  // Split path into segments
  const segments = path.split('/').filter(Boolean);

  // Create breadcrumb wrapper
  const nav = document.createElement('nav');
  nav.className = 'breadcrumb';

  const ol = document.createElement('ol');

  // Home link
  const homeLi = document.createElement('li');
  const homeLink = document.createElement('a');

  homeLink.href = '/';
  homeLink.textContent = 'Home';

  homeLi.append(homeLink);
  ol.append(homeLi);

  // Build breadcrumb items
  let cumulativePath = '';

  segments.forEach((segment, index) => {
    cumulativePath += `/${segment}`;

    const li = document.createElement('li');

    // Convert slug to readable text
    const label = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

    // Last item = text only
    if (index === segments.length - 1) {
      li.textContent = label;
    } else {
      const link = document.createElement('a');
      link.href = cumulativePath;
      link.textContent = label;

      li.append(link);
    }

    ol.append(li);
  });

  nav.append(ol);
  block.replaceChildren(nav);
}