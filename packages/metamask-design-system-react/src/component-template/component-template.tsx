import React from 'react';

export type ComponentTemplateProps = {
  exampleProp: string;
};

const ComponentTemplate: React.FC<ComponentTemplateProps> = ({
  exampleProp,
}) => {
  return <div>{exampleProp}</div>;
};

export default ComponentTemplate;
