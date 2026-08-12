
function pregunta(id)
{
	let respuesta = confirm('¿Seguro que quieres eliminar el cliente?');
	
	if(respuesta)
	{
		window.location.href = "eliminar/" + id; 
	}
}