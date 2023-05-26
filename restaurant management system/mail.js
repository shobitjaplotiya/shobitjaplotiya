const firebaseConfig = {
    apiKey: "AIzaSyDfPTBvSbPXkjGOPz3u46Dl_1WgPGkF0G8",
    authDomain: "contactform-restaurantwebapp.firebaseapp.com",
    databaseURL: "https://contactform-restaurantwebapp-default-rtdb.firebaseio.com",
    projectId: "contactform-restaurantwebapp",
    storageBucket: "contactform-restaurantwebapp.appspot.com",
    messagingSenderId: "199621535721",
    appId: "1:199621535721:web:db858a15346dce91aacd78"
};
//initilize firebase
firebase.initializeApp(firebaseConfig);
//reference for database
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var Name = getElementval("name");
    var foodName = getElementval("foodName");
    var orderDetails = getElementval("orderDetails");
    var address = getElementval("address");
    var howMuch = getElementval("howMuch");
    var time = getElementval("time");
    var mobileno = getElementval("mobileno");
    // console.log(Name, email, mobileno, Message);
    saveMessages(Name, foodName, orderDetails, address, howMuch, time, mobileno);

    //enable alert
    document.querySelector('.alert').style.display = 'block';
    //remove alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // reset Form
    document.getElementById('contactForm').reset();
}

const saveMessages = (Name, foodName, orderDetails, address, howMuch, time, mobileno) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        Name: Name,
        foodName: foodName,
        orderDetails:orderDetails,
        address:address,
        howMuch:howMuch,
        time:time,
        mobileno:mobileno,

    })
}
const getElementval = (id) => {
    return document.getElementById(id).value;
}