const fs = require('fs').promises;

const writeContent = async () => {
    try {
        await fs.writeFile('./memory-async.txt', 'Vivo en la ciudad de Quito, capital del Ecuador');
        console.log('Archivo creado correctamente');
    } catch (error) {
        console.log(error.message);
    }   
};

writeContent(); 