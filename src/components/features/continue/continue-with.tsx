"use client";
import IconSocial from "@/components/common/icon-social";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

/**
 * A functional component that displays social media icons for alternative authentication options.
 *
 * @component
 * @example
 * return (
 *   <ContinueWith />
 * )
 *
 * @returns `JSX.Element` The ContinueWith component containing social media icons for authentication.
 */

export default function ContinueWith() {
  //Translations
  const t = useTranslations();

  return (
    <section className="or-continue text-center">
      {/* Title */}
      <p className="continue-with mb-6">{t("continue-with")}</p>
      {/* Icons */}
      <ul className="flex justify-center items-center gap-8">
        {/* Icon Google */}
        <li className="size-12 bg-white shadow-primary-shadow border-[1px] rounded-2xl flex items-center justify-center">
          <Button
            type="button"
            onClick={() => {
              signIn("google", {
                callbackUrl: "http://localhost:3000/home",
              });
            }}
            className="text-2xl"
          >
            <FcGoogle />
          </Button>
        </li>

        {/* Icon Facebook */}
        <IconSocial>
          <FaFacebook className=" text-[#1877F2]" />
        </IconSocial>

        {/* Icon Twitter */}
        <IconSocial>
          <FaTwitter className=" text-[#1D9BF0]" />
        </IconSocial>

        {/* Icon Apple */}
        <IconSocial>
          <FaApple className=" text-black" />
        </IconSocial>
      </ul>
    </section>
  );
}
