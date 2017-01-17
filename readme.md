# Managing this

### Setup of Environment

1. Install Node
2. Try npm on cmd if not there install npm separately
3. Run ```npm start``` from resume directory
4. If react not found ```npm install -g react``` _just google_ and then run
5. If markdown is not being rendered for everything ```npm install markdown```

### Data

1. Add any data to data.js follow existing format for children and info etc. info is a string which can be imported from a file if the string is huge. Follow other files being imported from content folder. Note if inline markdown is used in data.js ```\n``` needs to be used

### Build and production

1. Go to resume folder run ```npm run build```
2. go to ppallal.gitgub.io folder ```rm -r static```
3. ```mv resume/build/* .```
4. git comit and push to master.
