var fields = document.querySelectorAll("#form-user-create [name]")

var user = {}

document.getElementById('form-user-create').addEventListener('click', function(event){

    event.preventDefault();

    fields.forEach(function(field, index){
        
        if (field.name == "gender") {

            if (field.checked /*=== true*/) {

                user[field.name] = field.value

            }

        } else {

                user[field.name] = field.value

        }
        
    });

    console.log(user)

});