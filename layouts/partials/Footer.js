import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import ImageFallback from "@layouts/components/ImageFallback";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { footer_content } = config.params;
  return (
    <footer className="relative mt-12 pt-[70px] mb-2">
      <ImageFallback
        className="-z-[1] object-cover object-left  md:object-top"
        src="/images/footer-bg-shape.svg"
        alt="footer background"
        fill={ true }
      />
      <div className="container text-center">
        <div className="mb-6 inline-flex">
          <Logo />
        </div>
        <br />
        <div className="inline-flex mt-2">
          <Social source={ social } className="socials mb-6 justify-center" />
        </div>
        { markdownify( footer_content, "p", "max-w-[638px] mx-auto" ) }

        {/* footer menu */ }
        <ul className="mb-5 mt-6 flex-wrap space-x-2 lg:space-x-4">
          { menu.footer.map( ( menu ) => (
            <li className="inline-block" key={ menu.name }>
              <Link
                href={ menu.url }
                className="p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4"
              >
                { menu.name }
              </Link>
            </li>
          ) ) }
        </ul>
        <Link
          href="/career"
          className="p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4"
        >
          Career
        </Link>
        <Link
          href="/privacy-policy"
          className="p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-and-condition"
          className="p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4"
        >
          Terms & Condition
        </Link>
        {/* copyright */ }
        <div className="mt-8">
          Copyrights © CodingTutorials.in (India) Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
