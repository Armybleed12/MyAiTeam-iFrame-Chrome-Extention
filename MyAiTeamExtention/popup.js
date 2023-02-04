// popup.js
var iframe = document.createElement('iframe');
iframe.src = 'https://app.myaiteam.com';
iframe.style.position = 'fixed';
iframe.style.top = '50%';
iframe.style.left = '50%';
iframe.style.transform = 'translate(-50%, -50%)';
iframe.style.width = '50%';
iframe.style.height = '50%';
iframe.style.backgroundColor = '#fff';
iframe.style.borderRadius = '5px';
iframe.style.zIndex = '9999';
document.body.appendChild(iframe);