window.onload = ()=>{

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
    



    













}