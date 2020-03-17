//getDate has binded to an anonimous function that returns current date under specific format name

module.exports.getDate = ()=> {  //a none name function
    const today = new Date();
   
    const options = {   //A javascript object
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options); 

//this method returns data from date object under specified format declared on options object
}

// //getDay has binded to an anonimous function that returns weekday name
module.exports.getDay = () => {
    const today = new Date();
    const options = {   //A javascript object
        weekday: "long"
    };

    return today.toLocaleDateString("en-US", options); 
//this method returns data from date object under specified format declared on options object
}