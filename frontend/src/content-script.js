//Collecting data
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'collectData') {
      collectData();
      sendResponse({ status: 'Collected Data!' });
    }
  });

function collectData(){
    console.log('hiii');
    
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
      console.log(`Paragraph ${index + 1}:`, p.textContent);
    });
    
  }