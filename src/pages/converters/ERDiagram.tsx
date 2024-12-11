import React, { useState } from "react";
import CodeEditor from "../../components/editor/CodeEditor";

const ERDiagram: React.FC = () => {
  const [code, setCode] = useState<string | undefined>();

  console.log("ewhjnfiqwnwkej", code);

  const handleCodeChange = (value: string | undefined) => {
    setCode(value);
  };

  return <section className="flex">
    <div className="w-[100%]">
    <CodeEditor handleCodeChange={handleCodeChange} />
    </div>
    <div></div>
  </section>;
};

export default ERDiagram;
