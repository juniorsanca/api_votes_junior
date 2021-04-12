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