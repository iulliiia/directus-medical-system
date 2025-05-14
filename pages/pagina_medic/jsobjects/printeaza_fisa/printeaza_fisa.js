export default {
	printeazaFisa() {
		const doc = new jspdf.jsPDF();

		doc.setFontSize(12);
		doc.text("Fișă medicală", 10, 10);
		doc.text("Pacient: " + tabel_fise_medic.selectedRow.pacient, 10, 20);
		doc.text("Data: " + tabel_fise_medic.selectedRow.data + " " + tabel_fise_medic.selectedRow.ora, 10, 30);
		doc.text("Istoric: " + tabel_fise_medic.selectedRow.istoric, 10, 40);
		doc.text("Simptome: " + tabel_fise_medic.selectedRow.simptome, 10, 50);
		doc.text("Diagnostic: " + tabel_fise_medic.selectedRow.diagnostic, 10, 60);
		doc.text("Recomandări: " + tabel_fise_medic.selectedRow.recomandari, 10, 70);

		// Acțiunea care declanșează descărcarea
		doc.save("fisa_medicala.pdf");
	}
}
