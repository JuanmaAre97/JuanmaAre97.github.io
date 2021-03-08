window.onload = function() {
    let body = document.querySelector('body');
    
    const titulo = "Editor de Autos";

    let item = getFromLS('autoToEdit');

    const atributos = ['marca', 'modelo', 'año', 'color', 'patente'];

    const tipoDelAtributo = ['text', 'text', 'number', 'text', 'text'];

    const saveItem = () => {        
        console.log('sad');
    }

    const addItem = () => {
    }

    renderizarHTML(body, titulo, item, atributos, tipoDelAtributo, saveItem);

    // Modify
    document.getElementById('modify').addEventListener('click', function(e) {
        // Get position from LS
        const position = getFromLS("position");

        // Save data from inputs
        item = createAuto();

        // Get list from LS
        let lista = getFromLS('listaAutos');
    
        // Save item
        lista[position] = item;
    
        // Save listaUsuario in LS
        saveInLS("listaAutos", lista);

        alert("Fue modificado exitosamente");
    
        // Move to listaAutos.html
        window.location.href = "./listaGenerica.html";
    
        e.preventDefault();
    });

    // Delete
    document.getElementById('delete').addEventListener('click', function(e) {
        // Get position from LS
        const position = getFromLS("position");

        // Get list from LS
        let lista = getFromLS('listaAutos');

        lista.splice(position, 1);

        // Save lista in LS
        saveInLS("listaAutos", lista);

        alert("Eliminado");

        // Move to perfil.html
        window.location.href = "./listaGenerica.html";
        
        e.preventDefault();
    });
}