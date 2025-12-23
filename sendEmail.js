function sendEmail(e){
  e.preventDefault();
  const serviceType = document.getElementById("serviceType");
  const selectedService = serviceType.options[serviceType.selectedIndex].text;
  const propertySize = document.querySelector('input[name="property"]:checked')?.value || "";

  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone-number").value,
    address: document.getElementById("address").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    service: selectedService,
    property: propertySize,
  }

  emailjs
    .send("service_8npuo6m", "template_67s0441", params)
    .then(() => {
      alert("Booking sent successfully");
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to send booking");
    });
}