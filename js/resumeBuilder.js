/*var bio = {
    'name': "William Smith",
    'role': "ServiceNow admin/dev",
    'contacts': {
        'mobile': "614.282.0917",
        'email': "william.smith3@gmail.com",
        'github': "https://github.com/wilsmi",
        'twitter': "@willsmith25",
        'location': "Columbus, Ohio",
    },
    'welcomeMessage': "I'm currently working as an IT Consultant in Columbus, Ohio, USA.  Thanks for stopping by",
    'skills': ['HTML5/CSS3', 'JavaScript Ninja', 'Python'],
    'biopic': "images/fry.jpg"
};*/

var work = {
    "jobs": [
        {
            employer: "Sogeti USA",
            title: "Consultant",
            location: "Columbus, Ohio",
            dates: "2011 - Present",
            description: "Sogeti Consultant in the Cloud Practice with more than 7 years of experience in service level management leveraging the complete range of ITIL practices. He is a certified ServiceNow Systems Administrator and ITIL Foundations holder that has led teams in areas of Incident, Problem, Change, and Release management utilizing the ServiceNow platform. He has developed enterprise-level solutions with the ServiceNow platform to solve complex business problems by integrating/upgrading processes and procedures."
},
],
};


var education = {
    schools: [{
        name: "Franklin University",
        location: "Columbus, Ohio",
        degree: "B.S. Information Technology",
        majors: ['Information Tech'],
        dates: 2016 - 03 - 15,
        url: "www.franklin.edu",
     }],
    onlineCourses: [{
        school: "Udacity",
        title: "JavaScript",
        completed: "February 2017",
        url: "https://classroom.udacity.com/courses/ud804"
     }],
    display: function () {}
};


// JavaScript variables to build the HTML content
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWork = HTMLworkLocation.replace("%data", work.jobs[0].title);
var formattedEducation = HTMLheaderRole.replace("%data%", bio.role);
var formattedSkills =

    // jQuery to append the above items to the page
    $("#header").append(formattedName);
$('#header').append(formattedRole);
$('#main').append(formattedSkills);
$('#main').append(formattedWork);
$('#main').append(formattedEducation);





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