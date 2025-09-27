console.log("✅ contactscript.js loaded");

document.addEventListener("DOMContentLoaded", function () {
  if (typeof emailjs !== "undefined") {
    console.log("✅ EmailJS initialized");

    const form = document.querySelector(".contact-form form");
    if (!form) {
      console.error("❌ Contact form not found!");
      return;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("⚠️ Please fill out all fields before sending.");
        return;
      }

      const params = {
        from_name: name,
        from_email: email,
        message: message
      };

      emailjs.send("service_vl1583q", "template_jpgq2za", params, "NFcwqer2CUSMJccDG")
        .then(() => {
          console.log("✅ Email sent to abduraupov.s.r@gmail.com");

          return emailjs.send("service_vl1583q", "template_jpgq2za", {
            ...params,
            to_email: "malika@gmail.com"
          }, "NFcwqer2CUSMJccDG");
        })
        .then(() => {
          console.log("✅ Email also sent to malika@gmail.com");
          alert("🎉 Your message has been sent successfully!");
          form.reset();
        })
        .catch((err) => {
          console.error("❌ Failed to send email:", err);
          alert("⚠️ Something went wrong. Please try again later.");
        });
    });
  } else {
    console.error("❌ EmailJS not loaded. Check script include in contact.html.");
  }
});
