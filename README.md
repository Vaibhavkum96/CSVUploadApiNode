# CSVUploadApiNode
This is one of the Backend Tasks assigned to me as the part of the backend interview process. This is written in NodeJs, Feel Free to take a look.

#Important Points 
1) This is a full functional and working API and this is only been tested for .csv Files , I have not tested my code for (.xlms or any other file), Please be sure that you
 are uploading only .csv file while testing.

2) Validation and Data Model selected is for this particular task  is of a User. In our CSV we can provide the details of the user (Name, Age And Email) Respectively, If the 
validations and data is correct then API will perform its tasks and will save the data to the DB. Here are the validations which I have set: 

* None of the fields can be empty , user needs to put any value for every field. 
* Age Parameter should always be a non - negative Number. 
* Email should be given in the Correct Format.
These are the validations our API is checking. 

3) The files have been tested with the help of PostMan API testing tool, You have to pass the correct syntax while testing this. Here is the procedure to follow while testing 
if You do not follow this steps then the API is bound to fail. 

* Open the Postman API tool and set up a Post Request with the proper Router provided (link) : "http://localhost:8800/api/uploadCSV" 
* Go to the Body Section and select "form-data" , After selecting, go the right hand side of the "Key" field and select the file option from the Dropdown. 
* In the key section, Write 'file' and in the value section Upload the desired .csv file. (If you do not write 'file' in the key section the API will breakdown and throw the err)
* If you follow the above steps , then you are good to go, API will work as expected in that scenario. 


4) I have tested it for two .csv files which are present in the public/uploads directory in the codebase. The file which fails the validation is named as 'test.csv' and
the file which passes the validation is named as 'testPositives.csv'. I have attached the two csv's for reference which proves the test scenarios for points 2 and 3
respectively. 

5) Third Party Package used: 
    "body-parser": "^1.20.2",
    "csvtojson": "^2.0.10",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.6.3",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^3.0.1"
This concludes all the important points. I hope this read me file helps you out while playing with this API. I have the working response and screenshots as well, let me know
if you want to see that included in this file. 

TechStack Used: NodeJS, ExpressJS

Thanks!
