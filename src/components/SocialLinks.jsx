import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { PiFacebookLogoBold, PiInstagramLogo } from 'react-icons/pi';
function SocialLinks() {
  return (
    <div className="pt-20">
      <div className="w-full flex justify-center gap-16 items-center">
        <Link href="https://www.facebook.com/LockedManhattan" target="_blank">
          <PiFacebookLogoBold size={64} color="#1B4ED8" />
        </Link>
        <Link href="https://www.lockedmanhattan.com" target="_blank">
          <Image
            src="/assets/lockedLogo_LG 1.png"
            height={96}
            width={96}
            alt="Logo for Locked Manhattan that links to LockedManhattan website"
          />
        </Link>
        <Link href="https://www.instagram.com/lockedmanhattan/" target="_blank">
          <PiInstagramLogo size={64} color="#1B4ED8" />
        </Link>
      </div>
    </div>
  );
}

export default SocialLinks;
