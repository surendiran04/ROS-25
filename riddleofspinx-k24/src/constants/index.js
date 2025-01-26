import { FaRankingStar, FaStar, FaScaleBalanced } from "react-icons/fa6";
import { BiPyramid, BiPhone } from "react-icons/bi";
import {
  Award,
  Scale,
  Mail,
  LandPlot,
  ClipboardList,
  Code2,
  MessageCircleQuestion
} from "lucide-react";

export const navItems = [
  { icon: LandPlot, text: "Rounds", linkTo: "/rounds" },
  { icon: ClipboardList, text: "Instructions", linkTo: "/instructions" },
  { icon: Award, text: "Scoreboard", linkTo: "/scoreboard" },
  { icon: Scale, text: "Leaderboard", linkTo: "/leaderboard" },
  { icon: MessageCircleQuestion, text: "Queries", linkTo: "/query" },
  { icon: Code2, text: "The Team", linkTo: "/team" },
];
