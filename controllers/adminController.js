module.exports = {

    getUsers(req, res) {

        return res.status(200).json({
            "success": true,
            "users": [
                {
                    "name": "toto",
                    "_id": "1"
                },
                {
                    "name": "titi",
                    "_id": "2"
                }
            ]
        })

    },

    getUser(req, res) {


        return res.status(200).json({
            "success": true,
            "user": {
                "name": "toto",
                "_id": "1"
            }
        })

    },

}