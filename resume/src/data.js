var educationSummary = atob(require('./content/education-summary.txt').split("base64,")[1])
var educationBeSummary = atob(require('./content/education-be-summary.txt').split("base64,")[1])
var workAmagi = atob(require('./content/work-amagi.txt').split("base64,")[1])
var workCommvault = atob(require('./content/work-commvault.txt').split("base64,")[1])
var workccbd = atob(require('./content/work-ccbd.txt').split("base64,")[1])
var workrecai = atob(require('./content/work-recai.txt').split("base64,")[1])
var workprojects = atob(require('./content/work-projects.txt').split("base64,")[1])
var work = atob(require('./content/work.txt').split("base64,")[1])
var personal = atob(require('./content/personal.txt').split("base64,")[1])
var researchAmagi = atob(require('./content/research-amagi.txt').split("base64,")[1])
var researchccbd = atob(require('./content/research-ccbd.txt').split("base64,")[1])
var researchpesit = atob(require('./content/research-pesit.txt').split("base64,")[1])
var research = atob(require('./content/research.txt').split("base64,")[1])


var data;
data = {
  "Landing": {
    
  },
  "Content": {
    "children": {
      "Education": {
        "children": {
          "B.E.": {
            info: educationBeSummary
          }
        },
        "children_order": [
          "B.E.",
        ],
        "info": educationSummary
      },
      "Personal": {
        "children": {

        },
        "children_order": [

        ],
        "info": personal
      },
      "Work": {
        "children": {
          "Amagi Media Labs Pvt Ltd" : {
            "info": workAmagi
          },
		   "Commvault Systems" : {
            "info": workCommvault
          },
		   "Cloud Computing and Big Data Centre & EMC Corporation" : {
            "info": workccbd
          },
		   "RecAI Corp" : {
            "info": workrecai
          },
		   "Other Projects" : {
            "info": workprojects
          },
        },
        "children_order": [
          "Amagi Media Labs Pvt Ltd",
          "Commvault Systems",
          "Cloud Computing and Big Data Centre & EMC Corporation",
          "RecAI Corp",
          "Other Projects",
        ],
        "info": work
      },
      "Research": {
        "children": {
          "Amagi Media Labs Pvt Ltd" : {
            "info": researchAmagi
          },
		   "Cloud Computing and Big Data Centre & EMC Corporation" : {
            "info": researchccbd
          },
		   "Look Aside Sorting" : {
            "info": researchpesit
          },
		   
        },
        "children_order": [
          "Amagi Media Labs Pvt Ltd",
          "Cloud Computing and Big Data Centre & EMC Corporation",
          "Look Aside Sorting",
        ],
        "info": research
      }
    },
    "children_order": [
      "Education",
      "Personal",
      "Research",
      "Work",
    ],
  }
}

export default data;
