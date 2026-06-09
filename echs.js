const { jsPDF } = window.jspdf;

function getData() {

    return {

        dependentName:
        document.getElementById("dependentName").value,

        armyNo:
        document.getElementById("armyNo").value,

        rank:
        document.getElementById("rank").value,

        exServicemanName:
        document.getElementById("exServicemanName").value,

        echsCardNo:
        document.getElementById("echsCardNo").value,

        dob:
        document.getElementById("dob").value,

        aadhar:
        document.getElementById("aadhar").value,

        pan:
        document.getElementById("pan").value,

        assessmentYear:
        document.getElementById("assessmentYear").value,

        address:
        document.getElementById("address").value,

        place:
        document.getElementById("place").value,

        date:
        document.getElementById("date").value

    };

}

function generatePreview() {

    const d = getData();

    document.getElementById("preview").innerHTML = `

    <div class="document-preview">

        <div class="doc-title">
            ECHS SELF ATTESTED PROFORMA
        </div>

        <div class="doc-subtitle">
            FOR DEPENDENT SON / DAUGHTER ABOVE 18 YEARS OF AGE
        </div>

        <div class="photo-box">
            PHOTO
        </div>

        <p>
            <b>1.</b>
            It is certified that Mr/Mrs/Ms
            <b>${d.dependentName}</b>
            whose Photograph is appended is a bonafide dependent son/daughter of
            No <b>${d.armyNo}</b>,
            Rank <b>${d.rank}</b>,
            Name <b>${d.exServicemanName}</b>
            (Retired with ECHS Card No
            <b>${d.echsCardNo}</b>).
        </p>

        <p>
            <b>2. Particulars of Dependent Mr/Mrs/Ms ${d.dependentName}</b>
        </p>

        <p>
            a. Date of Birth :
            <b>${d.dob}</b>
        </p>

        <p>
            b. Aadhar Number :
            <b>${d.aadhar}</b>
        </p>

        <p>
            c. PAN Number :
            <b>${d.pan}</b>
        </p>

        <p>
            d. Assessment Year (26AS) :
            <b>${d.assessmentYear}</b>
        </p>

        <p>
            e. Current Address :
            <br>
            <b>${d.address}</b>
        </p>

        <p>
            <b>3.</b>
            It is also certified that Mr/Mrs/Ms
            <b>${d.dependentName}</b>
            is not employed and having non income /
            income less than Rs 9,000 pm plus DA.
        </p>

        <p>
            <b>4.</b>
            It is also certified that Mr/Mrs/Ms
            <b>${d.dependentName}</b>
            is not married.
        </p>

        <p>
            <b>Note :</b>
        </p>

        <p>
            (a) The self attested proforma will be produced whenever required
            in ECHS Polyclinic/empanelled hospital by the beneficiary.
            The validity of the same will be ONE Year from the date of signature.
        </p>

        <p>
            (b) In case of any change in dependency,
            the primary card holder is responsible to cancel the membership
            immediately on occurrence.
        </p>

        <div class="signature-row">

            <div>
                _____________________
                <br><br>
                <b>(Signature of Dependent)</b>
                <br><br>
                Date : ${d.date}
            </div>

            <div>
                _____________________
                <br><br>
                <b>(Signature of Ex-servicemen / Primary Member)</b>
                <br><br>
                Date : ${d.date}
            </div>

        </div>

        <div class="center-section">

            <b>COUNTERSIGNED WITH STAMP</b>

            <br><br><br>

            Place : <b>${d.place}</b>

            <br><br>

            Date : <b>${d.date}</b>

            <br><br><br><br>

            ___________________________

            <br><br>

            <b>(Signature OIC Parent Polyclinic)</b>

        </div>

    </div>

    `;

}

function generatePDF() {

    const d = getData();

    const doc = new jsPDF("p", "mm", "a4");

    let y = 20;

   

    doc.setFont("times", "bold");
    doc.setFontSize(12);

    doc.text(
        "ECHS SELF ATTESTED PROFORMA",
        105,
        y,
        { align: "center" }
    );

    y += 8;

    doc.text(
        "FOR DEPENDENT SON / DAUGHTER ABOVE 18 YEARS OF AGE",
        105,
        y,
        { align: "center" }
    );

    doc.rect(155, 30, 30, 40);

    doc.setFontSize(11);

    doc.text(
        "PHOTO",
        170,
        52,
        { align: "center" }
    );

    y += 20;

    doc.setFont("times", "normal");
    doc.setFontSize(12);

    function paragraph(text, x, width) {

        const lines =
        doc.splitTextToSize(text, width);

        doc.text(lines, x, y);

        y += lines.length * 7;

    }

    paragraph(
        `1. It is certified that Mr/Mrs/Ms ${d.dependentName} whose Photograph is appended is a bonafide dependent son/daughter of No ${d.armyNo}, Rank ${d.rank}, Name ${d.exServicemanName} (Retired with ECHS Card No ${d.echsCardNo}).`,
        20,
        125
    );

    y += 4;

    doc.setFont("times", "bold");

    doc.text(
        `2. Particulars of Dependent Mr/Mrs/Ms ${d.dependentName}`,
        20,
        y
    );

    y += 10;

    doc.setFont("times", "normal");

    doc.text(`a. Date of Birth : ${d.dob}`, 25, y);
    y += 8;

    doc.text(`b. Aadhar No : ${d.aadhar}`, 25, y);
    y += 8;

    doc.text(`c. PAN Number : ${d.pan}`, 25, y);
    y += 8;

    doc.text(`d. Assessment Year : ${d.assessmentYear}`, 25, y);
    y += 8;

    doc.text(`e. Current Address :`, 25, y);
    y += 8;

    const addressLines =
    doc.splitTextToSize(
        d.address,
        130
    );

    doc.text(
        addressLines,
        35,
        y
    );

    y += addressLines.length * 7 + 10;

    paragraph(
        `3. It is also certified that Mr/Mrs/Ms ${d.dependentName} is not employed and having non income / income less than Rs 9,000 pm plus DA.`,
        20,
        170
    );

    paragraph(
        `4. It is also certified that Mr/Mrs/Ms ${d.dependentName} is not married.`,
        20,
        170
    );

    y += 5;

    doc.setFont("times", "bold");
    doc.text("Note :", 20, y);

    y += 8;

    doc.setFont("times", "normal");

    paragraph(
        "(a) The self attested proforma will be produced whenever required in ECHS Polyclinic/empanelled hospital by the beneficiary. The validity of the same will be ONE Year from the date of signature.",
        25,
        160
    );

    paragraph(
        "(b) In case of any change in dependency, the primary card holder is responsible to cancel,the membership of dependent immediately on occurrence by blocking the card on the online portal and intimation to his/her parent/nearest polyclinic. Any false declaration/misuse of benefitswill entail suspension /cancellation of ECHS membership of all members",
        25,
        160
    );

    y += 5;

    doc.line(20, y, 70, y);
    doc.line(120, y, 180, y);

    y += 4;

    doc.text(
        "(Signature of Dependent)",
        20,
        y
    );

    doc.text(
        "(Signature of Ex-servicemen / Primary Member)",
        120,
        y
    );

    y += 7;

    doc.text(
        `Date : ${d.date}`,
        20,
        y
    );

    doc.text(
        `Date : ${d.date}`,
        120,
        y
    );

    y += 10;

    doc.setFont("times", "bold");

    doc.text(
        "COUNTERSIGNED WITH STAMP",
        105,
        y,
        { align: "center" }
    );

    y += 15;

doc.setFont("times", "normal");

doc.text(
    `Place : ${d.place}`,
    20,
    y
);

y += 12;

// Date on left

doc.text(
    `Date : ${d.date}`,
    20,
    y
);

// Signature line on same level

doc.line(
    110,
    y - 2,
    180,
    y - 2
);

doc.text(
    "(Signature OIC Parent Polyclinic)",
    145,
    y + 8,
    { align: "center" }
);

    doc.save("ECHS_Self_Attested_Proforma.pdf");

}