
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)     

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8000')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        console.log("response from /postData", res);
        document.getElementById('results').innerHTML = data.message
    })


}

export { handleSubmit }