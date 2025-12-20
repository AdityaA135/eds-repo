export default async function decorate(block) {
      const rows = [...block.children];

        const title =
          rows?.[0]?.children?.[0]?.textContent?.trim() || "";

        const extra =
          rows?.[0]?.children?.[1]?.textContent?.trim() || "";

        const extra2 =
          rows?.[0]?.children?.[2]?.textContent?.trim() || "";

        const agent1 =
          rows?.[1]?.children?.[0]?.textContent?.trim() || "";

        const agent1_img =
          rows?.[1]?.children?.[1]?.querySelector('picture img') ||
          rows?.[1]?.children?.[1]?.querySelector('img');

        const agent1_img_SRC = agent1_img?.getAttribute('src') || "";
        const agent1_img_ALT = agent1_img?.getAttribute('alt') || "";

        const agent1_desc =
          rows?.[1]?.children?.[2]?.textContent?.trim() || "";

        const agent2 =
          rows?.[2]?.children?.[0]?.textContent?.trim() || "";

        const agent2_img =
          rows?.[2]?.children?.[1]?.querySelector('picture img') ||
          rows?.[2]?.children?.[1]?.querySelector('img');

        const agent2_img_SRC = agent2_img?.getAttribute('src') || "";
        const agent2_img_ALT = agent2_img?.getAttribute('alt') || "";

        const agent2_desc =
          rows?.[2]?.children?.[2]?.textContent?.trim() || "";

        const agent3 =
          rows?.[3]?.children?.[0]?.textContent?.trim() || "";

        const agent3_img =
          rows?.[3]?.children?.[1]?.querySelector('picture img') ||
          rows?.[3]?.children?.[1]?.querySelector('img');

        const agent3_img_SRC = agent3_img?.getAttribute('src') || "";
        const agent3_img_ALT = agent3_img?.getAttribute('alt') || "";

        const agent3_desc =
          rows?.[3]?.children?.[2]?.textContent?.trim() || "";

        const agent4 =
          rows?.[4]?.children?.[0]?.textContent?.trim() || "";

        const agent4_img =
          rows?.[4]?.children?.[1]?.querySelector('picture img') ||
                    rows?.[4]?.children?.[1]?.querySelector('img');

        const agent4_img_SRC = agent4_img?.getAttribute('src') || "";
        const agent4_img_ALT = agent4_img?.getAttribute('alt') || "";

        const agent4_desc =
          rows?.[4]?.children?.[2]?.textContent?.trim() || "";



      // Clear old authored HTML
      block.innerHTML = "";

      // Inject the generated HTML
      block.innerHTML = `<section id="why-attend" class="unmissable bg-light-white py-75">
  <article class="container">
   <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 wow fadeInDown animated" data-wow-delay="0.2s" style="visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;">
     <h2 class="h2-head mb-50">${title} </h2>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad0-mob wow fadeInUp animated" data-wow-delay="0.2s" style="visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;">
     <div class="item-slider-carousel owl-carousel owl-theme owl-loaded owl-drag">




     <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all; width: 1160px;"><div class="owl-item active" style="width: 270px; margin-right: 20px;"><div class="item"> <a href="#agenda" title="Agenda" class="item-slider-href bg-grey scrollto-target"> <h3 class="item-slider-head text-center">${agent1}</h3>
        <div class="item-img-wrapper">
         <img src="${agent1_img_SRC}" class="img-responsive" alt="${agent1_img_ALT}">
        </div>
        <div class="item-cnt-wrapper pb75">
         <p class="item-slider-para mb-0 fontweight400">${agent1_desc}</p>
        </div> </a>
      </div></div><div class="owl-item active" style="width: 270px; margin-right: 20px;"><div class="item"> <span class="item-slider-href bg-grey"> <h3 class="item-slider-head text-center">${agent2}</h3>
        <div class="item-img-wrapper">
         <img src="${agent2_img_SRC}" class="img-responsive" alt="${agent2_img_ALT}">
        </div>
        <div class="item-cnt-wrapper pb75">
         <p class="item-slider-para mb-0 fontweight400">${agent2_desc}</p>
        </div> </span>
      </div></div><div class="owl-item active" style="width: 270px; margin-right: 20px;"><div class="item"> <span class="item-slider-href bg-grey"> <h3 class="item-slider-head text-center">${agent3}</h3>
        <div class="item-img-wrapper">
         <img src="${agent3_img_SRC}" class="img-responsive" alt="${agent3_img_ALT}">
        </div>
        <div class="item-cnt-wrapper pb75">
         <p class="item-slider-para mb-0 fontweight400">${agent3_desc}</p>
        </div> </span>
      </div></div><div class="owl-item active" style="width: 270px; margin-right: 20px;"><div class="item"> <span class="item-slider-href bg-grey"> <h3 class="item-slider-head text-center">${agent4}</h3>
        <div class="item-img-wrapper">
         <img src="${agent4_img_SRC}" class="img-responsive" alt="${agent4_img_ALT}">
        </div>
        <div class="item-cnt-wrapper pb75">
         <p class="item-slider-para mb-0 fontweight400">${agent4_desc}</p>
        </div> </span>
      </div></div></div></div><div class="owl-nav disabled"><div class="owl-prev disabled">prev</div><div class="owl-next disabled">next</div></div><div class="owl-dots disabled"></div></div>
    </div>
   </div>
  </article>
 </section>`;
  }
