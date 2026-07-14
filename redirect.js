const parametros=new URLSearchParams(window.location.search);

const id=parametros.get("id");

if(id){

localStorage.setItem("INVITADO",id);

}

alert("ID guardado correctamente: "+id);

//Aquí después redireccionaremos a Canva
