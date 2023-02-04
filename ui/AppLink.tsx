'use client';

import Link from 'next/link';
import { forwardRef } from 'react';

const AppLink = forwardRef<HTMLAnchorElement, Parameters<typeof Link>[0]>((props, ref) => {
  if (props.target === '_blank') {
    return <a ref={ref} {...props} href={props.href.toString()} />;
  }
  return <Link ref={ref} {...props} href={props.href} />;
});

AppLink.displayName = 'AppLink';

export default AppLink;
