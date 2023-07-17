import { jsPDF } from "jspdf";

type pdf = {
    name: string;
    breed: string;
    saillieDate: string | null;
    ovulation: string;
    echographie: { day20: string, day25: string };
    radiographie: { day50: string, day55: string };
    naissance : {
        day64: string,
        day65: string,
        day66: string,
    }
}
const createPDF = ({name, breed, ovulation, echographie, radiographie, naissance, saillieDate } : pdf) => {
    const doc = new jsPDF();
    doc.text(`Suivi de gestation pour mon ${breed.toLowerCase()} ${name ?? name}`, 10, 10);

    doc.text("Date d'accouplement", 10, 20);
    doc.text(`${saillieDate}`, 70, 20);

    doc.text("Date d'ovulation (+/- 24h après accouplement)", 10, 30);
    doc.text(`${ovulation}`, 150, 30);

    doc.text("Dates recommendées pour l'échographie", 10, 40);
    doc.text(`J+20 ${echographie?.day20}`, 90, 50);
    doc.text(`J+25 ${echographie?.day25}`, 90, 60);

    doc.text("Dates recommendées pour la radiographie", 10, 70);
    doc.text(`J+50 ${radiographie?.day50}`, 90, 80);
    doc.text(`J+55 ${radiographie?.day55}`, 90, 90);

    doc.text("Dates estimées de la mise bas ", 10, 100);
    doc.text(`J+64 ${naissance?.day64}`, 90, 110);
    doc.text(`J+65 ${naissance?.day65}`, 90, 120);
    doc.text(`J+66 ${naissance?.day66}`, 90, 130);

    doc.text("Jour.s feriés : ", 10, 140);
    doc.text("Date / heure perte du bouchon : ", 10, 150);
    doc.text("Après la perte du bouchon compter : ", 10, 160);
    doc.text(" - h : ", 40, 170);
    doc.text(" - Max 36h pour une première portée (animal primipaire) : ", 40, 180);


    doc.text("En cas de doute je consulte mon vétérinaire ou un vétérinaire d'urgence", 10, 190);
    doc.text("Numéro de téléphone de mon véterinaire ", 10, 200);
    doc.text("Numéro de téléphone un véterinaire d'urgence ", 10, 220);
    doc.text("Remarque(s) ", 10, 240);

    doc.save("breeding.pdf");
}

export {
    createPDF
}