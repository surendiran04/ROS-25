const { PrismaClient } = require("../client");
const prisma = new PrismaClient();

class ScoreController {
  static async calculateScore(req, user) {
    try {
      // console.log(req);
      if (req.answers) {
        const answers = req.answers;
        const kid = user.kid;
        console.log(kid);
        const startTime = new Date();
        startTime.setMinutes(startTime.getMinutes() + 330);
        console.log(startTime + "bye");
        const questions = await prisma.qNA.findMany({
          where: {
            AND: {
              set: req.setNumber,
              level: 1
            }
          },
        });

        if (!questions) {
          console.log("Questions not found for set:", setNumber);
          return false;
        }

        const correctAnswers = await prisma.QNA.findMany({
          where: {
            AND: {
              set: req.setNumber,
              level: 1
            }
          },
          select: {
            answers: true,
          },
        });
        console.log(correctAnswers);

        const valuesArray = correctAnswers.map((obj) => obj.answers);

        if (!valuesArray) {
          console.log("Correct answers not found for set:", setNumber);
          return false;
        }

        let correctCount = 0;
        for (let i = 0; i < answers.length; i++) {
          if (answers[i].toLowerCase() === valuesArray[i].toLowerCase()) {
            correctCount++;
        }
        }
        console.log(correctCount + "count");

        const score = correctCount * 5;
        const data = await prisma.Score.findMany({
          where: {
            kid: kid,
          },
        });
        console.log(data);
        console.log(data[0]);
        const a = data[0];
        const existingTime = a["start_time"];

        console.log(existingTime);
        console.log(startTime);
        const timeDifferenceInSeconds = Math.floor(
          (new Date(startTime) - new Date(existingTime)) / 1000
        );
        console.log(timeDifferenceInSeconds);
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        const seconds = Math.floor(timeDifferenceInSeconds % 60);
        const t = minutes + seconds / 100;
        // console.log(t);
        const data1 = data[0];
        const news = score + data1["scorer1"];
        console.log(score + "hi");
        const newts = t + data1["time_scorer1"];
        await prisma.Score.update({
          where: {
            kid: kid,
          },
          data: {
            scorer1: news,
            time_scorer1: newts,
          },
        });
      } else {
        const kid = user.kid;
        console.log(user.kid);
        var startTime = new Date();
        startTime.setMinutes(startTime.getMinutes() + 330);
        console.log(startTime + "hi");
        await prisma.Score.update({
          where: {
            kid: kid,
          },
          data: {
            start_time: startTime,
          },
        });
      }
      return true;
    } catch (error) {
      console.error("Error calculating and updating score:", error);
      return false;
    }
  }

  static async getLeaderboard() {
    try {
      const leaderboard = await prisma.score.findMany({
        include:{
          user:true,
        },
      });
      // const leaderboard = l.leaderboard;
      console.log(leaderboard+"leaderboard");
      leaderboard.sort((a, b) => {
        const sumA = (a.scorer1 || 0) + (a.scorer2 || 0);
        const sumB = (b.scorer1 || 0) + (b.scorer2 || 0);
    
        if (sumA !== sumB) {
          // console.log("Sorting by sum of scorer1 and scorer2.");
          return sumB - sumA; // Sort by sum of scorer1 and scorer2 in descending order
        } else {
          // console.log("Sorting by minimum time of scorer1 and scorer2.");
          // If sums are equal, sort by the minimum of time_scorer1 and time_scorer2
          const minTimeA = Math.min(a.time_scorer1 || Infinity, a.time_scorer2 || Infinity);
          const minTimeB = Math.min(b.time_scorer1 || Infinity, b.time_scorer2 || Infinity);
          return minTimeA - minTimeB;
        }
      });

      return {
        leaderboard,
      };
    } catch (error) {
      return false;
    }
  }

  static async getRank(user) {
    try{
      const arr = await this.getLeaderboard();
      const arr1=arr.leaderboard;
      // console.log(arr1.length);
      // console.log(user.kid);
      var rank=0;
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].kid === user.kid) {
            rank=i+1; // Position is 1-based index
        }
    }
    return rank;

    console.log(rank); 
    }
    catch (error) {
      return false;
    }
  }

  static async calculateScorer2(req, user) {
    try {
      // console.log(req);
      if (req.answers) {
        const answers = req.answers;
        const kid = user.kid;
        console.log(kid);
        const startTime = new Date();
        startTime.setMinutes(startTime.getMinutes() + 330);
        console.log(startTime + "bye");
        const questions = await prisma.qNA.findMany({
          where: {
            AND: {
              set: req.setNumber,
              level: 2
            }
          },
        });
  
        if (!questions) {
          console.log("Questions not found for set:", setNumber);
          return false;
        }
  
        const correctAnswers = await prisma.QNA.findMany({
          where: {
            AND: {
              set: req.setNumber,
              level: 2
            }
          },
          select: {
            answers: true,
          },
        });
        console.log(correctAnswers);
  
        const valuesArray = correctAnswers.map((obj) => obj.answers);
  
        if (!valuesArray) {
          console.log("Correct answers not found for set:", setNumber);
          return false;
        }
  
        let correctCount = 0;
        for (let i = 0; i < answers.length; i++) {
          if (answers[i].toLowerCase() === valuesArray[i].toLowerCase()) {
            correctCount++;
        }
        }
        console.log(correctCount + "count");
  
        const score = correctCount * 5;
        const data = await prisma.Score.findMany({
          where: {
            kid: kid,
          },
        });
        console.log(data);
        console.log(data[0]);
        const a = data[0];
        const existingTime = a["start_time"];
  
        console.log(existingTime);
        console.log(startTime);
        const timeDifferenceInSeconds = Math.floor(
          (new Date(startTime) - new Date(existingTime)) / 1000
        );
        console.log(timeDifferenceInSeconds);
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        const seconds = Math.floor(timeDifferenceInSeconds % 60);
        const t = minutes + seconds / 100;
        // console.log(t);
        const data1 = data[0];
        const news = score + data1["scorer2"];
        console.log(score + "hi");
        const newts = t + data1["time_scorer2"];
        await prisma.Score.update({
          where: {
            kid: kid,
          },
          data: {
            kid: kid,
            scorer2: news,
            time_scorer2: newts,
          },
        });
      } else {
        const kid = user.kid;
        console.log(user.kid);
        var startTime = new Date();
        startTime.setMinutes(startTime.getMinutes() + 330);
        console.log(startTime + "hi");
        await prisma.Score.update({
          where: {
            kid: kid,
          },
          data: {
            start_time: startTime,
          },
        });
      }
      return true;
    } catch (error) {
      console.error("Error calculating and updating score:", error);
      return false;
    }
  }

  

  static async getScoreboard(user) {
    try {
      const leaderboard = await prisma.score.findMany({
        where:{
          kid: user.kid,
        }
      });
      console.log(leaderboard);
      return {
        leaderboard,
      };
    } catch (error) {
      return false;
    }
  }
  
}


module.exports = ScoreController;
