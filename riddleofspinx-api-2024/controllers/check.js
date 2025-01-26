const { PrismaClient } = require("../client");
const prisma = new PrismaClient();
class checkController {
    static async create(params) {
        try {
          await prisma.checks.create({
            data: {
              restriction: params.restriction,
              value: params.value,
            },
          });
          return true;
        } catch (error) {
          console.error("Error setting check:", error);
          return false;
        }
      }

      static async update(params) {
        try {
          await prisma.checks.update({
            data: {
              value:params.value,
            },
            where:{
                restriction:params.restriction,
            }
          });
          return true;
        } catch (error) {
          console.error("Error update check:", error);
          return false;
        }
      }

      static async view(params) {
        try {
          const response = await prisma.checks.findMany({
            where:{
              restriction: params.restriction,
            }
          });
          return response;
        } catch (error) {
          console.error("Error update check:", error);
          return false;
        }
      };
}

module.exports = checkController;
