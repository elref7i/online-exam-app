"use client";
import IconSocial from "@/components/common/icon-social";
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
        <IconSocial>
          <FcGoogle className=" text-[#1877F2]" />
        </IconSocial>
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
