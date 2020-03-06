/** @jsx jsx */

import { jsx, radii } from "@elemental-ui/core";

import Highlight, { defaultProps } from "prism-react-renderer";

import { theme } from "./prism-theme";

import { ReactLive } from "./react-live";

export const CodeBlock = ({
  code,
  className,
  live,
  render,
  scope
}: {
  code: string;
  className: string;
  live: boolean;
  render: any;
  scope: { [key: string]: any };
}) => {
  const language = className.replace(/language-/, "");

  if (live) {
    return <ReactLive code={code} render={render} scope={scope} />;
  }

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={code}
      language={language as any}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            borderRadius: radii.small,
            padding: 10,
            maxWidth: "100%",
            overflow: "auto"
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
