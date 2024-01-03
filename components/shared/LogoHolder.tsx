import Image from "next/image";
import Link from "next/link";

const LogoHolder = () => {
  return (
    <>
      <Link href={"/"} className="w-36 flex items-center gap-x-3">
        <Image
          src={"/assets/images/Asset1.svg"}
          width={35}
          height={30}
          alt="bookmyevent logo"
        />
        <h1 className="text-2xl font-semibold">BookMyEvents</h1>
      </Link>
    </>
  );
};

export default LogoHolder;
