const fs = require('fs');


function getfiles(path, obj) {
    
    return new Promise(res => {
        
        fs.readdir(path, (err, files) => {
        
            if (err) console.log(err);
        
            function getstat() {
                return new Promise(res => {
                    fs.stat(`${path}/${file}`, (err, stat) => {
                        res()
                        
                        
                        if (stat.isDirectory()) {
                            obj.dirs.push(`${path}/${file}`);
                            getfiles(`${path}/${file}`, obj);
                        }
                        else 
                            obj.files.push(`${path}/${file}`);
                    });
                });
            }
    
        return Promise.all(files.map(getstat)) 
        });
    })
}

(async function fn() {
let obj = await getfiles(`${__dirname}/node_modules/body-parser`, {dirs:[], files:  []});
console.log(obj);
})();
