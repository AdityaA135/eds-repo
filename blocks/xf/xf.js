export default async function decorate(block) {
  const url = block.textContent.trim();
  if (!url.startsWith('http')) return;

  try {
    const response = await fetch(url);
    const html = await response.text();

    block.innerHTML = html;
  } catch (e) {
    console.log(url);
    block.innerHTML = '<p>⚠️ Failed to load external HTML</p>';
  }
}
