const body = document.querySelector('body'),
    sidebar = document.querySelector('.sidebar'),
    toggle = document.querySelector('.toggle'),
    mode_switsh = document.querySelector('.mode'),
    toggle_switsh = document.querySelector('.toggle-switsh'),
    modetext = document.querySelector('.mode-text');



toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
})



mode_switsh.addEventListener('click', () => {
    body.classList.toggle('dark');

    if(body.classList.contains('dark')){
        modetext.innerHTML = 'Dark Mode';
        
    }else{
        modetext.innerHTML = "Light Mode"
    }
})

