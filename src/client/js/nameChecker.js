
// function checkForName(inputText) {
//     console.log("::: Running checkForName :::", inputText);
//     let names = [
//         "Picard",
//         "Janeway",
//         "Kirk",
//         "Archer",
//         "Georgiou"
//     ]

//     if(names.includes(inputText)) {
//         alert("Welcome, Captain!")
//     }
// }


function urlValidation(inputURL) {
    console.log("::: Running URL Validation :::", inputURL);
    let validUrl = inputURL.match(/^(ftp|http|https):\/\/[^ "]+$/);
    if(validURL.includes(inputURL)) {
        alert("Welcome, Captain!")
    } 
    else {
        console.log("Enter a valid URL")
        alert("Enter a valid URL")
    }
}


// export { checkForName }

export {urlValidation }