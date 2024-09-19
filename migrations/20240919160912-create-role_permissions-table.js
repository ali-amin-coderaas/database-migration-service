"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("role_permissions", {
			roleId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "roles", // References the roles table
					key: "id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			permissionId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "permissions", // References the permissions table
					key: "id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
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
		});
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable("role_permissions");
	},
};
