const button = document.getElementById("open-button");
button.addEventListener('click', () => { // add a click event listener
    if (document.body.classList.contains('show-menu'))
    {
        document.querySelector('body').classList.remove('show-menu');
        document.getElementById('menu').style.display = 'none';
    }
    else
    {
        document.querySelector('body').classList.add('show-menu');
        document.getElementById('menu').style.display = 'block';
    }
        
  });

function onClickMenuItem() {
    document.querySelector('body').classList.remove('show-menu');
    document.getElementById('menu').style.display = 'none';
}