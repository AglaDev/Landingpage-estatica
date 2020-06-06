window.onload = function(){

    //CONFIGURAÇÕES DO MENU
    var btnMenu = this.document.getElementById('bt-menu');

    btnMenu.addEventListener('click', function(){

        btnMenu.classList.toggle('btn-menu-toggle');

        toggleMenu();

    })

    //ABRE E FECHA O MENU VERSÃO MOBILE
    function toggleMenu(){
        var contentMenu = document.getElementById('content-menu');

        contentMenu.classList.toggle('content-menu-toggle');


    }




}