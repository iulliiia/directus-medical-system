export default {
  Create_New_UseronSuccess () {
    showAlert("Utilizator adăugat cu succes!", "success");

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
