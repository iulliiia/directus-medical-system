export default {
  adaugaProgramare() {
    const dataRaw = Form_Add_Programare.formData.data;
    const oraRaw = Form_Add_Programare.formData.ora;

    // Validare date
    const isValidDate = moment(dataRaw, "YYYY-MM-DD", true).isValid();
    const isValidOra = oraRaw && oraRaw.match(/^([0-1]\d|2[0-3]):(00|30)$/);

    if (!isValidDate || !isValidOra) {
      showAlert("Data sau ora selectată este invalidă!", "error");
      return;
    }

    // Verificăm dacă există deja programare
    query_verifica_programarea.run(() => {
      const exista = Number(query_verifica_programarea.data[0].count);

      if (exista > 0) {
        showAlert("Medicul are deja o programare la acea dată și oră!", "warning");
      } else {
        query_creeaza_programare.run(() => {
          showAlert("Programarea a fost adăugată cu succes!", "success");

          Form_Add_Programare.setSourceData({
            specializare: '',
            medic: '',
            data: '',
            ora: ''
          });

          query_programari_pacient.run();
        });
      }
    });
  }
}
