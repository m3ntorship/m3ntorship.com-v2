import type { ReactElement } from 'react';
import * as React from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  // Put Header or Footer Here
  return <>{children}</>;
}
