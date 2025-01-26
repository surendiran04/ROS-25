const { PrismaClient } = require("../client");
const prisma = new PrismaClient();
class QuestionController {
  static async setQuestion(params) {
    try {
      await prisma.qNA.create({
        data: {
          question: params.question,
          choices: params.choices,
          description: params.description,
          answers: params.answers,
          level: params.level,
          set: params.set,
          image: params.image,
          type: params.type,
        },
      });
      return true;
    } catch (error) {
      console.error("Error setting question:", error);
      return false;
    }
  }

  static async viewQuestions(level, user) {
    try {
      console.log("Level:" + level);
      // console.log(user.kid);
      const user1 = await prisma.user.findMany({
        where: {
          kid: user.kid,
        },
      });
      const user2 = user1[0];
      console.log(user2);
      var arr1 = [],
        arr2 = [];
      if (level == "1") {
        // console.log("LEVEL1 from mua");
        arr1 = user2.level1.split(",");
        var index = Math.floor(Math.random() * arr1.length);
        console.log(index + "HI");
        var set = parseInt(arr1[index]);
        console.log(set);
        const questions = await prisma.qNA.findMany({
          where: {
            AND: {
              set: set,
              level: 1
            }
          },
          select: {
            question_number: true,
            question: true,
            description: true,
            choices: true,
            image: true,
            type: true,
            level: true,
            set: true,
          },
        });
        console.log(questions);
        arr1.splice(index, 1);
        var l1 = arr1.join();
        await prisma.user.update({
          data: {
            level1: l1,
          },
          where: {
            kid: user.kid,
          },
        });
        return questions;
      } else if (level == "2") {
        arr2 = user2["level2"].split(",");
        var index = Math.floor(Math.random() * arr2.length);
        console.log(index + "hi");
        var set = parseInt(arr2[index]);
        const questions = await prisma.qNA.findMany({
          where: {
            AND: {
              set: set,
              level: 2
            }
          }, select: {
            question_number: true,
            question: true,
            description: true,
            choices: true,
            image: true,
            type: true,
            level: true,
            set: true,
          },
        });
        arr2.splice(index, 1);
        var l2 = arr2.join();
        await prisma.user.update({
          data: {
            level2: l2,
          },
          where: {
            kid: user.kid,
          },
        });
        return questions;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      return [];
    }
  }
}

module.exports = QuestionController;
