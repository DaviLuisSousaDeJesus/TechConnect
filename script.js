const form = document.getElementById('form')
let campos = document.querySelectorAll('.required')
const span = document.querySelectorAll('.span-required')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;



form.addEventListener('submit',(event) => {
    event.preventDefault();
    nameValidate();
    emailvalido();
} )

function setError(index){
   campos[index].style.border='2px solid #e63636' 
   span[index].style.display='block'
}
function removeError(index){
     campos[index].style.border='' 
   span[index].style.display='none'
}

function nameValidate(){
    if(campos[0].value.length<3){
    
        setError(0);

    }
    else{
      removeError(0);
    }
} 
function emailvalido(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }

}
document.getElementById("form").addEventListener("submit", function (event) {
    if (!this.checkValidity()) {
      event.preventDefault();
      alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
      event.preventDefault();
      window.location.href = "Obrigado.html";
    }
  });