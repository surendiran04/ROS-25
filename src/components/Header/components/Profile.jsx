import React, { useContext } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import charactersData from "@/constants/avatars";
import { User, LogOut } from "lucide-react";
import { AuthContext } from "@/context/AuthContext";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Profile = (props) => {
  const { details } = props;
  const { characterdetails, fetchCharacter } = useContext(AuthContext);
  useEffect(() => {
    setTimeout(async () => {
      await fetchCharacter();
    }, 1500);
  }, []);
  //console.log(characterdetails);
  // };
  const { handleLogout } = useContext(AuthContext);
  const handleClick = () => {
    toast.promise(handleLogout(), {
      success: "Logged out successfully",
      error: "Error logging out",
      loading: "Logging out...",
    });
  };
  return (
    <Popover>
      <PopoverTrigger className="mr-3 lg:mr-0">
        <Avatar className={"dark h-12 w-12"}>
          <AvatarImage src={characterdetails.message} />
          <AvatarFallback className={"text-white"}>
            <User />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={16}
        align={"end"}
        className={
          "max-w-[250px] bg-transparent backdrop-blur-lg bg-gradient-to-tr from-slate-800/80 to-80% to-slate-950/70 p-4 border-violet-300/40"
        }
      >
        <div className="flex flex-col items-center space-y-4 text-white font-title tracking-wider py-2">
          <span className="text-orange-400">{details.kid}</span>
          <div className="">
            <span className="text-[1.1rem]">
              {details.firstname}
              <span className="pl-2">{details.lastname} </span>
            </span>
          </div>
          <span className="line-clamp-1 text-ellipsis text-xs md:text-sm xd:text-base">
            {details.email}
          </span>
          <span></span>
          <button
            className="flex gap-2 items-center justify-center bg-rose-500/50 mx-8 w-full rounded-md py-1 hover:bg-rose-600/40"
            onClick={handleClick}
          >
            Logout
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
