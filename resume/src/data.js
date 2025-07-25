import educationSummaryText from './content/education-summary.txt?raw'
import educationBeSummaryText from './content/education-be-summary.txt?raw'
import workAmagiText from './content/work-amagi.txt?raw'
import workCommvaultText from './content/work-commvault.txt?raw'
import workccbdText from './content/work-ccbd.txt?raw'
import workrecaiText from './content/work-recai.txt?raw'
import workprojectsText from './content/work-projects.txt?raw'
import workText from './content/work.txt?raw'
import personalText from './content/personal.txt?raw'
import researchAmagiText from './content/research-amagi.txt?raw'
import researchccbdText from './content/research-ccbd.txt?raw'
import researchpesitText from './content/research-pesit.txt?raw'
import researchText from './content/research.txt?raw'

var educationSummary = educationSummaryText
var educationBeSummary = educationBeSummaryText
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
