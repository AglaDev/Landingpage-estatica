window.onload = function(){

    const btnmenu = document.querySelector('.btn-menu')
    const contenmenu = document.querySelector('.content-menu')
    
    BtnMenu(btnmenu)
    
    //BTN MENU
    function BtnMenu(element){

        element.onclick = ()=>{

            toggleBtnMenu(element)
            toggleContentMenu(contenmenu)
            
        }

    }

    function toggleBtnMenu(element){
        element.classList.toggle('btn-menu-toggle')
    }

    //CONTENT MENU

    function toggleContentMenu(element){

        element.classList.toggle('content-menu-toggle')

    }

    (function scroll(){

        let links = document.querySelectorAll('.menu li a')
        
        links.forEach(link=>{
            link.addEventListener('click',function(e){
                
                e.preventDefault()
                toggleBtnMenu(btnmenu)
                toggleContentMenu(contenmenu)
                posicaoItem(this)


           })


        })
        

    }())

    function posicaoItem(item){

        let seletor = item.getAttribute('data-get-item-menu')
        let posicao = document.querySelector(seletor).offsetTop;

        goItem(posicao)

    }

    function goItem(posicao){
        let alturaCabecalho = document.querySelector('#cabecalho').offsetHeight
        let inicio =  window.scrollY
        let final = posicao
        let incremento = 60
        let posicaoAtual=inicio;

        let intervalo = setInterval(function(){
            
            if(inicio<final){
                posicaoAtual += incremento
                window.scrollTo(0,posicaoAtual)
                
                if(posicaoAtual==final || posicaoAtual>final){ 
                    posicaoAtual=final
                    window.scrollTo(0,posicaoAtual-50)
                    console.log(posicaoAtual)
                    clearInterval(intervalo)
                }
            }else{
                posicaoAtual -= incremento
                window.scrollTo(0,posicaoAtual)
                
                if(posicaoAtual==final || posicaoAtual< final){
                    posicaoAtual=final
                    window.scrollTo(0,posicaoAtual-50)
                    console.log(posicaoAtual)
                    clearInterval(intervalo)
                }
            }

        },15)


        
    }

 



    













}