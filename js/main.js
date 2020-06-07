window.onload = function(){

    //CONFIGURAÇÕES DO MENU
    var btnMenu = document.getElementById('bt-menu');
    var cabecalho = document.getElementById('cabecalho');

    function toggleBtnMenu(){

        btnMenu.classList.toggle('btn-menu-toggle');

    }

    btnMenu.addEventListener('click', function(){

        toggleBtnMenu();
        toggleMenu();

    })

    //ABRE E FECHA O MENU VERSÃO MOBILE
    function toggleMenu(){
        var contentMenu = document.getElementById('content-menu');

        contentMenu.classList.toggle('content-menu-toggle');


    }
    
    //SCROLL DOS ITEMS DO MENU

    function efeitoScrollMenu(){

        var links = document.querySelectorAll('.menu li a');

        links.forEach(function(e){
          
            selectItem(e);

        });


    }

    function selectItem(item){
        
        item.addEventListener('click', function(event){
            event.preventDefault();
            toggleMenu();
            toggleBtnMenu();
            var seletor = this.getAttribute('data-get-item-menu');
            var posicao = document.querySelector(seletor).offsetTop;

            goItem(posicao)
            

        });

    }

    function goItem(posicao){
       
        

    

    }

    efeitoScrollMenu();
    




}