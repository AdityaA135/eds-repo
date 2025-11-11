/**
 * Embed an AEM Experience Fragment inside an iframe.
 * Usage:
 * <div class="xf-embed" data-xf-path="/content/experience-fragments/homelymagic/us/en/site/demo/master.html"></div>
 */

export default function decorate(block) {
  const xfPath = block.dataset.xfPath;

  if (!xfPath) {
    block.innerHTML = '<p style="color:red;">No XF path provided.</p>';
    return;
  }

  // Detect author or publish environment
  const baseUrl = 'https://localhost:4504';

  const xfUrl = `${baseUrl}${xfPath}`;

  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.src = xfUrl;
  iframe.width = '100%';
  iframe.height = '600';
  iframe.style.border = 'none';
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('referrerpolicy', 'no-referrer');

  // Optional: allow styling flexibility
  iframe.style.borderRadius = '8px';
  iframe.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';

  // Append iframe to the block
  block.innerHTML = '';
  block.appendChild(iframe);
}
