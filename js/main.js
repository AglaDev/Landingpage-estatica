window.onload = function(){

    //CONFIGURAÇÕES DO MENU
    var btnMenu = document.getElementById('bt-menu');
    var cabecalho = document.getElementById('cabecalho');
    var alturaCabecalho = cabecalho.offsetHeight;
    var contentPrincipal = document.getElementById('home');
    contentPrincipal.style.marginTop = alturaCabecalho+10+"px";

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

    //essa função apenas seleciona e pega a posição do item
    function selectItem(item){
        
        item.addEventListener('click', function(event){
            event.preventDefault();
            toggleMenu();
            toggleBtnMenu();

            var seletor = this.getAttribute('data-get-item-menu');
            var posicao = document.querySelector(seletor).offsetTop;
            //função que dar a scrollada até o item
            goItem(posicao)
            

        });

    }

    //arruma essa função ainda não esta funcionando corretamente
    function goItem(posicao){
        
        var inicio = window.scrollY;
        var fim = posicao;
        var posAtual = inicio;
        var incremento=30;

        var interval = setInterval(function(){

            if(inicio<fim){

                posAtual+=incremento;
                window.scrollTo(0,posAtual-50);
                console.log(posAtual,fim);

                if(posAtual==fim || posAtual>fim){
                    clearInterval(interval);
                }

            }else if(inicio>fim){
                posAtual-=incremento;
                window.scrollTo(0,posAtual-50);
                console.log(posAtual,fim);
                

                if(posAtual==fim || posAtual<fim){
                    clearInterval(interval); 
                }
            }

        },15)
        
           
    }

    efeitoScrollMenu();
    




}