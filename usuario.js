var Usuario = (function () {
    function Usuario(nombre, apellido) {
        this.nombreCompleto = nombre + " " + apellido;
    }
    Usuario.prototype.hola = function () {
        return "hola, " + this.nombreCompleto;
    };
    return Usuario;
}());
var usuario = new Usuario("Benito", "Juárez");
document.body.innerHTML = usuario.hola();
//# sourceMappingURL=usuario.js.map