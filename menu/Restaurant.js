


const acc  = document.querySelectorAll(`.item-label`);

    acc.forEach(
        acc=>{
        acc.addEventListener(
        "click", event =>  {

         const currentlyActive = document.querySelector(`.item-label.active`);
         if(currentlyActive   && currentlyActive!==acc){
            currentlyActive.classList.toggle(`active`);
            currentlyActive.nextElementSibling.style.maxHeight=0;
         }



        acc.classList.toggle(`active`);
        const accBody = acc.nextElementSibling;
        if(acc.classList.contains(`active`)){
            accBody.style.maxHeight = accBody.scrollHeight + "px";

        } else {
            accBody.style.maxHeight = 0;
        }
    });
})



function showSidebar()
{
    const sidebar = document.querySelector(`.sidebar`);
    sidebar.style.display = `flex`
}

function hideSidebar()
{
    const sidebar = document.querySelector(`.sidebar`);
    sidebar.style.display = `none`
}

