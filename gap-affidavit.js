const { jsPDF } = window.jspdf;

function getData() {

return {

name:
document.getElementById("name").value,

parent:
document.getElementById("parent").value,

passingYear:
document.getElementById("passingYear").value,

passingDate:
document.getElementById("passingDate").value,

gapFrom:
document.getElementById("gapFrom").value,

gapTo:
document.getElementById("gapTo").value,

date:
document.getElementById("date").value,

merit:
document.getElementById("merit").value

};

}

function generatePreview(){

const d = getData();

document.getElementById("preview").innerHTML = `

<div class="affidavit">

<div class="title">
A F F I D A V I T
</div>

<p>
I,
<b>${d.name}</b>,
S/o/D/o
<b>${d.parent}</b>,
do hereby solemnly affirm and state on oath as under:-
</p>

<p>
<b>i)</b>
That I, the deponent, have passed 10 + 2 / HSC Examination
in the year
<b>${d.passingYear}</b>.
</p>

<p>
<b>ii)</b>
That after passing the aforesaid examination in that year
I did not join any School / College / Institution from
<b>${d.passingDate}</b>
(the date of passing above examination) till date.
</p>

<p>
<b>iii)</b>
That the Session
<b>${d.gapFrom}</b>
to
<b>${d.gapTo}</b>
is the gap year of the deponent.
</p>

<p>
<b>Gap Period / Duration :</b>
<b>${d.gapFrom}</b>
to
<b>${d.gapTo}</b>
</p>

<p>
<b>2.</b>
I,
<b>${d.name}</b>
do hereby solemnly affirm that the contents of this affidavit from Paras 1(i) to 1(iii) above are true and correct to the best of my personal knowledge and belief. I do understand that if the above affirmation is proved to be false, my admission in this Institute would be cancelled for which I solely will be responsible.
</p>

<p>
<i>* Mention the gap period/duration.</i>
</p>

<div class="signature-row">

<div>
_________________________<br><br>
<b>Signature of Parent</b>
</div>

<div>
_________________________<br><br>
<b>Signature of Candidate</b>
</div>

</div>

<br><br>

<b>Dated :</b> ${d.date}

<span style="float:right">
<b>AIT Merit No :</b> ${d.merit}
</span>

</div>

`;

}

function generatePDF(){

const d = getData();

const doc = new jsPDF("p","mm","a4");
doc.setLineWidth(0.2);

doc.rect(
10,
10,
190,
277
);

let y = 25;

function para(text,x,width){

const lines =
doc.splitTextToSize(text,width);

doc.text(lines,x,y);

y += lines.length * 8.5;

}

doc.setFont("times","bold");
doc.setFontSize(18);

doc.text(
"A F F I D A V I T",
105,
y,
{align:"center"}
);

y += 25;

doc.setFont("times","normal");
doc.setFontSize(13);

para(
`I, ${d.name} (Name of Candidate), S/o/D/o ${d.parent}, do hereby solemnly affirm and state on oath as under:-`,
20,
170
);

y += 5;

doc.setFont("times","bold");
doc.text("i)",25,y);

doc.setFont("times","normal");

para(
`That I, the deponent, have passed 10 + 2 / HSC Examination in the year ${d.passingYear}.`,
35,
155
);

doc.setFont("times","bold");
doc.text("ii)",25,y);

doc.setFont("times","normal");

para(
`That after passing the aforesaid examination in that year I did not join any School / College / Institution from ${d.passingDate} (the date of passing above examination) till date.`,
35,
155
);

doc.setFont("times","bold");
doc.text("iii)",25,y);

doc.setFont("times","normal");

para(
`That the Session ${d.gapFrom} to ${d.gapTo} is the gap year of the deponent.`,
35,
155
);

doc.setFont("times","bold");

doc.text(
"Gap Period / Duration :",
35,
y
);

doc.text(
`${d.gapFrom} to ${d.gapTo}`,
95,
y
);

y += 15;

doc.setFont("times","bold");
doc.text("2.",20,y);

doc.setFont("times","normal");

para(
`I, ${d.name} (Name of candidate) do hereby solemnly affirm that the contents of this affidavit from Paras 1(i) to 1(iii) above are true and correct to the best of my personal knowledge and belief. I do understand that if the above affirmation is proved to be false, my admission in this Institute would be cancelled for which I solely will be responsible.`,
30,
160
);

y += 10;

doc.setFont("times","italic");

doc.text(
"* Mention the gap period/duration.",
20,
y
);

y += 50;

doc.setFont("times","normal");

doc.line(20,y,70,y);
doc.line(130,y,180,y);

y += 8;

doc.setFont("times","bold");

doc.text(
"Signature of Parent",
20,
y
);

doc.text(
"Signature of Candidate",
130,
y
);

y += 20;

doc.text(
`Dated : ${d.date}`,
20,
y
);

doc.text(
`AIT Merit No : ${d.merit}`,
130,
y
);

doc.save("AIT_Gap_Affidavit.pdf");

}