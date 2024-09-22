const Joi = require('joi');

const taskValidator = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().valid('pending', 'in-progress', 'completed'),
    dueDate: Joi.date().iso().required(),
});

module.exports = { taskValidator };
