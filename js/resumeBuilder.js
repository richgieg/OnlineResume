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

var work = {
    "jobs": [
        {
            "employer": "Schurman Retail Group",
            "title": "Systems Analyst",
            "location": "Fairfield, CA",
            "dates": "2015",
            "description": "Systems Analyst description."
        },
        {
            "employer": "Schurman Retail Group",
            "title": "Systems Analyst",
            "location": "Fairfield, CA",
            "dates": "2015",
            "description": "Systems Analyst description."
        },
        {
            "employer": "Schurman Retail Group",
            "title": "Systems Analyst",
            "location": "Fairfield, CA",
            "dates": "2015",
            "description": "Systems Analyst description."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Project #1",
            "dates": "2015",
            "description": "Project description.",
            "images": [
                "images/project1a.jpg",
                "images/project1b.jpg",
                "images/project1c.jpg"
            ]
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Nova Southeastern University",
            "location": "Fort Lauderdale, FL",
            "degree": "Masters",
            "majors": ["CS"],
            "dates": "2013",
            "url": "http://example.com"
        },
        {
            "name": "Eckerd College",
            "location": "Saint Petersburg, FL",
            "degree": "BA",
            "majors": ["CS"],
            "dates": "2003",
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2014",
            "url": "http://www.udacity.com/course/ud804"
        }
    ]
};

// if (bio.skills.length > 0) {
//     $("#header").append(HTMLskillsStart);

//     var
// }

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer =
        HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
}