var educationSummary = atob(require('./content/education-summary.txt').split("base64,")[1])
var educationBeSummary = atob(require('./content/education-be-summary.txt').split("base64,")[1])
var workAmagi = atob(require('./content/work-amagi.txt').split("base64,")[1])
var work = atob(require('./content/work.txt').split("base64,")[1])
var personal = atob(require('./content/personal.txt').split("base64,")[1])


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
          }
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
        info: "TBD"
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
