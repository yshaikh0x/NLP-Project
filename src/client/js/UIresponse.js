const subjectivity = document.getElementById('subjectivity');
const agreement = document.getElementById('agreement');
const confidence = document.getElementById('confidence');
const irony = document.getElementById('irony');
const scoreTag = document.getElementById('scoreTag');


const updateUI = async ()=> {
    const req = await fetch ('/all');
    try{
        const projectData = await req.json()
        subjectivity.innerHTML=`Subjectivity - ${projectData.subjectivity}`;
        agreement.innerHTML=`Agreement - ${projectData.agreement}`;
        confidence.innerHTML=`Confidence - ${projectData.confidence}`;
        irony.innerHTML=`Irony - ${projectData.irony}`;
        scoreTag.innerHTML=`ScoreTag - ${projectData.scoreTag}`;
    } catch (error) {
        console.log("ERROR", error);
        alert("Please enter an URL")
    }
}



export { updateUI }