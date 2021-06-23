async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    const inputURL = document.getElementById('inputURL').value;

    Client.urlValidation(formText)
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
        document.getElementById('subjectivity').innerHTML = newData.subjectivity
        document.getElementById('agreement').innerHTML = newData.agreement
        document.getElementById('confidence').innerHTML = newData.confidence
        document.getElementById('irony').innerHTML = newData.irony
    } catch (error) {
        console.log("error1", error);
        alert("Please enter a valid URL");
    }
    
}
export { handleSubmit }