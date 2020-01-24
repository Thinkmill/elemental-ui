/** @jsx jsx */

import {
  ButtonHTMLAttributes,
  ComponentProps,
  Fragment,
  HTMLAttributes,
  ReactNode,
  isValidElement,
  useLayoutEffect,
  useMemo,
  useState
} from "react";
// @ts-ignore
import { MDXProvider } from "@mdx-js/react";
import slugify from "slugify";

import { Heading } from "@elemental-ui/typography";
import { color, jsx, spacing } from "@elemental-ui/core";

import { PackageMeta } from "../../components/PackageMeta";
import { CodeBlock } from "../../components/CodeBlock";
import { Changelog } from "../../components/Changelog";
import { props } from "../../components/PropTypes";
import { TabItem, TabList } from "@elemental-ui/tabs";

const Component = ({ name }: { name: string }) => {
  const [section, setSection] = useState("Code");
  if (typeof window !== "undefined") {
    // this is fine because it will be consistent within the server or client(though not between)
    // we need to do this because we want to reset the section back to Code when going to a different component
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
      setSection("Code");
    }, [name]);
  }
  const modules = useMemo(() => {
    let modules = [
      require(`@elemental-ui/${name}/package.json`),
      require(`@elemental-ui/${name}/README.md`),
      (() => {
        try {
          return require(`@elemental-ui/${name}/CHANGELOG.md`);
        } catch (err) {}
      })()
    ].map(x => {
      if (!x) return null;
      // @ts-ignore
      return x.default ? x.default : x;
    });
    return modules;
  }, [name]);

  const [pkg, Readme, changelog] = modules;
  const propsForPkg = (props as any)[name];

  const nav = [
    { display: !!Readme, label: "Code" },
    { display: !!changelog, label: "Changelog" },
    { display: !!propsForPkg, label: "Props" }
  ];

  return (
    <Fragment>
      <Heading level={1} mt="small" mb="large">
        {name}
      </Heading>
      <PackageMeta name={`@elemental-ui/${name}`} version={pkg.version} />
      <TabList key={name}>
        {nav.map(({ display, label }) => {
          if (!display) return null;
          return (
            <TabItem key={label} label={label}>
              {Readme && label === "Code" && (
                <Mdx>
                  <Readme />
                </Mdx>
              )}
              {changelog && label === "Changelog" && (
                <Changelog data={changelog} />
              )}
              {propsForPkg && label === "Props" && (
                <Props props={propsForPkg} key={name} />
              )}
            </TabItem>
          );
        })}
      </TabList>
    </Fragment>
  );
};

function Props({ props }: { props: any }) {
  let keys = Object.keys(props);
  return (
    <div>
      <TabList css={{ overflow: "auto" }}>
        {keys.map(component => {
          return (
            <TabItem key={component} label={component}>
              {props[component]}
            </TabItem>
          );
        })}
      </TabList>
    </div>
  );
}

Component.getInitialProps = async ({
  query: { component }
}: {
  query: { component: string };
}) => {
  return { name: component };
};

// Styled Components
// ------------------------------

const ffMono =
  '"SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace';

const Docs = ({ children }: { children: () => ReactNode }) => children();

let modules = require
  // @ts-ignore
  .context("../../../packages", true, /^\.\/[a-z-0-9]+\/src$/);

let scope: { [key: string]: any } = {
  Docs,
  useState,
  icons: require("@elemental-ui/icon")
};

modules.keys().forEach((moduleId: string) => {
  let mod = modules(moduleId);
  // Why not Object.assign/spread?
  // I want to check that we don't have conflicting keys
  Object.keys(mod).forEach(key => {
    if (key === "default") {
      throw new Error(
        `${moduleId} has a default export, these are not allowed on design system packages because they must share the same namespace for the design system website code editor`
      );
    }
    if (scope[key] !== undefined) {
      throw new Error(
        `${moduleId} has an export named ${key} but another package in the design system has an export with that name, that is not allowed because they must share the same namespace for the design system website code editor`
      );
    }
    scope[key] = mod[key];
  });
});

const components = {
  Docs,
  h1: () => null, // strip the h1
  h2: (props: any) => <AnchoredHeading level={2} {...props} />,
  h3: (props: any) => <AnchoredHeading level={3} {...props} />,
  h4: (props: any) => <AnchoredHeading level={4} {...props} />,
  blockquote: (props: any) => (
    <blockquote
      css={{
        boxShadow: `inset 4px 0 0 ${color.pink500}`,
        marginLeft: -spacing.medium,
        marginBottom: spacing.large,
        marginTop: spacing.large,
        paddingBottom: spacing.small,
        paddingLeft: spacing.medium,
        paddingRight: spacing.medium,
        paddingTop: spacing.small,

        "& > p:first-of-type": {
          marginTop: 0
        },
        "& > p:last-of-type": {
          marginBottom: 0
        }
      }}
      {...props}
    />
  ),
  pre: (props: any) => <Fragment {...props} />, // avoid wrapping live examples in pre tag
  inlineCode: (props: any) => (
    <code
      css={{
        backgroundColor: color.pink100,
        borderRadius: 2,
        color: color.pink500,
        display: "inline-block",
        fontFamily: ffMono,
        fontSize: "0.9em",
        paddingLeft: "0.2em",
        paddingRight: "0.2em"
      }}
      {...props}
    />
  ),
  code: ({ children, ...props }: any) => {
    return <CodeBlock code={children.trim()} scope={scope} {...props} />;
  }
};

const Mdx = (props: any) => <MDXProvider components={components} {...props} />;

function getTextFromReactNode(nodeOrText: any): string {
  if (isValidElement(nodeOrText)) {
    // @ts-ignore
    return getTextFromReactNode(nodeOrText.props.children);
  }

  return nodeOrText;
}

const AnchoredHeading = ({
  children,
  ...props
}: ComponentProps<typeof Heading>) => {
  const text = getTextFromReactNode(children);
  const id = slugify(text, { lower: true });

  return (
    <Heading id={id} mt="large" {...props}>
      {text.toLowerCase()}
      <a
        href={`#${id}`}
        css={{
          alignItems: "center",
          display: "inline-flex",
          color: `${color.neutral400} !important`,
          fontSize: 12,
          fontWeight: "normal",
          marginLeft: 13,
          opacity: 0,
          textDecoration: "none",
          transition: "opacity 150ms",

          "*:hover > &": {
            opacity: 1
          }
        }}
      >
        <svg
          aria-hidden="true"
          height="16"
          fill="currentColor"
          version="1.1"
          viewBox="0 0 16 16"
          width="16"
          css={{ marginRight: 6 }}
        >
          <path
            fillRule="evenodd"
            d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
          />
        </svg>
        link
      </a>
    </Heading>
  );
};

export default Component;
