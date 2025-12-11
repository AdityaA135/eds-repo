import { createAemElement } from '../../scripts/aem.js';


export default async function decorate(block) {
    const name = (function(){
      const tbl = block.querySelector("table");
      if(!tbl) return "";
      const rows = tbl.rows || [];
      const cellObj = (rows[0] && rows[0].cells && rows[0].cells[0])
        ? rows[0].cells[0]
        : null;
      return cellObj ? cellObj.textContent.trim() : "";
    })();
    const button_text = (function(){
      const tbl = block.querySelector("table");
      if(!tbl) return "";
      const rows = tbl.rows || [];
      const cellObj = (rows[0] && rows[0].cells && rows[0].cells[1])
        ? rows[0].cells[1]
        : null;
      return cellObj ? cellObj.textContent.trim() : "";
    })();
    const about_us = (function(){
      const tbl = block.querySelector("table");
      if(!tbl) return "";
      const rows = tbl.rows || [];
      const cellObj = (rows[1] && rows[1].cells && rows[1].cells[0])
        ? rows[1].cells[0]
        : null;
      return cellObj ? cellObj.textContent.trim() : "";
    })();
    const need_help = (function(){
      const tbl = block.querySelector("table");
      if(!tbl) return "";
      const rows = tbl.rows || [];
      const cellObj = (rows[1] && rows[1].cells && rows[1].cells[1])
        ? rows[1].cells[1]
        : null;
      return cellObj ? cellObj.textContent.trim() : "";
    })();
    const au_1 = (function(){
      const tbl = block.querySelector("table");
      if(!tbl) return "";
      const rows = tbl.rows || [];
      const cellObj = (rows[2] && rows[2].cells && rows[2].cells[0])
        ? rows[2].cells[0]
        : null;
      return cellObj ? cellObj.textContent.trim() : "";
    })();
    const au_2 = (function(){
      const tbl = block.querySelector("table");
      if(!tbl) return "";
      const rows = tbl.rows || [];
      const cellObj = (rows[2] && rows[2].cells && rows[2].cells[1])
        ? rows[2].cells[1]
        : null;
      return cellObj ? cellObj.textContent.trim() : "";
    })();

    // Clear old authored HTML
    block.innerHTML = "";

    // Inject the generated HTML
    block.innerHTML = `<footer class="experiencefragment">

    <div class="cmp-experiencefragment cmp-experiencefragment--footer" data-path="/content/experience-fragments/onexp/in/en/site/footer/master/jcr:content">






    <div id="container-a7f7476f57" class="cmp-container">




        <div class="container responsivegrid footer-wrapper">





    <div id="container-a06b9d09b1" class="cmp-container">




        <div class="container responsivegrid footer__content">





    <div id="container-455b66fb21" class="cmp-container">




        <div class="adaptiveImage image footer__logo"><div data-asset-id="d40eb930-dd3b-4006-82f2-ad2ff353eb81" id="adaptiveImage-555f5e9a3a" data-cmp-data-layer="{&quot;adaptiveImage-555f5e9a3a&quot;:{&quot;@type&quot;:&quot;cep/components/adaptiveImage&quot;,&quot;repo:modifyDate&quot;:&quot;2022-09-05T07:19:45Z&quot;,&quot;image&quot;:{&quot;repo:id&quot;:&quot;d40eb930-dd3b-4006-82f2-ad2ff353eb81&quot;,&quot;repo:modifyDate&quot;:&quot;2023-04-14T14:45:38Z&quot;,&quot;@type&quot;:&quot;image/svg+xml&quot;,&quot;repo:path&quot;:&quot;/content/dam/onexp/global/icons/logo-white-large.svg&quot;}}}" class="cmp-adaptive-image cmp-image" itemscope="" itemtype="http://schema.org/ImageObject">


    <picture>


        <source>
        <img src="/content/dam/onexp/global/icons/logo-white-large.svg" loading="lazy" class="cmp-image__image" itemprop="contentUrl" alt="The Coca Cola Company Logo">
    </picture>






</div>



</div>
<div class="button footer__button--market">
<a id="button-947c3ea4ab" class="cmp-button" data-cmp-clickable="" data-cmp-data-layer="{&quot;button-947c3ea4ab&quot;:{&quot;@type&quot;:&quot;cep/components/button&quot;,&quot;repo:modifyDate&quot;:&quot;2022-12-09T08:55:22Z&quot;,&quot;dc:title&quot;:&quot;India | English&quot;,&quot;xdm:linkURL&quot;:&quot;/country-selector.html&quot;}}" href="/country-selector">

    <span class="cmp-button__icon cmp-button__icon--location" aria-hidden="true"></span>

    <span class="cmp-button__text">India | English</span>
</a>
</div>
<div class="separator">
<div id="separator-a216d50a58" class="cmp-separator">
    <hr class="cmp-separator__horizontal-rule">
</div></div>
<div class="container responsivegrid footer__navigation" data-cep-cmp-init="true">





    <div id="container-0c5adce095" class="cmp-container">




        <div class="text footer__mobile-accordion">
<div data-cmp-data-layer="{&quot;text-4c0399460b&quot;:{&quot;@type&quot;:&quot;cep/components/text&quot;,&quot;repo:modifyDate&quot;:&quot;2022-11-29T13:02:33Z&quot;,&quot;xdm:text&quot;:&quot;&lt;h4&gt;About us&lt;/h4&gt;\r\n&lt;ul&gt;\n&lt;li&gt;&lt;a href=\&quot;https://www.coca-colacompany.com/company\&quot; target=\&quot;_blank\&quot;&gt;Our Company&lt;/a&gt;&lt;/li&gt;\r\n&lt;li&gt;&lt;a href=\&quot;/content/onexp/in/en/media-center.html\&quot;&gt;Media Center&lt;/a&gt;&lt;/li&gt;\r\n&lt;li&gt;&lt;a href=\&quot;/content/onexp/in/en/about-us/history.html\&quot;&gt;History&lt;/a&gt;&lt;/li&gt;\r\n&lt;li&gt;&lt;a href=\&quot;https://www.coca-colacompany.com/careers\&quot; target=\&quot;_blank\&quot;&gt;Careers&lt;/a&gt;&lt;/li&gt;\r\n&lt;li&gt;&lt;a href=\&quot;/content/onexp/in/en/about-us/leadership.html\&quot;&gt;Leadership&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&quot;}}" id="text-4c0399460b" class="cmp-text">
    <h4 tabindex="-1">About us</h4>
<ul><li><a href="https://www.coca-colacompany.com/company" target="_blank" rel="noopener noreferrer">Our Company</a></li><li><a href="/in/en/media-center">Media Center</a></li><li><a href="/in/en/about-us/history">History</a></li><li><a href="https://www.coca-colacompany.com/careers" target="_blank" rel="noopener noreferrer">Careers</a></li><li><a href="/in/en/about-us/leadership">Leadership</a></li></ul>
</div>



</div>
<div class="text footer__mobile-accordion">
<div data-cmp-data-layer="{&quot;text-d1e2329ba2&quot;:{&quot;@type&quot;:&quot;cep/components/text&quot;,&quot;repo:modifyDate&quot;:&quot;2022-11-17T08:33:08Z&quot;,&quot;xdm:text&quot;:&quot;&lt;h4&gt;Need help?&lt;/h4&gt;\r\n&lt;ul&gt;\n&lt;li&gt;&lt;a href=\&quot;/content/onexp/in/en/about-us/faq.html\&quot;&gt;FAQ&lt;/a&gt;&lt;/li&gt;\r\n&lt;li&gt;&lt;a href=\&quot;/content/onexp/in/en/sitemap.html\&quot;&gt;Sitemap&lt;/a&gt;&lt;/li&gt;\r\n&lt;li&gt;&lt;a href=\&quot;/content/onexp/in/en/about-us/contact-us.html\&quot; target=\&quot;_self\&quot;&gt;Contact Us&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&quot;}}" id="text-d1e2329ba2" class="cmp-text">
    <h4 tabindex="-1">Need help?</h4>
<ul><li><a href="/in/en/about-us/faq">FAQ</a></li><li><a href="/in/en/sitemap">Sitemap</a></li><li><a href="/in/en/about-us/contact-us" target="_self" rel="noopener noreferrer">Contact Us</a></li></ul>
</div>



</div><div class="separator--dynamic"><hr></div>
<div class="text footer__link-list">
<div data-cmp-data-layer="{&quot;text-8e851cc943&quot;:{&quot;@type&quot;:&quot;cep/components/text&quot;,&quot;repo:modifyDate&quot;:&quot;2025-08-07T11:43:34Z&quot;,&quot;xdm:text&quot;:&quot;&lt;ul&gt;\r\n&lt;li&gt;&lt;a href=\&quot;/content/onexp/in/en/legal/terms-of-service.html\&quot;&gt;Terms of Use&lt;/a&gt;&lt;/li&gt;\r\n&lt;li&gt;&lt;a href=\&quot;/content/onexp/in/en/legal/privacy-policy.html\&quot;&gt;Privacy Policy&lt;/a&gt;&lt;/li&gt;\r\n&lt;li&gt;&lt;a href=\&quot;/content/onexp/in/en/legal/financial-policy-documents.html\&quot;&gt;Financial &amp;amp; Policy Documents&lt;/a&gt;&lt;/li&gt;\r\n&lt;li&gt;&lt;a href=\&quot;/content/onexp/in/en/legal/supplier-terms-and-conditions-cps.html\&quot;&gt;Supplier Terms &amp;amp; Conditions – Concentrate Production Services (CPS)&lt;/a&gt;&lt;br&gt;\r\n&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&quot;}}" id="text-8e851cc943" class="cmp-text">
    <ul><li><a href="/in/en/legal/terms-of-service">Terms of Use</a></li><li><a href="/in/en/legal/privacy-policy">Privacy Policy</a></li><li><a href="/in/en/legal/financial-policy-documents">Financial &amp; Policy Documents</a></li><li><a href="/in/en/legal/supplier-terms-and-conditions-cps">Supplier Terms &amp; Conditions – Concentrate Production Services (CPS)</a><br>
</li></ul>

</div>



</div>


    </div>

</div><div class="separator--dynamic separator--mobile-nav"><hr></div>
<div class="container responsivegrid footer__social-media">





    <div id="container-10df53c8b5" class="cmp-container">




        <div class="button footer__button--social-media">
<a id="button-0fe127a140" class="cmp-button" aria-label="X" data-cmp-clickable="" data-cmp-data-layer="{&quot;button-0fe127a140&quot;:{&quot;@type&quot;:&quot;cep/components/button&quot;,&quot;repo:modifyDate&quot;:&quot;2022-11-28T16:06:31Z&quot;,&quot;dc:title&quot;:&quot;X&quot;,&quot;xdm:linkURL&quot;:&quot;https://twitter.com/cocacola_ind&quot;}}" href="https://twitter.com/cocacola_ind" target="_blank">

    <span class="cmp-button__icon cmp-button__icon--x-social" aria-hidden="true"></span>

    <span class="cmp-button__text">X</span>
</a>
</div>
<div class="button footer__button--social-media">
<a id="button-f326658a25" class="cmp-button" aria-label="instagram" data-cmp-clickable="" data-cmp-data-layer="{&quot;button-f326658a25&quot;:{&quot;@type&quot;:&quot;cep/components/button&quot;,&quot;repo:modifyDate&quot;:&quot;2022-11-15T14:49:22Z&quot;,&quot;dc:title&quot;:&quot;Instagram&quot;,&quot;xdm:linkURL&quot;:&quot;https://www.instagram.com/cocacola_india&quot;}}" href="https://www.instagram.com/cocacola_india" target="_blank">

    <span class="cmp-button__icon cmp-button__icon--instagram" aria-hidden="true"></span>

    <span class="cmp-button__text">Instagram</span>
</a>
</div>
<div class="button footer__button--social-media">
<a id="button-508c4a09c6" class="cmp-button" aria-label="youtube" data-cmp-clickable="" data-cmp-data-layer="{&quot;button-508c4a09c6&quot;:{&quot;@type&quot;:&quot;cep/components/button&quot;,&quot;repo:modifyDate&quot;:&quot;2022-11-29T07:48:15Z&quot;,&quot;dc:title&quot;:&quot;Youtube&quot;,&quot;xdm:linkURL&quot;:&quot;https://www.youtube.com/playlist?list=PLCIVZWq1FAwfcgL6q4drjQJaLoEL3mSIK&quot;}}" href="https://www.youtube.com/playlist?list=PLCIVZWq1FAwfcgL6q4drjQJaLoEL3mSIK" target="_blank">

    <span class="cmp-button__icon cmp-button__icon--youtube" aria-hidden="true"></span>

    <span class="cmp-button__text">Youtube</span>
</a>
</div>
<div class="button footer__button--social-media">
<a id="button-54f8b9d0aa" class="cmp-button" aria-label="facebook" data-cmp-clickable="" data-cmp-data-layer="{&quot;button-54f8b9d0aa&quot;:{&quot;@type&quot;:&quot;cep/components/button&quot;,&quot;repo:modifyDate&quot;:&quot;2022-11-15T14:52:04Z&quot;,&quot;dc:title&quot;:&quot;Facebook&quot;,&quot;xdm:linkURL&quot;:&quot;https://www.facebook.com/cocacolaindia&quot;}}" href="https://www.facebook.com/cocacolaindia" target="_blank">

    <span class="cmp-button__icon cmp-button__icon--facebook" aria-hidden="true"></span>

    <span class="cmp-button__text">Facebook</span>
</a>
</div>


    </div>

</div>
<div class="separator">
<div id="separator-467580a103" class="cmp-separator">
    <hr class="cmp-separator__horizontal-rule">
</div></div>
<div class="text footer__bottom--privacy">
<div data-cmp-data-layer="{&quot;text-1bc029550e&quot;:{&quot;@type&quot;:&quot;cep/components/text&quot;,&quot;repo:modifyDate&quot;:&quot;2025-10-10T09:38:47Z&quot;,&quot;xdm:text&quot;:&quot;&lt;p&gt;© 2025 The Coca-Cola Company. All rights reserved.&lt;/p&gt;\r\n&quot;}}" id="text-1bc029550e" class="cmp-text">
    <p>© 2025 The Coca‑Cola Company. All rights reserved.</p>

</div>



</div>


    </div>

</div>


    </div>

</div>


    </div>

</div>





</footer>`;
  }
