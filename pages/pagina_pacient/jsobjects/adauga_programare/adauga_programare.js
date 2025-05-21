export default {
  adaugaProgramare() {
  
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