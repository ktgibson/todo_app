function init(){
    let user_input = document.getElementById("user_input");
    let add_btn = document.getElementById("add_btn");
    let ul = document.querySelector('ul')

    // check input length
    function check_input(){
        return user_input.value.length;
    }

    // create list element
    function create_list_element(){
        // create element container
        let elem_container = document.createElement('div');
        elem_container.classList.add("elem_container")
        ul.appendChild(elem_container)

        // create delete buttons
        let elem_btn = document.createElement('button');
        elem_btn.textContent = "👍"
        elem_btn.classList.add("elem_btn")
        elem_btn.addEventListener('click', function(){
            list_item.remove();
            elem_container.remove();
            elem_btn.remove();
        })
        elem_container.appendChild(elem_btn);

        // create list element
        let list_item = document.createElement("li");
        list_item.id = "list_item-"+Math.floor(Math.random()*9999);
        list_item.classList.add("list_item")
        list_item.textContent = user_input.value
        list_item.addEventListener('click', function(){
            list_item.classList.toggle("done")
        })
        elem_container.appendChild(list_item);

        // set user input value to empty
        user_input.value = ''
    }
    
    function add_to_list(){
        if(check_input() > 0){
            create_list_element();
        }
    }

    function add_to_list_enter(){
        if(check_input() > 0 && event.key === "Enter"){
            create_list_element();
        }
    }

    add_btn.addEventListener('click', add_to_list);
    user_input.addEventListener('keydown', add_to_list_enter);
}

window.addEventListener('load', init)