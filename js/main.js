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
        window.scrollTo(0, posicao-50)
        console.log(alturaCabecalho)
    }

 



    













}