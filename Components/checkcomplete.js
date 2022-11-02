const checkComplete= () =>{

    const i= document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");

    i.addEventListener("click", completeTask);

    return i;
}

const completeTask= (event) =>{

    const element= event.target;

    //toggle comprueba si esta clase existe, si existe la quita y si no existe la agrega
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

export default checkComplete;