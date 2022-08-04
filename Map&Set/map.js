const usuarios = new Map();

usuarios.set('Fernando', 'User');
usuarios.set('Luiz', 'Admin');
usuarios.set('Maria', 'User');
usuarios.set('Francisco', 'User');
usuarios.set('Lusifran', 'Admin');

function getAdmins(map, type){
    let admins = [];
    let users = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
        if(value === 'User'){
            users.push(key);
        }
    }
    if(type == 1){
        return admins;
    }
    else {
        return users;
    }
}
console.log(getAdmins(usuarios, 2));