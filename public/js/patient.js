

document.getElementById('patientSearchButton').addEventListener('click', () => {
    patientNoInputField = document.getElementById('patientNoInputField');
    patientNo = patientNoInputField.value;

    console.log(patientNo);
})