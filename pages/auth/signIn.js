import Head from "next/head";
import Link from "next/link";
import { Button } from "../../components/button/button";
import CustomInput from "../../components/customInput/customInput";
import { StyledBackButton } from "../../styles/theme.js/theme";
import { useRouter } from "next/router";
import { BackIcon } from "../../components/icons/backIcon";
import { Icon } from "@iconify/react";

export default function SignIn() {
  const valueChange = () => {};

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Stupid");
  };

  const router = useRouter();

  return (
    <div className="bg-[#050F14]">
      <Head>
        <title>Playnetz || SignIn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full min-h-screen p-6 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-[1440px]">
            <div className="w-full absolute top-0 left-0 p-6">
              <StyledBackButton onClick={() => router.push("/")}>
                <BackIcon />
                back
              </StyledBackButton>
            </div>
            <div className="mt-24 flex justify-center">
              <div className="w-full md:max-w-[50%] lg:max-w-[30%] p-4 shadow-md rounded-md">
                <h2 className="text-white text-4xl font-bold">Sign In</h2>
                {/* form */}
                <div className="flex items-center w-full mt-4">
                  <form
                    className="w-full flex flex-col gap-6"
                    onSubmit={onSubmit}
                  >
                    <div className="w-full">
                      <CustomInput
                        placeholder="email"
                        name="email"
                        type="email"
                        onChange={valueChange}
                      />
                    </div>
                    <div className="w-full">
                      <CustomInput
                        placeholder="password"
                        name="password"
                        type="password"
                        onChange={valueChange}
                      />
                    </div>
                    <div className="w-full">
                      <CustomInput
                        className="w-auto accent-[#33A4D8]"
                        name="rememberme"
                        type="checkbox"
                        checked={false}
                        onChange={valueChange}
                      />
                      <label htmlFor="rememberme" className="text-white ml-4">
                        Remember me
                      </label>
                    </div>
                    <div className="w-full">
                      <Button className="w-full" type="submit">
                        Sign In
                      </Button>
                    </div>
                    <div className="w-full">
                      <Link href="/auth/forgotPassword" passHref>
                        <a className="text-[#33A4D8] font-medium focus:underline">
                          forgot Password ?
                        </a>
                      </Link>
                    </div>
                  </form>
                </div>
                {/* form */}

                <div className="my-4">
                  <p className="capitalize text-center text-white text-base">
                    Or
                  </p>
                </div>
                <div>
                  <Button className="w-full font-medium flex gap-4 items-center justify-center">
                    <Icon icon="logos:facebook" width={18} height={18} />
                    Sign in with facebook
                  </Button>
                </div>
                <div className="flex mt-4 justify-start gap-x-2 items-center">
                  <p className="text-white">Your first time?</p>
                  <Link href="/auth/signUp" passHref>
                    <a className="text-[#33A4D8] focus:underline text-lg font-semibold">
                      Sign Up
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
