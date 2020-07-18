window.onload = ()=>{

    const btnmenu = document.querySelector('.btn-menu')
    
    
    function BtnMenu(btn){

        btn.onclick = ()=>{

            toggleBtnMenu(btn)
            
        }

    }

    function toggleBtnMenu(element){
        element.classList.toggle('btn-menu-toggle')
    }

    BtnMenu(btnmenu)



    













}