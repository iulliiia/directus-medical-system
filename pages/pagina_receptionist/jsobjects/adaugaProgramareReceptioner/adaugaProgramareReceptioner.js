export default {
  adaugaProgramareReceptioner() {
    const data = Form_Add_Programare.formData.data;
    const ora = Form_Add_Programare.formData.ora;

    if (!moment(data, "YYYY-MM-DD", true).isValid() || !ora) {
      showAlert("Data sau ora este invalidă!", "error");
      return;
    }

    query_verifica_programare.run(() => {
      const exista = Number(query_verifica_programare.data[0].count);

      if (exista > 0) {
        showAlert("Medicul are deja o programare la acea oră!", "warning");
      } else {
        query_creeaza_programare.run(() => {
          showAlert("Programare adăugată cu succes!", "success");

          Form_Add_Programare.setSourceData({
            specializare: '',
            medic: '',
            pacient: '',
            data: '',
            ora: ''
          });

          query_toate_programarile.run(); // reload tabel
        });
      }
    });
  }
}
