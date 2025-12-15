export default async function decorate(block) {
  console.log("iside descorate");
  const rows = [...block.children];

  const title =
    rows?.[0]?.children?.[0]?.textContent?.trim() || "";

  const subHeading =
    rows?.[0]?.children?.[1]?.textContent?.trim() || "";

  const desc =
    rows?.[1]?.children?.[0]?.textContent?.trim() || "";

  const videoLink =
    rows?.[1]?.children?.[1]?.textContent?.trim() || "";

    console.log("title: ",title);
    console.log("sub heading: ",sub_heading);
    console.log("Desc: ",desc);
    // Clear old authored HTML
    block.innerHTML = "";

    // Inject the generated HTML
    block.innerHTML = `<div class="section know-us-container" data-section-status="loaded" style="">

      <div class="know-us-wrapper"><div class="know-us block" data-block-name="know-us" data-block-status="loaded"><div class="section know-us-container" data-section-status="loaded" style="">

      <div class="know-us-wrapper"><div class="know-us block" data-block-name="know-us" data-block-status="loaded">
    <section class="abt-us py-75">
                <article class="container">
                    <div class="row text-center text-md-start mb-5">
                        <div class="col-12 mb-4 mb-md-0 wow fadeInLeft animatedBlock" data-wow-delay="0.2s" style="transition-delay: 0.2s; animation-delay: 0.2s;">
                            <span class="text-primary-600 d-block text-uppercase mb-3">${title}</span>
                            <h2 class="h5-head fw-500 mb-30">${sub_heading}</h2>
                        </div>

                        <div class="col-md-6 col-12 mb-4 mb-md-0 wow fadeInLeft animatedBlock" data-wow-delay="0.2s" style="transition-delay: 0.2s; animation-delay: 0.2s;">
                            <p class="sec2-para sec2-para-1 pe-0 pe-md-3">${desc}</p>
                        </div>
                        <div class="col-md-6 col-12 text-grey-800 wow fadeInRight animatedBlock" data-wow-delay="0.2s" style="transition-delay: 0.2s; animation-delay: 0.2s;">
                            <div class="vvideo-box">
                                <div class="vidyard-player-container" uuid="Pee8Un9Atmr8CNDiKCAGrH" style="margin: auto; width: 100%; height: auto; overflow: hidden; display: block;"><div class="vidyard-div-Pee8Un9Atmr8CNDiKCAGrH" role="region" aria-label="Vidyard media player" style="position: relative; padding-bottom: 56.25%; height: 0px; overflow: hidden; max-width: 100%; background-color: transparent;"><div class="vidyard-inner-container-Pee8Un9Atmr8CNDiKCAGrH" style="position: absolute;height: 100%; width: 100%; " data-pl="false"> <iframe allow="autoplay; fullscreen; picture-in-picture; display-capture; clipboard-write" allowfullscreen="" allowtransparency="true" referrerpolicy="no-referrer-when-downgrade" class="vidyard-iframe-Pee8Un9Atmr8CNDiKCAGrH" frameborder="0" height="100%" width="100%" scrolling="no" src="https://play.vidyard.com/Pee8Un9Atmr8CNDiKCAGrH?disable_analytics=0&amp;preload=auto&amp;v=3.1.1&amp;vyetoken=&amp;type=inline&amp;" title="Infosys Engineering Services Overview" style="opacity: 1; background-color: transparent; position: absolute; top: 0px; left: 0px;"></iframe><img style="width: 100%; margin: auto; display: none; " class="vidyard-player-embed inserted" src="https://play.vidyard.com/Pee8Un9Atmr8CNDiKCAGrH.jpg" data-uuid="Pee8Un9Atmr8CNDiKCAGrH" data-v="4" data-type="inline" alt="Infosys Engineering Services Overview" data-rendered="true" loading="eager"></div> </div></div>
                            </div>
                        </div>
                    </div>
                </article>
            </section></div></div></div></div></div></div>`;
  }