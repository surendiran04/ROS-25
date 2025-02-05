import React, { useState, useContext, useEffect } from "react";
import Logo from "@/assets/logo.png";
import { Link, Navigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/AuthContext";
import { LoaderContext } from "@/context/LoaderContext";
import GoogleOAuth from "@/components/OAuth/GoogleOAuth";
import Loader from "@/components/Loader/Loader";
import { LucideEye, LucideEyeOff } from "lucide-react";

const Login2 = () => {
  const { auth, handleRosLogin } = useContext(AuthContext);
  const { refreshRecaptcha, toggleCaptchaBadge } = useContext(LoaderContext);
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY
      }`;
    script.addEventListener("load", refreshRecaptcha);
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", refreshRecaptcha);
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    toggleCaptchaBadge(true);
    return () => toggleCaptchaBadge(false);
  }, []);

  const formSchema = z.object({
    kid: z.string().email(),
    password: z.string().min(1, {
      message: "Enter a valid Password",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kid: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    // //console.log(data);
    handleRosLogin(data);
  };
  if (isLoading) return <Loader />;

  if (auth) return <Navigate to={"/rounds"} />;

  return (
    <div className="font-title text-gray-700 h-dvh bg-[url('@/assets/bg/astro2.jpg')] bg-cover bg-no-repeat flex items-center">
      <div
        className="g-recaptcha"
        data-sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}
        data-size="invisible"
      ></div>
      <div className="container mx-auto flex items-center">
        <div className="max-w-md w-full mx-auto">
          <div>
            <img className="" src={Logo} alt="Riddle of The Sphinx" />
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100">
            <div className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                  <FormField
                    control={form.control}
                    name="kid"
                    render={({ field }) => (
                      <FormItem className="mb-5 font-title">
                        <FormLabel className="block mb-2 text-sm font-medium text-white">
                          KURUKSHETRA EMAIL
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="sample@gmail.com"
                            className="block w-full p-3 rounded bg-white text-black border border-gray-100 focus:outline-none focus:bg-gray-100 focus:text-black"
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription className="font-title text-white">
                                                    Enter KID from your Kurukshetra Profile
                                                </FormDescription> */}
                        <FormMessage className="font-title text-[#ff0000]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormLabel className="font-title text-white">
                          PASSWORD
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="********"
                            className="block w-full p-3 rounded bg-white text-black border border-gray-100 focus:outline-none focus:bg-gray-100 focus:text-black"
                            {...field}
                            type={!isOpen ? "password" : "text"}
                          />
                        </FormControl>
                        {!isOpen ? (
                          <LucideEye
                            className="absolute bottom-2 right-2 cursor-pointer"
                            onClick={() => setIsOpen((prev) => !prev)}
                          />
                        ) : (
                          <LucideEyeOff
                            className="absolute bottom-2 right-2 cursor-pointer"
                            onClick={() => setIsOpen((prev) => !prev)}
                          />
                        )}
                        {/* <FormDescription className="text-white">
                                                    Enter your Kurukshetra Password
                                                </FormDescription> */}
                        <FormMessage className="font-title text-[#ff0000]" />
                      </FormItem>
                    )}
                  />

                  <button className="w-full p-3 mt-6 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out delay-150 text-white rounded shadow">
                    LOGIN
                  </button>
                  <div class="flex items-center justify-center my-4 text-orange-400">
                    <hr class="border-orange-400 border-2 w-1/2" />
                    <span class="mx-4 font-semibold">or</span>
                    <hr class="border-orange-400 border-2 w-1/2" />
                  </div>

                  <GoogleOAuth />
                </form>
              </Form>
            </div>

            <div className="sm:flex block text-center justify-between p-5 text-sm border-t border-gray-300 bg-gray-100">
              <p>Don't have a K-Account?</p>
              <a
                href="https://kurukshetraceg.org.in/register"
                target="_blank"
                className="font-medium text-indigo-500"
              >
                Register and get K-Account
              </a>

              {/* <a href="#" className="text-gray-600">Forgot password?</a> */}
            </div>
          </div>
        </div>
      </div>
      {/* <a href="https://kurukshetraceg.org.in" target="_blank">   Image blocking the sidebar
        <div className="sm:block hidden absolute top-0 left-4 p-4 rounded-full sm:visible">
          <img src="https://kurukshetraceg.org.in/assets/KLogoWhite-DDArUp1X.webp" className="h-14" alt="Kurukshetra'24" />
        </div>
      </a> */}
      <div className="fixed bottom-5 left-5">
        <Link to="/query">
          <button className="w-full p-4 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">
            Report a Problem
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login2;
