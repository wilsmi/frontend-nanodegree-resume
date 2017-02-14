//See this for help https://github.com/cherylcourt/resume/blob/gh-pages/js/resumeBuilder.js

// JavaScript variables to build the HTML content
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


// jQuery to append the above items to the page
$('#header').prepend(formattedRole);
$("#header").prepend(formattedName);
$('#header').append(formattedPic);
$('#header').append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);

    for (skill in bio.skills) {
        $('#skills').append(HTMLskills.replace('%data%', bio.skills[skill]));
    }
}

for (i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}



// WORK SECTION
(function displayWork() {
    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);

        var formattedDate = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        $('.work-entry:last').append(formattedDate);

        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('.work-entry:last').append(formattedDescription);
    }
})();



(function displayProjects() {
    if (projects.projects.length > 0) {
        for (i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
})();


//$('#main').append(formattedSkills);
//$('#main').append(formattedWork);
//$('#main').append(formattedEducation);

/*
if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data"),
        bio.skills[0];

    formattedSkill = HTMLskills.replace("%data"), bio.skills[1];

    formattedSkill = HTMLskills.replace("%data"), bio.skills[2];

    formattedSkill = HTMLskills.replace("%data"), bio.skills[3];

    $('#skills').append(formattedSkill);
}*/


var charEscape = function (_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};