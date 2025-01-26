import SidebarIcon from "@/assets/icons/sidebar_icon";
import { useState, useEffect } from "react";
import MenuButton from "../MenuButton";
import { navItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const sidebarAnimation = {
    hidden: {
      x: "-30vw",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeIn",
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "-30vw",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeIn",
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity ${isOpen ? "opacity-50 z-10" : "opacity-0 -z-10"
          } `}
        onClick={() => setIsOpen(false)}
      />
      <div className="">
        <SidebarIcon isOpen={isOpen} toggle={toggleSidebar} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar"
            variants={sidebarAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={
              "bg-gradient-to-r from-[#8c1e96] to-[#460f4b] w-[20vw] min-w-[250px] z-10 fixed left-0 top-0 h-full flex flex-col justify-center"
            }
          >
            {navItems.map((item, index) => (
              <MenuButton
                key={index}
                icon={item.icon}
                text={item.text}
                linkTo={item.linkTo}z
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
