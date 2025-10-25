/*
 * EDS Sidekick plugin: Add AEM Asset button
 * Author: you
 */

window.hlxSidekick?.add({
  id: 'add-asset',
  button: {
    text: 'Add AEM Asset',
    action: async () => {
      const aemPublishUrl = 'http://localhost:4503/content/dam/eds-assets';
      try {
        const resp = await fetch(`${aemPublishUrl}.json`);
        if (!resp.ok) {
          alert('Could not fetch assets from AEM Publish.');
          return;
        }

        const data = await resp.json();

        const assets = data['jcr:content'] ? Object.keys(data['jcr:content']) : [];
        const assetUrl = prompt(
          `Enter or select asset path (example: /content/dam/eds-assets/sample.png):`,
          assets[0] || ''
        );

        if (assetUrl) {
          const editor = document.activeElement;
          const imageMarkdown = `![](${aemPublishUrl}${assetUrl})`;
          editor.value += `\n${imageMarkdown}\n`;
        }
      } catch (e) {
        console.error('Error loading AEM assets', e);
        alert('Error loading AEM assets. Check console for details.');
      }
    },
  },
});
