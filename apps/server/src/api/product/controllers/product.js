"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async findOne(ctx) {
    const { id: slug } = ctx.params;
    // @ts-ignore
    const entity = await strapi.db.query("api::product.product").findOne({
      where: { slug },
      populate: { images: true, thumbnail: true },
    });

    return entity;
  },
}));
