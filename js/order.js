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
            alert("Your order sent successfully!!")

        })
        .catch(err => console.log(err));

}