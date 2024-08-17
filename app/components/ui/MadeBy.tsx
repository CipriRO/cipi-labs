import Image from "next/image";
import Link from "next/link";
import CipiLogo from "@/public/logos/cipi-logo.svg";

const MadeBy = () => {
  return (
    <Link href="#" className="flex items-end gap-1">
      Made by
      <Image
        priority={true}
        src={CipiLogo}
        alt="The logo of Cipi"
        width={28.8}
        height={16}
        className="mb-0.5"
      />
    </Link>
  );
};
export default MadeBy;
