
document.getElementById('patientSearchButton').addEventListener('click', async () => {

    console.log('patientSearchButton clicked');

    patientNoInputField = document.getElementById('patientNoInputField');
    patientNo = patientNoInputField.value;

    console.log(patientNo);

    // // send get request to /patient/:patientNo
    // await fetch('/patient/' + patientNo)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         // render patient.ejs with data
    //         document.getElementById('patient').innerHTML = data;
    //     })
    

})