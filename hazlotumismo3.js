const fs = require ('fs');

try{
    const data = fs.readFileSync("./test.txt", "utf-8");
    console.log(data);
}catch(error){
    console.error(error.message);
}