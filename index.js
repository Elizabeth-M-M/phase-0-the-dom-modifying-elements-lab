document.querySelector('main').remove();
document.querySelector('h1#victory');
const newHeader = document.createElement('h1');
newHeader.id ="victory"
newHeader.innerHTML = "Ella is the champion"
document.body.prepend(newHeader);
