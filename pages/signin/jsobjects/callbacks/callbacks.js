export default {
  Create_New_UseronSuccess () {
    showAlert("Utilizator adăugat cu succes!", "success");

    // Salvează rolul selectat în store
    storeValue("user_role", Create_New_User.formData.role);

    // Redirecționează în funcție de rol
    if (Create_New_User.formData.role === "pacient") {
      navigateTo("pagina_pacient");
    } else if (Create_New_User.formData.role === "medic") {
      navigateTo("pagina_medic");
    } else if (Create_New_User.formData.role === "receptionist") {
      navigateTo("pagina_receptionist");
    } else if (Create_New_User.formData.role === "administrator") {
      navigateTo("pagina_administrator");
    }

    // Resetare formular (opțional)
    Create_New_User.setSourceData({
      username: "",
      email: "",
      password: "",
      role: "pacient",
      first_name: "",
      last_name: "",
      birth_date: "",
      phone_number: "",
      university: "",
      review: ""
    });
  },

  Create_New_UseronFailure () {
    showAlert("Eroare la adăugare utilizator", "error");
  }
};
