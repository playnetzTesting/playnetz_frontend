import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../button/button";
import PlaynetzLogo from "../icons/logo";

export const PlaynetzNavbar = () => {
  const router = useRouter();

  return (
    <nav className="h-16 absolute top-0 left-0 w-full flex justify-center items-center p-6">
      <div className="w-full max-w-[1440px]">
        <div className="flex items-center justify-between w-full">
          <Link href="/" passHref>
            <a>
              <PlaynetzLogo width={120} height={29} />
            </a>
          </Link>
          <Button onClick={() => router.push("/auth/signIn")}>Sign In</Button>
        </div>
      </div>
    </nav>
  );
};
