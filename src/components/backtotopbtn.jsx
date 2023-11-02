import React from 'react';
import Link from 'next/link';

function BackToTopBtn({ href = '/' }) {
  return (
    <Link
      className=" flex justify-center rounded-md m-8 py-2 px-4 shadow-inner bg-slate-200 border-2 border-slate-400"
      href={href}
    >
      Back to Top
    </Link>
  );
}

export default BackToTopBtn;
