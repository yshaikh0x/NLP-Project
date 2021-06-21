async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    const res = await fetch('http://localhost:8000/postResults', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ articleUrl: formText }),
    });
    try {
        const newData = await res.json();
        console.log("response from /postData", newData);
        document.getElementById('results').innerHTML = newData.message
    } catch (error) {
        console.log("error1", error);
    }
}
export { handleSubmit }