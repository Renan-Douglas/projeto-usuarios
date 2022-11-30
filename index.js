let nome = document.querySelector("#exampleInputName")
let genero = document.querySelectorAll("#form-user-create [name=gender]:checked")
let nascimento = document.querySelector("#exampleInputBirth")
let pais = document.querySelector("#exampleInputCountry")
let email = document.querySelector("#exampleInputEmail")
let senha = document.querySelector("#exampleInputPassword")
let foto = document.querySelector("#exampleInputFile")
let admin = document.querySelector("#exampleInputAdmin")




var fields = document.querySelectorAll("#form-user-create [name]")

fields.forEach(function(field, index){

    if (field.name == "gender") {

        if (field.checked /*=== true*/) {

            console.log("Sim", field)

        }

    } else {

        console.log("Não")

    }

    // console.log(field.id, field.name, field.value, field.checked, index)
    
});