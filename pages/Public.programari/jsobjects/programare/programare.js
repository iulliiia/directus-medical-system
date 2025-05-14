export default {
	Adauga_programareonSubmit () {
		showAlert("Programarea a fost adăugată cu succes!", "success");
SelectQuery.run(); // reîncarcă tabelul (opțional)
Adauga_programare.setSourceData({}); // opțional: curăță formularul

	},
	Adauga_programareonFailure () {
	showAlert("Eroare la adăugarea programării", "error");
	},
	SourceData(){
		Adauga_programare.setSourceData({
  pacient_id: "", // gol, dar nu null
  medic_id: "",
  data: moment().format("YYYY-MM-DD"), // sau "" dacă nu vrei presetare
  ora: "",
  status: "in asteptare", // valoare default validă
  specializare: ""
});
	}
}