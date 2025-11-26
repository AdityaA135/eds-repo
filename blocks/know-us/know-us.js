import { createAemElement } from '../../scripts/aem.js';

function loadScript(src) {
  console.log("inside loadScript fn");
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(src);
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

function getVidyardUrl(originalUrl) {
  if (!originalUrl || typeof originalUrl !== 'string') return '';

  if (originalUrl.startsWith("https://videos.infosys.com/watch/")) {

    const uuidPart = originalUrl.split("/watch/")[1] || '';
    const uuid = uuidPart.split("?")[0];
    return `https://play.vidyard.com/${uuid}.html?autoplay=0&custom_id=&embed_button=0&viral_sharing=0`;
  }

  if (originalUrl.startsWith("https://play.vidyard.com")) {
    return originalUrl;
  }

  return originalUrl;
}

export default function decorate(block) {
  const paragraphs = block.querySelectorAll('p');
  const title = paragraphs[0]?.textContent.trim() || '';
  const subtitle = paragraphs[1]?.textContent.trim() || '';
  const description = paragraphs[2]?.textContent.trim() || '';
  const videoUrlRaw = paragraphs[3]?.textContent.trim() || '';

  let videoUrl = videoUrlRaw.startsWith('https') ? videoUrlRaw : '';
  videoUrl = getVidyardUrl(videoUrl);

  const uuidMatch = videoUrl.match(/play\.vidyard\.com\/([^.?]+)/);
  const uuid = uuidMatch ? uuidMatch[1] : '';

 block.innerHTML = `
    <section class="abt-us py-75">
                <article class="container">
                    <div class="row text-center text-md-start mb-5">
                        <div class="col-12 mb-4 mb-md-0 wow fadeInLeft animatedBlock" data-wow-delay="0.2s" style="transition-delay: 0.2s; animation-delay: 0.2s;">
                            <span class="text-primary-600 d-block text-uppercase mb-3">${title}</span>
                            <h2 class="h5-head fw-500 mb-30">${subtitle}</h2>
                        </div>

                        <div class="col-md-6 col-12 mb-4 mb-md-0 wow fadeInLeft animatedBlock" data-wow-delay="0.2s" style="transition-delay: 0.2s; animation-delay: 0.2s;">
                            <p class="sec2-para sec2-para-1 pe-0 pe-md-3">${description}</p>
                        </div>
                        <div class="col-md-6 col-12 text-grey-800 wow fadeInRight animatedBlock" data-wow-delay="0.2s" style="transition-delay: 0.2s; animation-delay: 0.2s;">
                            <div class="vvideo-box">
                                <div class="vidyard-player-container" uuid="${uuid}" style="margin: auto; width: 100%; height: auto; overflow: hidden; display: block;"><div class="vidyard-div-${uuid}" role="region" aria-label="Vidyard media player" style="position: relative; padding-bottom: 56.25%; height: 0px; overflow: hidden; max-width: 100%; background-color: transparent;"><div class="vidyard-inner-container-${uuid}" style="position: absolute;height: 100%; width: 100%; " data-pl="false"> <iframe allow="autoplay; fullscreen; picture-in-picture; display-capture; clipboard-write" allowfullscreen="" allowtransparency="true" referrerpolicy="no-referrer-when-downgrade" class="vidyard-iframe-${uuid}" frameborder="0" height="100%" width="100%" scrolling="no" src=${videoUrl} title="Infosys Engineering Services Overview" style="opacity: 1; background-color: transparent; position: absolute; top: 0px; left: 0px;"></iframe><img style="width: 100%; margin: auto; display: none; " class="vidyard-player-embed inserted" src="https://play.vidyard.com/${uuid}.jpg" data-uuid="${uuid}" data-v="4" data-type="inline" alt="Infosys Engineering Services Overview" data-rendered="true"></div> </div></div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>`;

//  loadScript('/blocks/campaigns/know-us/v4.js');
//  loadScript('/blocks/campaigns/know-us/vidyard.js');
}