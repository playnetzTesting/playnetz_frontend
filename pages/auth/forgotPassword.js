import Head from "next/head";
import { Button } from "../../components/button/button";
import CustomInput from "../../components/customInput/customInput";
import { StyledBackButton } from "../../styles/theme.js/theme";
import { BackIcon } from "../../components/icons/backIcon";
import { useRouter } from "next/router";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <div className="bg-[#050F14]">
      <Head>
        <title>Playnetz || ForgotPassword</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen min-h-screen p-6 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-[1440px]">
            <div className="w-full absolute top-0 left-0 p-6">
              <StyledBackButton onClick={() => router.back()}>
                <BackIcon />
                back
              </StyledBackButton>
            </div>
            <div className="mt-24 flex justify-center">
              <div className="w-full md:max-w-[50%] lg:max-w-[30%] p-4 shadow-md rounded-md">
                <h2 className="text-white text-4xl font-bold">
                  Forgot Password?
                </h2>
                {/* form */}
                <div className="flex items-center w-full mt-4">
                  <form className="w-full flex flex-col gap-6">
                    <div className="w-full">
                      <CustomInput
                        placeholder="email"
                        name="email"
                        type="email"
                        // onChange={valueChange}
                      />
                    </div>
                    <div className="w-full">
                      <Button className="w-full">
                        Send Password Reset Link
                      </Button>
                    </div>
                  </form>
                </div>
                {/* form */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
