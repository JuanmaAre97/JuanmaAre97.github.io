function renderizarHTML_Edit(divEditaABM, titulo, atributos, tipoDelAtributo, actualizarItem) {
    // Generar el HTML
    divEditaABM.innerHTML += getTemplateEdit(titulo, atributos, tipoDelAtributo, actualizarItem);    


    // Event Listeners
    // Modificar
    document.getElementById('save').addEventListener('click', function() {
        actualizarItem();
    });
    // Eliminar
}

function getTemplateEdit(titulo, atributos, tipoDelAtributo) {
    let texto = '';

    for (let i = 0; i < atributos.length; i++) {
        texto += `
            <div class="form-group">
                <label for="${atributos[i]}">${atributos[i]}</label>
                <input type="${tipoDelAtributo[i]}" id="${atributos[i]}" class="form-control">
            </div>
        `;
    }


    var info = `
    <div class="container bg-white p-5">
        <h1 class="text-center mb-4">${titulo}</h1>

        <form action="" class="form">
            ${texto}
            
            <button id="save" class="btn btn-block btn-primary mt-5" type="button">Actualizar</button>
            <button id="delete" class="btn btn-block btn-danger mt-3" type="button">Eliminar</button>
            </form>
    </div>
`;

return info;
}