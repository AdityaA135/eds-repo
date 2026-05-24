export default function decorate(block) {
  const rows = [...block.children];

  // Text Content
  const titleText = rows[0]?.querySelector('div')?.textContent.trim();

  const subtitleText = rows[1]?.querySelector('div')?.textContent.trim();

  const descriptionText = rows[2]?.querySelector('div')?.textContent.trim();

  // CTA Row
  const ctaColumns = [...rows[3]?.children || []];

  const buttonText = ctaColumns[0]?.textContent.trim();

  const buttonLink = ctaColumns[1]?.querySelector('a')?.href || '#';

  // Video Row
  let videoSrc = rows[4]?.querySelector('a')?.href;

  // SVG Path Row
  const playIconPath = rows[5]?.querySelector('div')?.textContent.trim();

  // Fix protocol if needed
  if (videoSrc && !videoSrc.startsWith('http')) {
    videoSrc = `https://${videoSrc}`;
  }

  block.textContent = '';

  // =========================
  // HERO CONTAINER
  // =========================

  const heroContainer = document.createElement('div');
  heroContainer.className = 'hpg-hero-section-container';
  heroContainer.setAttribute('role', 'region');

  const firebatContainer = document.createElement('div');
  firebatContainer.className = 'tnt-firebat-container';

  // =========================
  // VIDEO WRAPPER
  // =========================

  const videoWrapper = document.createElement('div');
  videoWrapper.className = 'tnt-firebat-video-wrapper';

  const video = document.createElement('video');
  video.className = 'tnt-firebat-video';
  video.setAttribute('preload', 'auto');
  video.setAttribute('autoplay', '');
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.src = videoSrc;

  // Controls
  const controls = document.createElement('div');
  controls.className = 'tnt-firebat-video-controls';

  const button = document.createElement('button');
  button.className = 'tnt-firebat-video-button';
  button.setAttribute('aria-pressed', 'true');
  button.setAttribute('aria-label', 'Play');

  // Play SVG
  const playSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  playSvg.setAttribute('class', 'tnt-firebat-video-button-play');
  playSvg.setAttribute('aria-hidden', 'true');
  playSvg.setAttribute('version', '1.1');
  playSvg.setAttribute('viewBox', '0 0 173 173');

  const playPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  playPath.setAttribute('d', playIconPath);

  playSvg.append(playPath);

  // Pause SVG
  const pauseSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  pauseSvg.setAttribute('class', 'tnt-firebat-video-button-pause');
  pauseSvg.setAttribute('aria-hidden', 'true');
  pauseSvg.setAttribute('version', '1.1');
  pauseSvg.setAttribute('viewBox', '0 0 173 173');

  const pausePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  pausePath.setAttribute(
    'd',
    'M86.5,0C38.7,0,0,38.7,0,86.5S38.7,173,86.5,173S173,134.3,173,86.5S134.3,0,86.5,0z M74.6,124.9H59.8V51h14.8 V124.9z M113.1,124.9H98.3V51h14.8V124.9z',
  );

  pauseSvg.append(pausePath);

  button.append(playSvg, pauseSvg);

  controls.append(button);

  videoWrapper.append(video, controls);

  // =========================
  // TEXT WRAPPER
  // =========================

  const textWrapper = document.createElement('div');
  textWrapper.className = 'tnt-firebat-text-wrapper';

  const text = document.createElement('div');
  text.className = 'tnt-firebat-text';

  // Heading
  const heading = document.createElement('div');
  heading.className = 'tnt-firebat-heading';

  const title = document.createElement('h2');
  title.className = 'tnt-firebat-title';
  title.textContent = titleText;

  const subtitle = document.createElement('h3');
  subtitle.className = 'tnt-firebat-subtitle';
  subtitle.textContent = subtitleText;

  const description = document.createElement('span');
  description.className = 'tnt-firebat-description';
  description.textContent = descriptionText;

  heading.append(title, subtitle, description);

  // CTA
  const cta = document.createElement('div');
  cta.className = 'tnt-firebat-cta';

  const link = document.createElement('a');
  link.className = 'tnt-firebat-link';
  link.href = buttonLink;
  link.textContent = buttonText;

  cta.append(link);

  text.append(heading, cta);

  textWrapper.append(text);

  // =========================
  // FINAL APPEND
  // =========================

  firebatContainer.append(videoWrapper, textWrapper);

  heroContainer.append(firebatContainer);

  block.append(heroContainer);
}