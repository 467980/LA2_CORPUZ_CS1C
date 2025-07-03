let s1FirstName = "Vincent";
let s1MiddleName = ""; //di ko alam initial
let s1LastName = "Echalar";
let s1Birthdate = "August 15, 2006";
let s1Birthplace = "Santa Lucia Hospital, Ilocos Sur, Philippines 2737";
let s1Address = "Barangay Poblacion Sur, Santiago, Ilocos Sur, Philippines 2707";
let s1CourseYear = "Bachelor of Science in Computer Science"; // BSCS
let s1DreamJob = "Game Developer";

let s2FirstName = "Jacob";
let s2MiddleName = ""; // diko alam initial
let s2LastName = "Polides";
let s2Birthdate = "November 22, 2006";
let s2Birthplace = "Bangued, Abra, Philippines 2800"; // ✅ Poblacion removed!
let s2Address = "Barangay San Nicolas, Candon City, Ilocos Sur, Philippines 2710";
let s2CourseYear = "Bachelor of Science in Computer Science"; // BSCS
let s2DreamJob = "Software Engineer";


let s1FullName = `${s1FirstName} ${s1MiddleName} ${s1LastName}`.trim();
let s1FullNameUpper = s1FullName.toUpperCase();
let s1FullNameLower = s1FullName.toLowerCase();

let s1Message = `[${s1FullNameUpper}] was born [${s1Birthdate}] at [${s1Birthplace}], and currently living at [${s1Address}]. [${s1FullNameLower}] is taking up [${s1CourseYear}] and dreams to be [${s1DreamJob}] after graduation.`;

console.log(s1Message);


let s2FullName = `${s2FirstName} ${s2MiddleName} ${s2LastName}`.trim();
let s2FullNameUpper = s2FullName.toUpperCase();
let s2FullNameLower = s2FullName.toLowerCase();

let s2Message = `[${s2FullNameUpper}] was born [${s2Birthdate}] at [${s2Birthplace}], and currently living at [${s2Address}]. [${s2FullNameLower}] is taking up [${s2CourseYear}] and dreams to be [${s2DreamJob}] after graduation.`;

console.log(s2Message);
