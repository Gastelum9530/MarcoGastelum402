class Usuario {
nombreCompleto: string;
constructor(nombre: string, apellido: string) {
this.nombreCompleto = nombre + " " + apellido;
}
hola(): string {
return "hola, " + this.nombreCompleto;
}
}
var usuario = new Usuario("Benito","Juárez");
document.body.innerHTML = usuario.hola();