const User = require('../model/User');
const Spot = require('../model/Spot');

module.exports = {
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res) {

        const { filename } = req.file;
        const { company, price } = req.body;
        const { user_id } = req.headers;
        const { tecnologia } = req.body;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User does not exists' })
        }

        const spot = await Spot.create({
            techs: tecnologia.split(',').map(tech => tech.trim()),
            user: user_id,
            thumbnail: filename,
            company,
            price,
        })

        return res.json(spot)
    }
};