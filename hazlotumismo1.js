const fs = require('fs');

try {
    fs.writeFileSync('./memory.txt', 'Vivo en la ciudad de Quito, capital del Ecuador');
    console.log('Archivo creado correctamente');
} catch (error) {    
    console.log(error.message);
}