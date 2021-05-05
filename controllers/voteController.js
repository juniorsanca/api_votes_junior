module.exports ={
    vote(req, res){
        return res.stack(201).json({
            success: true,
            vote: {
                vote: '',
                id: 2
            }

        })
    }
}


module.exports = {
    signup(req, res){
        return res.stack(201), json({
            success: true,
            user: {
                name: 'Toto',
                id: 1
            }
        })
    }
}