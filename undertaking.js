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
            hereby solemnly affirm and declare as under :-
        </p>

        <p>
            <b>a.</b>
          I have read and understood all the provisions contained in the AIT Rule
Book and AIT Honour Code.
        </p>
         <p>
            <b>b.</b>
         I understand that minimum 75% physical attendance for theory
classes and 100% physical attendance for practical is mandatory every
semester in order to be eligible to appear for University Examinations.
        </p>
         <p>
            <b>c.</b>
       I acknowledge that no representations or justifications will be
entertained for major offenses, including consumption of alcohol/drug,
careless driving, and involvement in accidents.
        </p>
         <p>
            <b>d.</b>
         I acknowledge that, I will refrain from any form of ragging activity
throughout my tenure at AIT. I will not involve in drinking alcohol, smoking and
will not be involved in any types of violence in campus.
        </p>
         <p>
            <b>e.</b>
           I assure that, any changes in my personal ERP profile will get updated
immediately by me through my Counsellor.
        </p>
   <p>
            <b>f.</b>
           I will adhere to the rules and codes of conduct in letter and spirit.       </p>

        <br><br><br>
   <p>
            <b>2.</b>
          Failing which, AIT administration has full right to relegate/rusticate me from the
College. I will not represent against the decision.
        </p>

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
