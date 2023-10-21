const User = require('../models/User');
const csv = require('csvtojson');

const importUser = async (req, res) => {
  try {
    const userData = [];
    const validationErrors = [];

    const response = await csv().fromFile(req.file.path);

    //If there are more than 500 records then we are not going to take it 
    if(response.length > 500){
        return res.status(422).json({ success: false, errors: "Size of your .csv file is too Big!" });
    }

    for (let i = 0; i < response.length; i++) {
      const name = response[i].Name;
      const age = response[i].Age;
      const email = response[i].Email;

      // Add age and email validation logic here
      if (!name || !age || !email) {
        validationErrors.push({ row: response[i], error: 'Missing required fields' });
      } else {
        if (isNaN(age) || age < 0) {
          validationErrors.push({ row: response[i], error: 'Invalid age' });
        }

        
        // Example: Check if 'email' is a valid email address
        const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
        if (!email.match(emailRegex)) {
          validationErrors.push({ row: response[i], error: 'Invalid email' });
        }
      }

      userData.push({
        name: name,
        age: age,
        email: email,
      });
    }

    if (validationErrors.length > 0) {
      return res.status(422).json({ success: false, errors: validationErrors });
    }

    await User.insertMany(userData);

    res.status(200).json({ success: true, msg: 'Data uploaded successfully' });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
};

module.exports = {
  importUser
};
