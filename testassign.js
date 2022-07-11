const name = document.getElementById("student-name");
const rollNo = document.getElementById("univesity-rollno");
const address = document.getElementById("address");
const date = document.getElementById("date");

window.onload = () => {
    name.innerHTML = "Mani Singh";
    rollNo.innerHTML = "201500381";
    address.innerHTML = "GLA University, Mathura";
    date.innerHTML = new Date().toDateString();
}