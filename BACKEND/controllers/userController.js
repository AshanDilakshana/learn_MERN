import User from '../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


function createUser(req,res){
    const hashedPassword = bcrypt.hashSync(req.body.password, 10); // Hash the password with bcrypt

    const user = new User(
        {email : req.body.email,
        firstName : req.body.firstName,     
        lastName: req.body.lastName,
        password: hashedPassword}
    );

    user.save()
        .then(() => {
            res.json({
                message: 'User created successfully',
                
            });
        })
        .catch( () => {
            res.json({
                message: 'Error creating user',
                
            });
        });
};

// Function to log in a user    
function logingUser(req, res) {
    User.findOne({ email : req.body.email }) 
    .then(
        (user) => {
             if (user == null){
                res.json({
                    message: 'User not found'
                });
             }
             else{
                const isPasswordValid = bcrypt.compareSync(req.body.password, user.password); // Compare the hashed password
                if(isPasswordValid){

                    // Generate a JWT token
                    const token = jwt.sign({ 
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        role: user.role,
                        isEmailVerified: user.isEmailVerified,
                    },"JwtSecretKey00" //secret key for signing token
                )
                 res.status(200).json({
                    message: 'Login successful',
                    token: token, 
                  })
                }else{
                    res.status(403).json({
                        message: 'Invalid password'
                    })
                }
             }
        })
    .catch(() => {
        res.status(401).json({
            message: 'Error logging in user'
        });
    })

};



function IsAddmin(req){
    
    if(req.user == null){
        return false;
    }

    if(req.user == null){
        return false
    }

    return true;
}














export { createUser , logingUser , IsAddmin };