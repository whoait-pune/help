// ==========================
// MODAL ELEMENTS
// ==========================

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");


// ==========================
// CARD DATA
// ==========================

const cardData = {

reporting: {
title: "📅 Reporting Schedule",
content: `
<ul>
<li>Computer Engineering — 06 Jul 2025</li>
<li>Information Technology — 07 Jul 2025</li>
<li>Electronics & Telecommunication — 08 Jul 2025</li>
<li>Mechanical Engineering — 10 Jul 2025 (Morning)</li>
<li>Automation & Robotics — 10 Jul 2025 (Afternoon)</li>
<li>Reporting Slot 1 — 09:30 AM to 12:00 PM</li>
<li>Reporting Slot 2 — 01:30 PM to 04:00 PM</li>
</ul>
`
},
council: {
title: "📅 Counseling Schedule",
content: `
<ul>
<li>CSE - 15 JUN 2026</li>
<li>IT - 16 JUN 2026</li>
<li>E&TC - 17 JUN 2026</li>
<li>MECH - 18 JUN 2026</li>
<li>ARE - 18 JUN 2026</li>
<li>Vacant seat filling - 19 JUN 2026</li>
</ul>
`
},

documents: {
title: "📄 Documents Required",
content: `
<ul>
<li>JEE Main Hall Ticket</li>
<li>JEE Main Score Card</li>
<li>Class 12 Marksheet</li>
<li>Class 12 Passing Certificate</li>
<li>Class 10 Certificate</li>
<li>Transfer Certificate (Original)</li>
<li>Migration Certificate (If Applicable)</li>
<li>Character Certificate</li>
<li>Domicile Certificate (J&K Students)</li>
</ul>
`
},

serving: {
title: "🪖 Serving Personnel Documents",
content: `
<ul>
<li>Service ID Card</li>
<li>Dependent Card</li>
<li>Aadhaar Card</li>
<li>Kindred Roll / Part II Order</li>
<li>Record of Service</li>
<li>Gallantry Award Documents (If Applicable)</li>
<li>Disability Certificate (If Applicable)</li>
<li>Prospectus Certificate I,II,III (If Applicable)</li>
</ul>
`
},

retired: {
title: "🎖️ Retired Personnel Documents",
content: `
<ul>
<li>Retired ID Card</li>
<li>ECHS Card</li>
<li>Aadhaar Card</li>
<li>PPO</li>
<li>Discharge Book</li>
<li>Prospectus Certificate I,II,III (If Applicable)</li>
<li>Disability Certificate (If Applicable)</li>
<li>Battle Casualty Documents (If Applicable)</li>
</ul>
`
},

photos: {
title: "🖼️ Photographs Required",
content: `
<ul>
<li>10 Passport Size Photos</li>
<li>White Background</li>
<li>Name Written Behind Photos</li>
<li>2 Stamp Size Photos</li>
</ul>
`
},

affidavits: {
title: "📑 Affidavits Required",
content: `
<ul>
<li>Excursion Affidavit</li>
<li>Anti-Ragging Affidavit</li>
<li>Gap Affidavit (If Applicable)</li>
<li>₹100 Stamp Paper Required</li>
<li>Notarized Copies Mandatory</li>
</ul>
`
},

hostel: {
title: "🏠 Hostel Rules",
content: `
<ul>
<li>Hostel Mandatory For First Year</li>
<li>No Outliving Allowed For FE</li>
<li>Report With Complete Luggage</li>
<li>Room Allocation After Verification Based On Merit</li>
<li>From 2nd Year Room Will Be Alotted On Basis Of 0.7*CGPA + 0.3*Attendance</li>
</ul>
`
},

laptop: {
title: "💻 Laptop Requirement",
content: `
<ul>
<li>Personal Laptop Mandatory</li>
<li>Required For Assignments</li>
<li>Required For Coding Labs</li>
<li>Moodle LMS Used</li>
<li>Online Quiz Support Needed</li>
</ul>
`
},

wifi: {
title: "🌐 Internet Facilities",
content: `
<ul>
<li>WiFi Available In Hostel</li>
<li>WiFi Available For Academic Work</li>
<li>Included In Hostel Fees</li>
<li>Campus Internet Access Available</li>
</ul>
`
},

medical: {
title: "🩺 Medical Requirements",
content: `
<ul>
<li>Medical Fitness Certificate(can be arranged later)</li>
<li>Dependent Card</li>
<li>ECHS Card (If Applicable)</li>
<li>Medical History Details (If Any)</li>
<li>Prescription Records (If Any)</li>
</ul>
`
},

facilities: {
title: "🏥 Medical Facilities",
content: `
<ul>
<li>24×7 Nursing Assistant</li>
<li>Ambulance Available</li>
<li>Military Hospital Kirkee Support</li>
<li>Lady Doctor Visits Weekly</li>
</ul>
`
},

ragging: {
title: "⚠️ Anti Ragging Policy",
content: `
<ul>
<li>Zero Tolerance Policy</li>
<li>Ragging Is Strictly Prohibited</li>
<li>Police Action Possible</li>
<li>Suspension Possible</li>
<li>Expulsion Possible</li>
<li>Anti-Ragging Undertaking Mandatory</li>
</ul>
`
},

attendance: {
title: "🎓 Attendance Rules",
content: `
<ul>
<li>75% Theory Attendance Mandatory</li>
<li>100% Practical Attendance Expected</li>
<li>Attendance Shared With Parents</li>
<li>Short Attendance May Restrict Exam Eligibility</li>
</ul>
`
},

leave: {
title: "🛫 Leave Rules",
content: `
<ul>
<li>Parent Approval Required</li>
<li>Email Permission Required</li>
<li>Fresh Permission For Every Leave</li>
<li>Unauthorized Leave Not Allowed (Fine) </li>
</ul>
`
},

railway: {
title: "🚆 Railway Concession",
content: `
<ul>
<li>Student Concession Available</li>
<li>Only Home Route Permitted</li>
<li>Misuse Leads To Cancellation</li>
</ul>
`
},

carry: {
title: "🎒 What To Carry",
content: `
<ul>
<li>2 Bedsheets</li>
<li>Blanket</li>
<li>Pillow & Covers</li>
<li>Bucket & Mug</li>
<li>Toiletries</li>
<li>Sports Shoes</li>
<li>Track Suit</li>
<li>Civilian Clothes</li>
<li>Daily Essentials</li>
<li>These items could be procured from Shopping Complex of AIT as
well as from nearby local vendors in Dighi also. </li>
</ul>
`
},

avoid: {
title: "🚫 Do Not Bring",
content: `
<ul>
<li>Heating Element</li>
<li>Electric Kettle</li>
<li>Hot Plate</li>
<li>Expensive Jewellery</li>
<li>Costly Valuables</li>
<li>Loud Music Systems</li>
</ul>
`
},

uniform: {
title: "👔 AIT Uniform",
content: `
<ul>
<li>2 Grey Trousers</li>
<li>2 Sky Blue Shirts</li>
<li>1 Navy Blue Coat</li>
<li>1 Boiler Suit</li>
<li>1 House T-Shirt</li>
<li>1 Tie</li>
<li>Note : A pair of black shoes and belt will be brought by the student. </li>
<li>Sikh students will wear
Maroon Turbans with the College Uniform and these will have to be brought
along by the Sikh students.</li>
</ul>
`
},

provide: {
title: "📦 What AIT Provides",
content: `
<ul>
<li>Hostel Room</li>
<li>Mattress</li>
<li>Curtains</li>
<li>Study Furniture</li>
<li>WiFi Facility</li>
<li>Mess Facility</li>
<li>An ATM of HDFC Bank is located on the AIT campus.</li>
</ul>
`
},

fees: {
title: "💰 Fee Structure Of 2025",
content: `
<ul>
<li>Academic Fee — ₹2,23,765</li>
<li>Hostel Fee — ₹1,09,100</li>
<li>One Time Charges — ₹38,200</li>
<li><strong>Total Fee — ₹3,71,065</strong></li>
<li>Academic fees covers : 
Tuition fees 1,86,320
(b) Development Fees 25,140
(c) Value added Courses (Soft Skill) 5,000
(d) Employability Training Fee 1,830
(e) University Fee$ 3,465
(f) Wi-Fi Fees Academic 1,880
(g) Group Personal Accident Polic 130</li>
<li>Hostle fees covers : 
 
(a) Hostel Fees 56,530
(b) Wi-Fi Fees for Hostel 2,000
(c) Barber Charges (for Boys other than Sikh
& Girls) 580
(d) Messing Charges 46,230
(e) Laundry Charges 3,760

</li>
</ul>
`
},

payment: {
title: "💳 Payment Method",
content: `
<ul>
<li>ERP Portal Payment Only</li>
<li>No Cash Accepted</li>
<li>No Cheque Accepted</li>
<li>Pay Within Deadline</li>
</ul>
`
},

refund: {
title: "🔄 Refund Rules",
content: `
<ul>
<li>Before Course Start — Almost Full Refund</li>
<li>₹1000 Deduction Applicable</li>
<li>After Course Start — CET Rules Apply</li>
<li>No Refund For Disciplinary Expulsion</li>
</ul>
`
},

guardian: {
title: "👨‍👩‍👦 Local Guardian",
content: `
<ul>
<li>Needed For Night Outs</li>
<li>Parent Authorization Mandatory</li>
<li>Address & Contact Required</li>
<li>Prior Permission Required</li>
</ul>
`
},

contacts: {
title: "📞 Important Contacts",
content: `
<ul>
<li>7249250183</li>
<li>7249250184</li>
<li>7249250185</li>
<li>admission@aitpune.edu.in</li>
<li>jd@aitpune.edu.in</li>
<li>studentsection@aitpune.edu.in</li>
<li>Anti Ragging Helpline: 1800-180-5522</li>
</ul>
`
}

};


// ==========================
// OPEN MODAL
// ==========================

const cards = document.querySelectorAll(".info-card");

cards.forEach(card => {

card.addEventListener("click", () => {

const key = card.dataset.card;

modalTitle.innerHTML = cardData[key].title;
modalBody.innerHTML = cardData[key].content;

modal.classList.add("active");

});

});


// ==========================
// CLOSE MODAL
// ==========================

closeModal.addEventListener("click", () => {
modal.classList.remove("active");
});

window.addEventListener("click", (e) => {

if (e.target === modal) {
modal.classList.remove("active");
}

});


// ==========================
// SEARCH FUNCTION
// ==========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

const value = searchInput.value.toLowerCase();

cards.forEach(card => {

const title = card.innerText.toLowerCase();

if (title.includes(value)) {
card.style.display = "block";
} else {
card.style.display = "none";
}

});

});


// ==========================
// NAVBAR SHADOW ON SCROLL
// ==========================

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if (window.scrollY > 50) {
navbar.style.boxShadow =
"0 10px 25px rgba(0,0,0,0.08)";
} else {
navbar.style.boxShadow = "none";
}

});