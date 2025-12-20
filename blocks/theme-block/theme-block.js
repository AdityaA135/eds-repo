export default async function decorate(block) {
      const rows = [...block.children];

        const title =
          rows?.[0]?.children?.[0]?.textContent?.trim() || "";

        const desc =
          rows?.[0]?.children?.[1]?.textContent?.trim() || "";

        const apac_image =
          rows?.[0]?.children?.[2]?.querySelector('picture img') ||
          rows?.[0]?.children?.[2]?.querySelector('img');

        const apac_image_SRC = apac_image?.getAttribute('src') || "";
        const apac_image_ALT = apac_image?.getAttribute('alt') || "";
        console.log(title," , ",desc," , ",apac_image_SRC);


      // Clear old authored HTML
      block.innerHTML = "";

      // Inject the generated HTML
      block.innerHTML = `<section id="theme" class="py-75 color-white">
  <article class="">
   <div class="container">
    <div class="row d-flex-center">
     <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 wow fadeInUp animated" data-wow-delay="0.2s" style="visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;">
      <img src="${apac_image_SRC}" class="img-responsive" alt="${apac_image_SRC}">
     </div>
     <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 wow fadeInUp animated" data-wow-delay="0.2s" style="visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;">
      <h2 class="overview-head">${title}</h2>
      <p class="overview-para">${desc} </p>
     </div>
    </div>
   </div>
  </article>
 </section>`;
  }
