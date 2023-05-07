const Food = require("../../models/Foods");


const fetchallFoodsPublic = async (req, res) => {
    try {
        const pfoods = await Food.find({});
        res.json(pfoods);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Internal server Error occured");
    }
}



exports.fetchallFoodsPublic = fetchallFoodsPublic;

