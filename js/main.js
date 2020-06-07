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
        var cont=0;
        var time = 50;
        var posi = window.scrollY;
        var interval = setInterval(function(){

            
            if(posi > posicao){
                posi-=time;
                window.scrollTo(0,posi)
                console.log(posicao,posi)
            }else{
                posi+=time;
                window.scrollTo(0,posi)
                console.log(posicao,posi)
                if(posi>posicao){
                    clearInterval(interval);
                }
            }

           
        

        },20);
        





        window.addEventListener('scroll',function(){

            var posTempoRealScroll = window.scrollY;
            

        })

    

    }

    efeitoScrollMenu();
    




}