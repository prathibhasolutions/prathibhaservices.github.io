function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        address: document.getElementById("address").value,
        service: document.getElementById("service").value,
    };

    const serviceID = "service_vcy55aj";
    const templateID = "template_dvbxxto";



    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("address").value = "";
            document.getElementById("service").value = "";
            console.log(res);

        })
        .catch(err => console.log(err));
    alert("Your order sent successfully!! Our technician will contact you in short time");

}


function sendMessage() {
    var params = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_79w44o8";
    const templateID = "template_sr8prhc";



    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);

        })
        .catch(err => console.log(err));
    alert("Your message sent successfully!! we will contact you within 24 hours");

}