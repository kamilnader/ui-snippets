const elem = document.createElement('link');
elem.rel = 'icon';
elem.href= 'https://api.directual.com/fileUploaded/ui-snippets/d8cf6c92-460c-4857-b0bf-fd6e99b501e5.png';
document.head.appendChild(elem);

const icon = "https://api.directual.com/fileUploaded/ui-snippets/d8cf6c92-460c-4857-b0bf-fd6e99b501e5.png";
document.querySelector("link[rel*='icon']").href = icon;
document.querySelector("link[rel*='apple-touch-icon']").href = icon;