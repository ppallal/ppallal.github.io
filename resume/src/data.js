import educationSummaryText from './content/education-summary.md?raw'
import workAmagiText from './content/work-amagi.md?raw'
import workCommvaultText from './content/work-commvault.md?raw'
import workccbdText from './content/work-ccbd.md?raw'
import workrecaiText from './content/work-recai.md?raw'
import workprojectsText from './content/work-projects.md?raw'
import workText from './content/work.md?raw'
import personalText from './content/personal.md?raw'
import researchAmagiText from './content/research-amagi.md?raw'
import researchccbdText from './content/research-ccbd.md?raw'
import researchpesitText from './content/research-pesit.md?raw'
import researchText from './content/research.md?raw'

var educationSummary = educationSummaryText
var workAmagi = workAmagiText
var workCommvault = workCommvaultText
var workccbd = workccbdText
var workrecai = workrecaiText
var workprojects = workprojectsText
var work = workText
var personal = personalText
var researchAmagi = researchAmagiText
var researchccbd = researchccbdText
var researchpesit = researchpesitText
var research = researchText


var data;
data = {
  "Landing": {
    
  },
  "Content": {
    "children": {
      "Education": {
        "info": educationSummary
      },
      "Work": {
        "children": {
          "Amagi Media Labs Pvt Ltd" : {
            "info": workAmagi
          },
          "Others": {
            "children": {
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
              "Commvault Systems",
              "Cloud Computing and Big Data Centre & EMC Corporation",
              "RecAI Corp",
              "Other Projects",
            ],
            "info": workprojects
          },
        },
        "children_order": [
          "Amagi Media Labs Pvt Ltd",
          "Others",
        ],
        "info": work
      },
    },
    "children_order": [
      "Education",
      "Work",
    ],
  }
}

export default data;
