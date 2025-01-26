import React from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navItems } from "@/constants";
import { ChevronLeftSquare, Mail, AtSign, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/utils";

const NavSheet = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className={cn("opacity-100", { "opacity-20": open })}>
        <svg
          width="35"
          height="35"
          viewBox="0 0 65 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M59.8684 42.8235C61.1863 42.8241 62.4534 43.278 63.4071 44.0911C64.3609 44.9043 64.9282 46.0143 64.9915 47.1913C65.0549 48.3682 64.6093 49.5218 63.7473 50.4131C62.8853 51.3043 61.6727 51.8649 60.361 51.9786L59.8684 52H5.13158C3.81373 51.9994 2.54665 51.5455 1.59289 50.7324C0.639126 49.9193 0.071801 48.8092 0.00846963 47.6323C-0.0548617 46.4553 0.390656 45.3017 1.25271 44.4104C2.11475 43.5192 3.32725 42.9586 4.63895 42.8449L5.13158 42.8235H59.8684ZM59.8684 21.4118C61.2294 21.4118 62.5346 21.8952 63.497 22.7556C64.4594 23.6161 65 24.7831 65 26C65 27.2169 64.4594 28.3839 63.497 29.2444C62.5346 30.1048 61.2294 30.5882 59.8684 30.5882H5.13158C3.7706 30.5882 2.46536 30.1048 1.503 29.2444C0.540647 28.3839 0 27.2169 0 26C0 24.7831 0.540647 23.6161 1.503 22.7556C2.46536 21.8952 3.7706 21.4118 5.13158 21.4118H59.8684ZM59.8684 0C61.2294 0 62.5346 0.483402 63.497 1.34386C64.4594 2.20432 65 3.37136 65 4.58824C65 5.80511 64.4594 6.97215 63.497 7.83261C62.5346 8.69307 61.2294 9.17647 59.8684 9.17647H5.13158C3.7706 9.17647 2.46536 8.69307 1.503 7.83261C0.540647 6.97215 0 5.80511 0 4.58824C0 3.37136 0.540647 2.20432 1.503 1.34386C2.46536 0.483402 3.7706 0 5.13158 0H59.8684Z"
            fill="url(#paint0_linear_614_454)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_614_454"
              x1="0"
              y1="0"
              x2="76.0541"
              y2="60.361"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#a855f7" />
              <stop offset="0.426844" stopColor="#ec4899" />
              <stop offset="1" stopColor="#fb923c" />
            </linearGradient>
          </defs>
        </svg>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-transparent backdrop-blur-sm bg-gradient-to-r from-[#8c1e96]/50 to-[#460f4b]/50  p-0 border-violet-600/40 w-full min-[450px]:w-[340px] overflow-y-auto"
      >
        <SheetClose className="p-3 md:p-4">
          <ChevronLeftSquare className="h-12 w-12 text-orange-300/80" />
        </SheetClose>
        <nav className="mt-12 sm:mt-14 md:mt-16 xl:mt-20">
          <ul>
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.linkTo}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={
                      "group w-full flex items-center gap-4 text-lg md:text-xl text-white hover:bg-slate-300/10 hover:text-orange-400 transition-colors tracking-wider font-title font-bold uppercase px-5 md:px-6 py-4 border-b border-violet-600/40"
                    }
                  >
                    <item.icon className="text-orange-300 h-8 w-8 transition-colors" />
                    <span>{item.text}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="border-b border-violet-600/40"
                >
                  <AccordionTrigger
                    className={
                      "group w-full flex items-center gap-4 text-lg md:text-xl text-white hover:bg-slate-300/10 hover:text-orange-400 transition-colors tracking-wider font-title font-bold uppercase px-5 md:px-6 py-4 hover:no-underline"
                    }
                  >
                    <div className="flex items-center gap-4">
                      <Mail className="text-orange-300 h-8 w-8 transition-colors" />
                      <span>Contact</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-2 pt-1">
                    <div className="bg-slate-950/30 border border-slate-950 py-2 px-4 rounded-xl">
                      <a
                        href={`tel:+91 9500932702`}
                        className="group flex items-center justify-between"
                      >
                        <div className="flex flex-col leading-none pb-3">
                          <span className="text-base font-medium tracking-wide">
                            Vishnu N
                          </span>
                          <span className="group-hover:underline text-lg leading-none text-orange-300 font-medium tracking-wide">
                            +91 95009 32702
                          </span>
                        </div>
                        <Phone className="text-teal-400" />
                      </a>
                      <a
                        href={`mailto:riddleofthesphinx@cegtechforum.in`}
                        target={"blank"}
                        className="group flex items-center justify-between py-2 group border-t"
                      >
                        <span className="group-hover:underline tracking-wide min-[360px]:text-base min-[420px]:text-sm text-rose-300">
                          riddleofthesphinx@cegtechforum.in
                        </span>
                        <AtSign className="text-teal-400" />
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* <div
                to={item.linkTo}
                onClick={() => {
                  setOpen(false);
                }}
                className={
                  "group w-full flex items-center gap-4 text-lg md:text-xl text-white hover:bg-slate-300/10 hover:text-orange-400 transition-colors tracking-wider font-title font-bold uppercase px-5 md:px-6 py-4 border-b border-violet-600/40"
                }
              >
                <item.icon className="text-orange-300 h-8 w-8 transition-colors" />
                <span>{item.text}</span>
              </div> */}
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
