export default {
	Create_New_UseronSubmit () {
		insert_new_user.run(() => {
		showAlert("Utilizator adăugat cu succes!", "success");
  	Create_New_User.formData.reset(); // resetează formularul
}, (err) => {
  showAlert("Eroare la adăugare: " + err.message, "error");
});

	}
}