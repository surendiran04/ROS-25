const Hash = require("../utils/Hash");
const createToken = require("../utils/createToken");
const { PrismaClient } = require("../client");
const prisma = new PrismaClient();

class User {
    static async register(params) {
      console.log("inside create");
      try {
        const hashedPassword = await Hash.hashPassword(params.password);
       console.log(hashedPassword);
        await prisma.User.create({
          data: {
            kid: params.kid,
            email: params.email,
            password: hashedPassword,
            firstname: params.firstname,
            lastname: params.lastname,
            phone: params.phone,
            level1:"1,2,3,4,5,6,7,8",
            level2:"1,2,3,4,5",
          },
        });
        await prisma.Score.create({
          data: {
            kid: params.kid,
            scorer1: 0,
            start_time: new Date(0),
            time_scorer1: 0,
            scorer2: 0,
            time_scorer2: 0,
          },
        });
        return true;
      } catch (error) {
        console.error("Error creating user:", error);
        return false;
      }
    } 
  
    static async login(params, res) {
      var user = {};
    if (params.kid) {
      user = await prisma.User.findUnique({
        where: { email: params.kid },
      });
    }
        if (!user) {
          console.log("User not found");
          res.status(400).json({ error: "User not found" });
          return;
        }
  
        const isMatch = await Hash.verifyPassword(params.password, user.password);
        if (isMatch) {
          console.log("Login successful");
          const user1 = { id: user.id, kid: user.kid };
          // Assuming you have a function createToken for generating tokens
          const token = createToken(user1);
          res.status(200).json({ token: token });
        } else {
          console.log("Login failed: Incorrect password");
          res.status(400).json({ error: "Login failed: Incorrect password" });
        }
      }
      static async setCharacter(character,user){
        console.log(character.character);
        const chara = character.character;
        try{
          await prisma.user.update({
            data:{
              character:chara,
            },
            where:{
              kid:user.kid,
            }
          });
          return true;
      }
      catch(error){
        console.error("Error setting character:", error);
        return [];
      }
      }
      static async getCharacter(user){
        try{
          const u = await prisma.user.findMany({
            where:{
              kid:user.kid
            }
            
          });
          const u1=u[0];
          return u1.character;
        }
      catch(error){
        console.error("Error setting character:", error);
        return [];
      }
      }
      static async getUser(user){
        try{
          const u = await prisma.user.findMany({
            where:{
              kid:user.kid
            }
            
          });
          const u1=u[0];
          return u1;
        }
      catch(error){
        console.error("Error getting user:", error);
        return [];
      }
      }       
      catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
      }

      static async authlogin(params, res) {
        console.log("DHIVA");
        var user = {};
      if (params.kid) {
        user = await prisma.User.findUnique({
          where: {
            kid:params.kid,
          },
        });
      }
      console.log(user+"ji");
          if (!user) {
            console.log("User not found");
            res.status(401).json({ error: "User not found" });
            return;
          }
          
            const user1 = { id: user.id, kid: user.kid };
            // Assuming you have a function createToken for generating tokens
            const token = createToken(user1);
            res.status(200).json({ token: token });
          // } else {
          //   console.log("Login failed");
          //   res.status(400).json({ error: "Login failed, Register in K-Site" });
          // }
        }  
    }

    

  
  module.exports = User;