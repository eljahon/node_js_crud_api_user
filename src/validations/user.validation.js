const {body} = require('express-validator');
exports.UsersValidation = () => (body('first_name').isLength({min: 3}),
body('last_name').isLength({min: 3}),
body('age').isNumeric({min: 2}).isEmpty(),
body('job').isString({min: 3}).isEmpty(),
body('interest').isLength({min: 3})
)
