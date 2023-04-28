//TEMPLATE ID template_mrvusmx
//SERVICE ID service_xdrw4ld
//PUBLIC KEY RgiV5q1Ri8uMCOyb8

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_xdrw4ld",
      "template_mrvusmx",
      event.target,
      "RgiV5q1Ri8uMCOyb8"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on toom.karl42@gmail.com"
      );
    });
}
