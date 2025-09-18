document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelectorAll(".message").forEach(el => el.remove());

    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const birthdate = document.getElementById("birthdate").value.trim();

    if (!login || !password || !confirmPassword || !name || !surname || !address || !email || !phone || !birthdate) {
      showMessage("Veuillez remplir tous les champs.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage("Veuillez saisir un email valide.");
      return;
    }
    if (password !== confirmPassword) {
      showMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    displayRecap({
      login,
      name,
      surname,
      address,
      email,
      phone,
      birthdate
    });
  });

function showMessage(text) {
  const Msg = document.querySelector(".message");
  if (Msg) Msg.remove();

  const msg = document.createElement("div");
  msg.classList.add("message"); 
  msg.textContent = text;
  form.appendChild(msg);
}

  function displayRecap(data) {
    form.style.display = "none"; 

    const recapDiv = document.createElement("div");
    recapDiv.classList.add("recap");

    recapDiv.innerHTML = `
      <h2>Incription réussie</h2>
      <p><strong>Login :</strong> ${data.login}</p>
      <p><strong>Nom :</strong> ${data.name}</p>
      <p><strong>Prénom :</strong> ${data.surname}</p>
      <p><strong>Adresse :</strong> ${data.address}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      <p><strong>Téléphone :</strong> ${data.phone}</p>
      <p><strong>Date de naissance :</strong> ${data.birthdate}</p>
    `;

    document.body.appendChild(recapDiv);
  }
});
