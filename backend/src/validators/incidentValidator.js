const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  index() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      }),
    });
  },

  store() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
      }),
      [Segments.HEADERS]: Joi.object({
        Authorization: Joi.string().required(),
      }).unknown(),
    });
  },

  destroy() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
      }),
    });
  },
};
