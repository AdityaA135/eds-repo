/**
 * XF Block: Dynamically fetch and render Experience Fragments from AEM
 * Works locally with admin:admin credentials (for dev only)
 */

//Plan 1

const XF_SERVLET_URL = "http://localhost:4502/bin/xf-source";
const BASIC_AUTH = "Basic " + btoa("admin:admin");

async function fetchXF(xfPath) {
  try {
    const response = await fetch(`${XF_SERVLET_URL}?path=${encodeURIComponent(xfPath)}`, {
      method: "GET",
      headers: {
        Authorization: BASIC_AUTH,
        "Content-Type": "text/html",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch XF (${response.status}): ${response.statusText}`);
    }

    return await response.text();
  } catch (error) {
    console.error("XF Fetch Error:", error);
    return `<div class="xf-error">Failed to load Experience Fragment: ${error.message}</div>`;
  }
}

/**
 * Decorate XF block (standard EDS pattern)
 * @param {HTMLElement} block - The DOM element for this block
 */
export default async function decorate(block) {
  // Get the XF path from the block content (usually author puts the path inside)
  const xfPath = block.textContent.trim();

  if (!xfPath) {
    block.innerHTML = `<div class="xf-error"> No XF path provided in block.</div>`;
    return;
  }

  block.innerHTML = `<div class="xf-loading">Loading Experience Fragment...</div>`;

  const xfHtml = await fetchXF(xfPath);

  block.innerHTML = xfHtml;
}

//-------------------------
////Plan 2
//const XF_SERVLET_URL = "http://localhost:4502/bin/xf-source";
//
//async function fetchXF(xfPath) {
//  try {
//    const response = await fetch(`${XF_SERVLET_URL}?path=${encodeURIComponent(xfPath)}`);
//    if (!response.ok) throw new Error(`Failed to fetch XF (${response.status})`);
//    return await response.text();
//  } catch (error) {
//    console.error("XF Fetch Error:", error);
//    return `<div class="xf-error">Failed to load Experience Fragment: ${error.message}</div>`;
//  }
//}
//
//export default async function decorate(block) {
//  const xfPath = block.textContent.trim();
//  if (!xfPath) {
//    block.innerHTML = `<div class="xf-error">No XF path provided in block.</div>`;
//    return;
//  }
//
//  block.innerHTML = `<div class="xf-loading">Loading Experience Fragment...</div>`;
//  const xfHtml = await fetchXF(xfPath);
//  block.innerHTML = xfHtml;
//}

