
const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:4000/api/users')
        .then(function(response){
            console.log(response)
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = async (req, res) => {
    try {
  
      // Perform the GET request using async/await
      const response = await axios.get('http://localhost:4000/api/users', {
        params: { id: req.query.id }
      });
  
      // Extract user data from the response
      const userData = response.data;
  
      // Render the "update_user" view with the user data
      res.render("update_user", { user: userData });
    } catch (err) {
      // Handle errors here
      res.send(err);
    }
  };
  