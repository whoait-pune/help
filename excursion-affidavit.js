const { jsPDF } = window.jspdf;

function getData() {
    return {
        studentName: document.getElementById("studentName").value,
        fatherName: document.getElementById("fatherName").value,
        place: document.getElementById("place").value,
        date: document.getElementById("date").value
    };
}

function generatePreview() {

    const d = getData();

    document.getElementById("preview").innerHTML = `

    <div class="document-preview">

        <div class="preview-title">
            AFFIDAVIT FOR PARTICIPATION IN EXCURSIONS/PICNICS/TOURS<br>
            ORGANISED BY AIT
        </div>

        <p>
            <b>1.</b>
            I,
            <b>${d.studentName}</b>
            son/daughter of
            <b>${d.fatherName}</b>
            hereby solemnly affirm and declare as under:-
        </p>

        <p>
            <b>(a)</b>
            I shall not take part in any kind of excursions/tours/picnics organised by students without consent of the Management.
        </p>

        <p>
            <b>(b)</b>
            If I indulge in any such activities, it will be at my own risk.
        </p>

        <p>
            <b>(c)</b>
            I shall not hold the Institute responsible in case of accidents/any other untoward incident during prohibited excursion/picnic/tour.
        </p>

        <p>
            <b>(d)</b>
            Further I declare that I shall not claim any compensation from the Institute.
        </p>

        <p>
            <b>(e)</b>
            If I volunteer to join any excursion/picnic/tour organised by AIT, it will be at my own risk and I shall not hold AIT responsible for any untoward incident that may take place.
        </p>

        <br><br>

        <b>Place :</b> ${d.place}

        <div style="text-align:right;margin-top:35px;">
            Signature of Student
            <br><br>
            _____________________
        </div>

        <br>

        <b>Date :</b> ${d.date}

        <div style="text-align:right;margin-top:35px;">
            (Name of Student)
            <br><br>
            <b>${d.studentName.toUpperCase()}</b>
        </div>

        <br><br><br>

        Signature of Father/Guardian

        <br><br>

        _______________________

        <br><br>

        (<b>${d.fatherName.toUpperCase()}</b>)

    </div>

    `;
}

function generatePDF() {

    const d = getData();

    const doc = new jsPDF("p", "mm", "a4");

    let y = 20;

    doc.setFont("times", "bold");
    doc.setFontSize(15);

    doc.text(
        "AFFIDAVIT FOR PARTICIPATION IN",
        105,
        y,
        { align: "center" }
    );

    y += 8;

    doc.text(
        "EXCURSIONS/PICNICS/TOURS ORGANISED BY AIT",
        105,
        y,
        { align: "center" }
    );

    y += 18;

    doc.setFont("times", "normal");
    doc.setFontSize(13);

    function paragraph(text, x, width) {

        const lines = doc.splitTextToSize(text, width);

        doc.text(lines, x, y);

        y += lines.length * 8;

    }

    paragraph(
        `1. I, ${d.studentName}, son/daughter of ${d.fatherName} hereby solemnly affirm and declare as under:-`,
        20,
        170
    );

    y += 3;

    paragraph(
        "(a) I shall not take part in any kind of excursions/tours/picnics organised by students without consent of the Management.",
        25,
        165
    );

    paragraph(
        "(b) If I indulge in any such activities, it will be at my own risk.",
        25,
        165
    );

    paragraph(
        "(c) I shall not hold the Institute responsible in case of accidents/any other untoward incident during prohibited excursion/picnic/tour.",
        25,
        165
    );

    paragraph(
        "(d) Further I declare that I shall not claim any compensation from the Institute.",
        25,
        165
    );

    paragraph(
        "(e) If I volunteer to join any excursion/picnic/tour organised by AIT, it will be at my own risk and I shall not hold AIT responsible for any untoward incident that may take place.",
        25,
        165
    );

    y += 15;

    doc.setFont("times", "bold");

    doc.text(
        `Place : ${d.place}`,
        20,
        y
    );
    y += 7;

    doc.text(
        `Date : ${d.date}`,
        20,
        y
    );

    y += 12;
    doc.text(
        `Name of Student : ${d.studentName}`,
        20,
        y
    );
    doc.line(
        130,
        y,
        180,
        y
    );
    y += 7;
    doc.text(
        "Signature Of Student",
        130,
        y
    );

y +=35
doc.text(
        `Name of  Father/Guardian : ${d.fatherName.toUpperCase()}`,
        20,
        y
    );
    y += 10
    doc.line(
        130,
        y,
        180,
        y
    );
    y += 7;
    doc.text(
        "Signature Of Father/Guardian",
        130,
        y
    );

    doc.save("AIT_Excursion_Affidavit.pdf");
}
