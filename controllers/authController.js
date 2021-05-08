const User = require('../models/user')
module.exports ={
    async signup(req, res){

        const{name, email, password} = req.body

        try{
            const newUser = new User({name, email, password})
            const savedUser = await newUser.save()
            return res.status(201).send({
                success: true,
                name: savedUser.name,
                _id: savedUser._id,

            })

        }
        catch (error){
            return res.status(500).send('erreur')
        }
    },
    signin(req, res){
        return res.status(201).json({
            "success": true,
            "user": {
                "name": "toto",
                "_id": "1"
            }
        } )
    },

}