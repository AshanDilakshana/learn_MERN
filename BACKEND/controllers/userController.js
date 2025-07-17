import User from '../model/user.js';
import bcrypt from 'bcrypt';


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
}


function logingUser(req, res) {
    User.findOne({ email: req.body.email }) 
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
                    res.json({
                        message: 'Login successful',
                        
                    })
                }else{
                    res.json({
                        message: 'Invalid password'
                    })
                }
             }
        })
    .catch(() => {
        res.json({
            message: 'Error logging in user'
        });
    })

};


export { createUser , logingUser };