import Head from "next/head";
import Link from "next/link";
import { Button } from "../../components/button/button";
import { StyledBackButton } from "../../styles/theme.js/theme";
import { BackIcon } from "../../components/icons/backIcon";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { ModalShell } from "../../components/modal/modal";
import CustomInput from "../../components/customInput/customInput";
import { Icon } from "@iconify/react";

export default function SignUp() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const modalRef = useRef();

  useEffect(() => {
    function handler(e) {
      if (modalRef.current.contains(e.target)) {
        setOpen(true);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  const openModal = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="bg-[#050F14]">
      <Head>
        <title>Playnetz || SignUp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full flex items-center min-h-screen w-full">
        <div className="w-full h-full">
          <div className="w-full absolute top-0 left-0 p-6 z-20">
            <StyledBackButton className="z-50" onClick={() => router.push("/")}>
              <BackIcon />
              back
            </StyledBackButton>
          </div>
          <div className="w-full z-0 h-full grid grid-cols-3 ">
            <div className="hidden z-0 lg:flex bg-[#33a4d8] md:col-span-2 h-full w-full">
              <video
                src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov"
                autoPlay={true}
                loop
                muted
                controls={false}
              ></video>
            </div>

            <div className="col-span-3 lg:col-span-1 flex items-center justify-center w-full h-full p-4">
              <div className="w-full flex items-center justify-center p-6">
                <div className="flex flex-col justify-center gap-4">
                  <p className="text-white text-sm">Simple. Secure. Fun.</p>
                  <div className="flex gap-2 flex-col mb-4">
                    <h2 className="text-white text-3xl lg:text-5xl font-bold w-full">
                      Getting Ready! <br />
                      <span className="">Joining Planetz is easy.</span>
                    </h2>
                    <p className="text-white mt-4 text-sm">
                      (signing up only takes 3 minutes!)
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-white text-2xl font-semibold">
                      Select user type to begin
                    </h2>
                    <div className="flex w-full justify-between items-center gap-4">
                      <Button className="w-1/2" onClick={() => openModal()}>
                        Producer
                      </Button>
                      <Button className="w-1/2">User</Button>
                    </div>
                    <div className="mt-4 flex items-center gap-x-2">
                      <p className="text-white">already have an account?</p>
                      <Link href="/auth/signIn" passHref>
                        <a className="text-[#33A4D8] focus:underline text-lg font-semibold">
                          Sign In
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <>
          <ModalShell open={open} refs={modalRef}>
            <div className="w-full md:w-[40%] bg-white p-6 rounded-[15px]">
              {/* heding */}
              <div className="flex justify-between items-center">
                <h2 className="text-[#2B8BB7] text-2xl font-bold">
                  Sign Up - Producer
                </h2>
                <Icon
                  icon="ant-design:close-circle-filled"
                  color="red"
                  width={24}
                  className="cursor-pointer"
                  height={24}
                  onClick={() => openModal()}
                />
              </div>
              {/* heding */}

              <div className="mt-4">
                <form className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <CustomInput type="text" placeholder="first name" />
                    <CustomInput type="text" placeholder="last name" />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput type="email" placeholder="email" />
                  </div>
                </form>
              </div>
            </div>
          </ModalShell>
        </>
      </main>
    </div>
  );
}
