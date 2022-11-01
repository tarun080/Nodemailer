const { User, validate } = require("../models/user");

exports.user = async (req, res) => {
    console.log(req.body)
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message)
        const emailRepeat = await User.findOne({email: req.body.email})

        if(emailRepeat) {
            console.log(req.body.email)
            res.status(400).json({
                success: false,
                message: "Email already exists!!"
            })
            return
        }

        const user = await new User(req.body).save();

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
};