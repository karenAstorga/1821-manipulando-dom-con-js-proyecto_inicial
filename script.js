//Inmediately invoked function expression IIFE Ponemos todo dentro de una función para limitar su scope
import checkComplete from "./Components/checkcomplete.js";
import deleteIcon from "./Components/deleteIcon.js";

                    const btn= document.querySelector('[data-form-btn]');

                    const createTask= (evento) => {
                    evento.preventDefault();
                    const input= document.querySelector('[data-form-input]');
                    const value= input.value;
                    const list= document.querySelector('[data-list]');
                    const task= document.createElement('li');
                    task.classList.add("card");
                    input.value= "";
                    const taskContent= document.createElement("div");
                    taskContent.appendChild(checkComplete());
                    const titleTask= document.createElement("span");
                    titleTask.classList.add("task");
                    titleTask.innerText= value;
                    taskContent.appendChild(titleTask);

                    //task.innerHTML= content;
                    task.appendChild(taskContent);
                    list.appendChild(task);
                    task.appendChild(deleteIcon());

                
                    
                } 


                btn.addEventListener("click", createTask)

                
                
            