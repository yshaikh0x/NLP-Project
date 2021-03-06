async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    const inputURL = document.getElementById('inputURL').value;
    if (Client.urlValidation(inputURL)) {
        console.log("::: Form Submitted :::")
        const res = await fetch('http://localhost:8000/postResults', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ articleUrl: inputURL }),
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
        }
    } else {
        alert("please enter a valid or URL");
    }
}
export { handleSubmit }