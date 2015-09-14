var bio = {
    "name": "Richard Gieg",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "johndoe@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "SF Bay Area"
    },
    "welcomeMessage": "lorm ipsum dolor sit amet etc etc etc.",
    "skills": [
        "awesomeness", "delivering things", "cryogenic sleep", "saving the world"
    ],
    "bioPic": "images/fry.jpg"
};

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var work = {};
work.position = "Course Developer";
work.employer = "Udacity";
work.years = 0.3;

var education = {};
education["name"] = "Nova Southeastern University";
education["years"] = "2005-2013";
education["city"] = "Fort Lauderdale, FL, US";

$("#main").append(work["position"]);
$("#main").append(education.name);