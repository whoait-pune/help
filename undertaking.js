const { jsPDF } = window.jspdf;

function getData() {
    return {
        studentName: document.getElementById("studentName").value,
        armyNo: document.getElementById("armyNo").value,
        rank: document.getElementById("rank").value,
        parentName: document.getElementById("parentName").value,
        place: document.getElementById("place").value,
        date: document.getElementById("date").value
    };
}

function generatePreview() {

    const d = getData();

    const preview = document.getElementById("preview");

    preview.innerHTML = `
    <div class="affidavit">

        <div class="title">UNDERTAKING</div>

        <p>
            <b>1.</b>
            I <b>${d.studentName}</b>,
            son / daughter of Army No <b>${d.armyNo}</b>,
            Rank <b>${d.rank}</b>,
            Name <b>${d.parentName}</b>,
            have read and understood all the provisions contained in the
            <b>AIT Rule Book</b> and <b>AIT Honour Code</b>.
        </p>

        <p>
            <b>2.</b>
            I will follow the rules and codes in letter and spirit.
        </p>

        <br><br><br>

        <div style="display:flex;justify-content:space-between;">

            <div>
                <b>Place :</b> ${d.place}
                <br><br>
                <b>Date :</b> ${d.date}
            </div>

            <div style="text-align:center;">
                _________________________
                <br><br>
               
                 <b>Name :</b> ${d.studentName}
            </div>

        </div>

        <br><br><br><br>

        <div style="text-align:center;">

            <b>COUNTERSIGNED</b>

            <br><br><br>

            _________________________

            <br><br>

            <b>(Signature of Parent)</b>

            <br><br>

            <b>Name :</b> ${d.parentName}

            <br>

            <b>Rank :</b> ${d.rank}

        </div>

    </div>
    `;
}

function generatePDF() {

    const d = getData();

    const doc = new jsPDF("p", "mm", "a4");

    let y = 25;

    doc.rect(10, 10, 190, 277);

    doc.setFont("times", "bold");
    doc.setFontSize(18);

    doc.text(
        "UNDERTAKING",
        105,
        y,
        { align: "center" }
    );

    y += 25;

    doc.setFontSize(13);

    function paragraph(text, x, width) {

        const lines = doc.splitTextToSize(text, width);

        doc.text(lines, x, y);

        y += lines.length * 8;
    }

    // Point 1

    doc.setFont("times", "bold");
    doc.text("1.", 20, y);

    doc.setFont("times", "normal");

    paragraph(
        `I ${d.studentName}, son/daughter of Army No ${d.armyNo}, Rank ${d.rank}, Name ${d.parentName} have read and understood all the provisions contained in the AIT Rule Book and AIT Honour Code.`,
        30,
        160
    );

    y += 5;

    // Point 2

    doc.setFont("times", "bold");
    doc.text("2.", 20, y);

    doc.setFont("times", "normal");

    paragraph(
        "I will follow the rules and codes in letter and spirit.",
        30,
        160
    );

    y += 35;

    // Place

    doc.setFont("times", "bold");
    doc.text(`Place : ${d.place}`, 20, y);

    // Student Signature

    doc.line(120, y - 5, 180, y - 5);

    doc.text(
        `Name : ${d.studentName}`,
        150,
        y + 8,
        { align: "center" }
    );

    y += 15;

    // Date

    doc.text(`Date : ${d.date}`, 20, y);

    y += 45;

    // COUNTERSIGNED

    doc.setFontSize(14);

    doc.text(
        "COUNTERSIGNED",
        105,
        y,
        { align: "center" }
    );

    y += 30;

    // Parent Signature Line

    doc.line(70, y, 140, y);

    y += 10;

    doc.setFontSize(12);

    doc.text(
        "(Signature of Parent)",
        105,
        y,
        { align: "center" }
    );

    y += 12;

    doc.text(
        `Name : ${d.parentName}`,
        105,
        y,
        { align: "center" }
    );

    y += 10;

    doc.text(
        `Rank : ${d.rank}`,
        105,
        y,
        { align: "center" }
    );

    doc.save("AIT_Undertaking.pdf");
}