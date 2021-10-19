document.getElementById("saveDataBtn").addEventListener("click", function(e) {
    e.preventDefault()
    var tipoId = document.getElementById("tipoId").value
    var numeroId = document.getElementById("numeroId").value
    var nombre = document.getElementById("nombre").value
    var correo = document.getElementById("correo").value
    var celular = document.getElementById("celular").value
    var edad = document.getElementById("edad").value

    if (tipoId == "" || numeroId == "" || nombre == "" || correo == "" || celular == "" || edad == "") {
        alert("Debe llenar los campos!")
    } else {
        alert("Su cita fue programada para el dia...")
    }
})