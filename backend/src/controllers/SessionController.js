// index, show, store, update, delete
const User = require('../model/User');


module.exports = {
    async store(req, res) {
        const { email } = req.body;
        //validação se ja existe email no banco
        let user = await User.findOne({ email });
        // cira caso não exista
        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }


};