const dbConnection = window.indexedDB.open('dentista', 2);
let db;
//
dbConnection.onsuccess = () => {
    db = dbConnection.result;
    console.log("La Base De Datos Esta Abierta", db);
}
//
dbConnection.onupgradeneeded = (e) => {
    db = e.target.result;
    console.log("Crear Objetos De DB", db);
    const coleccionObjetos = db.createObjectStore('cita', {
        keyPath: 'id'
    });
    coleccionObjetos.createIndex("id", "id", {unique: false});
    coleccionObjetos.createIndex("sservicio", "sservicio", {unique: false});
    coleccionObjetos.createIndex("sdoctor", "sdoctor", {unique: false});
    coleccionObjetos.createIndex("nombre", "nombre", {unique: false});
    coleccionObjetos.createIndex("email", "email", {unique: false});
    //coleccionObjetos.createIndex("dcita", "dcita", {unique: false});
    //coleccionObjetos.createIndex("hcita", "hcita", {unique: false});

    const coleccion1Objetos = db.createObjectStore('paciente', {
        keyPath: 'id'
    });
    coleccion1Objetos.createIndex("id", "id", {unique: false});
    coleccion1Objetos.createIndex("nombre", "nombre", {unique: false});
    coleccion1Objetos.createIndex("apellido", "apellido", {unique: false});
    coleccion1Objetos.createIndex("direccion", "direccion", {unique: false});
    coleccion1Objetos.createIndex("telefono", "telefono", {unique: false});
    coleccion1Objetos.createIndex("email", "email", {unique: false});

    const coleccion2Objetos = db.createObjectStore('dentistas', {
        keyPath: 'id'
    });
    coleccion2Objetos.createIndex("id", "id", {unique: false});
    coleccion2Objetos.createIndex("nombre", "nombre", {unique: false});
    coleccion2Objetos.createIndex("apellido", "apellido", {unique: false});
    coleccion2Objetos.createIndex("direccion", "direccion", {unique: false});
    coleccion2Objetos.createIndex("telefono", "telefono", {unique: false});
    coleccion2Objetos.createIndex("especialidad", "especialidad", {unique: false});
    coleccion2Objetos.createIndex("email", "email", {unique: false});

    const coleccion3Objetos = db.createObjectStore('mensaje', {
        keyPath: 'id'
    });
    coleccion3Objetos.createIndex("id", "id", {unique: false});
    coleccion3Objetos.createIndex("nombre", "nombre", {unique: false});
    coleccion3Objetos.createIndex("email", "email", {unique: false});
    coleccion3Objetos.createIndex("mf", "mf", {unique: false});
    coleccion3Objetos.createIndex("mensaje", "mensaje", {unique: false});    
}
    dbConnection.onerror = (error) =>{
    console.log(error);
}