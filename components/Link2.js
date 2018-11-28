import React from 'react';
import Link from 'next/link';

export default ({ href, children }) => (
  <Link href={process.env.BASENAME + href}>
    {children}
  </Link>
);