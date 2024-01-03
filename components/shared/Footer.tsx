import Image from "next/image";
import Link from "next/link";
import LogoHolder from "./LogoHolder";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <LogoHolder />
        <p>2024 Evently. All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
