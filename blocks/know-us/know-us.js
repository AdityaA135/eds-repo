import { createAemElement } from "../../scripts/aem.js";

export default async function decorate(block) {

  console.log("we are inside block, ",block);
  var VAR_ROW_1_COL_1 = (function(){
    var tbl = block.querySelector("table");
    if(!tbl) return "";
    var rows = tbl.rows || [];
    var cellObj = (rows[0] && rows[0].cells && rows[0].cells[0])
      ? rows[0].cells[0]
      : null;
    return cellObj ? cellObj.textContent.trim() : "";
  })();

  var VAR_ROW_1_COL_2 = (function(){
    var tbl = block.querySelector("table");
    if(!tbl) return "";
    var rows = tbl.rows || [];
    var cellObj = (rows[0] && rows[0].cells && rows[0].cells[1])
      ? rows[0].cells[1]
      : null;
    return cellObj ? cellObj.textContent.trim() : "";
  })();

  var VAR_ROW_2_COL_1 = (function(){
    var tbl = block.querySelector("table");
    if(!tbl) return "";
    var rows = tbl.rows || [];
    var cellObj = (rows[1] && rows[1].cells && rows[1].cells[0])
      ? rows[1].cells[0]
      : null;
    return cellObj ? cellObj.textContent.trim() : "";
  })();

  var VAR_ROW_2_COL_2 = (function(){
    var tbl = block.querySelector("table");
    if(!tbl) return "";
    var rows = tbl.rows || [];
    var cellObj = (rows[1] && rows[1].cells && rows[1].cells[1])
      ? rows[1].cells[1]
      : null;
    return cellObj ? cellObj.textContent.trim() : "";
  })();


  // Clear old authored HTML so injected HTML is always clean
  block.innerHTML = "";

  // Inject the original DOM
  block.innerHTML = `<div class="section know-us-container" data-section-status="loaded" style="">
        
      <div class="know-us-wrapper"><div class="know-us block" data-block-name="know-us" data-block-status="loaded">
    <section class="abt-us py-75">
                <article class="container">
                    <div class="row text-center text-md-start mb-5">
                        <div class="col-12 mb-4 mb-md-0 wow fadeInLeft animatedBlock" data-wow-delay="0.2s" style="transition-delay: 0.2s; animation-delay: 0.2s;">
                            <span class="text-primary-600 d-block text-uppercase mb-3">${VAR_ROW_1_COL_1}</span>
                            <h2 class="h5-head fw-500 mb-30">${VAR_ROW_1_COL_2}</h2>
                        </div>

                        <div class="col-md-6 col-12 mb-4 mb-md-0 wow fadeInLeft animatedBlock" data-wow-delay="0.2s" style="transition-delay: 0.2s; animation-delay: 0.2s;">
                            <p class="sec2-para sec2-para-1 pe-0 pe-md-3">${VAR_ROW_2_COL_1}</p>
                        </div>
                        <div class="col-md-6 col-12 text-grey-800 wow fadeInRight animatedBlock" data-wow-delay="0.2s" style="transition-delay: 0.2s; animation-delay: 0.2s;">
                            <div class="vvideo-box">
                                <div class="vidyard-player-container" uuid="Pee8Un9Atmr8CNDiKCAGrH" style="margin: auto; width: 100%; height: auto; overflow: hidden; display: block;"><div class="vidyard-div-Pee8Un9Atmr8CNDiKCAGrH" role="region" aria-label="Vidyard media player" style="position: relative; padding-bottom: 56.25%; height: 0px; overflow: hidden; max-width: 100%; background-color: transparent;"><div class="vidyard-inner-container-Pee8Un9Atmr8CNDiKCAGrH" style="position: absolute;height: 100%; width: 100%; " data-pl="false"> <iframe allow="autoplay; fullscreen; picture-in-picture; display-capture; clipboard-write" allowfullscreen="" allowtransparency="true" referrerpolicy="no-referrer-when-downgrade" class="vidyard-iframe-Pee8Un9Atmr8CNDiKCAGrH" frameborder="0" height="100%" width="100%" scrolling="no" src=${VAR_ROW_2_COL_2} title="Infosys Engineering Services Overview" style="opacity: 1; background-color: transparent; position: absolute; top: 0px; left: 0px;"></iframe><img style="width: 100%; margin: auto; display: none; " class="vidyard-player-embed inserted" src="https://play.vidyard.com/Pee8Un9Atmr8CNDiKCAGrH.jpg" data-uuid="Pee8Un9Atmr8CNDiKCAGrH" data-v="4" data-type="inline" alt="Infosys Engineering Services Overview" data-rendered="true"></div> </div></div>
                            </div>
                        </div>
                    </div>
                </article>
            </section></div></div></div>`;

  // ---- NOTE ----
  // Variables VAR_ROW_X_COL_Y are available above.
  // Insert them inside your generated HTML wherever needed.
}
