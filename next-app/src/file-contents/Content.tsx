import dynamic from 'next/dynamic';
import React from 'react';

const ComponentMap: { [key: string]: React.ComponentType } = {
  toto_content: dynamic(() => import('./Toto').then((mod) => mod.default)),
};

export default function Content({ content }: { content: string }) {
  const Component = ComponentMap[content];
  return <Component />;
}
