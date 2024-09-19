"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("shops", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			accountId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "accounts", // references the accounts table
					key: "id",
				},
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			businessName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			industryId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "shop_industries", // references the shop_industries table
					key: "id",
				},
				createdAt: {
					type: Sequelize.DATE,
					allowNull: false,
					defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				},
				updatedAt: {
					type: Sequelize.DATE,
					allowNull: false,
					defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				},
				deletedAt: {
					type: Sequelize.DATE,
					allowNull: true,
				},
			},
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("shops");
	},
};
