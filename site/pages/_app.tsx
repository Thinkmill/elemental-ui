/** @jsx jsx */

import App from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container } from "@elemental-ui/container";
import { Core, color, jsx, spacing } from "@elemental-ui/core";
import { CancelIcon } from "@elemental-ui/icon/CancelIcon";
import { DotsIcon } from "@elemental-ui/icon/DotsIcon";
import { useMediaQuery } from "@elemental-ui/utils";
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

let componentSections = ["foundations", "layout", "forms", "visual"];

const nav: { [key: string]: { href: string; name: string }[] } = {
  about: [
    {
      name: "introduction",
      href: "/"
    }
  ],
  foundations: [],
  layout: [],
  forms: [],
  visual: []
};

let modules = require
  // @ts-ignore
  .context("../../packages", true, /\.\/[a-z0-9-]+\/package\.json/);

modules.keys().forEach((moduleId: string) => {
  let pkg = modules(moduleId);
  if (
    !pkg.docs ||
    !pkg.docs.section ||
    !componentSections.includes(pkg.docs.section)
  ) {
    throw new Error(
      `Please add a docs object in the package.json for ${moduleId} with a section field which is one of ${componentSections}`
    );
  }
  let name = pkg.name.replace("@elemental-ui/", "");
  nav[pkg.docs.section].push({
    name,
    href: `/component/${name}`
  });
});

class MyApp extends App<{}, {}, { navIsOpen: boolean }> {
  state = { navIsOpen: false };
  toggleNav = () => {
    this.setState(s => ({ navIsOpen: !s.navIsOpen }));
  };
  render() {
    const { Component, pageProps } = this.props;
    const { navIsOpen } = this.state;

    return (
      <Core>
        <Layout>
          <Nav>
            <NavHeader isOpen={navIsOpen} toggleNav={this.toggleNav} />
            <NavList isOpen={navIsOpen}>
              {Object.keys(nav).map(group => (
                <NavGroup key={group} title={group}>
                  {nav[group].map(page => (
                    <NavItem key={page.name} href={page.href}>
                      {page.name}
                    </NavItem>
                  ))}
                </NavGroup>
              ))}
            </NavList>
          </Nav>
          <Main>
            <Container>
              <Component {...pageProps} />
            </Container>
          </Main>
        </Layout>
      </Core>
    );
  }
}

// Styled Components
// ------------------------------

const SIDEBAR_WIDTH = 240;

const Layout = (props: HTMLAttributes<HTMLElement>) => {
  const { mq } = useMediaQuery();
  return (
    <div
      css={mq({
        display: "flex",
        flexDirection: ["column", null, "row"],
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
      })}
      {...props}
    />
  );
};
const Nav = (props: HTMLAttributes<HTMLElement>) => {
  const { mq } = useMediaQuery();

  return (
    <aside
      css={mq({
        bottom: 0,
        fontSize: 18,
        overflowY: "auto",
        position: [null, null, "fixed"],
        top: 0,
        width: ["100%", "100%", SIDEBAR_WIDTH],
        backgroundColor: color.neutral100
      })}
      {...props}
    />
  );
};
const NavGroup = ({
  children,
  title,
  ...props
}: {
  children: ReactNode;
  title: string;
}) => (
  <div css={{ marginBottom: spacing.large }}>
    <NavGroupTitle>{title}</NavGroupTitle>
    {children}
  </div>
);
const NavHeader = ({
  isOpen,
  toggleNav,
  ...props
}: {
  isOpen: boolean;
  toggleNav: () => void;
}) => {
  const { mq } = useMediaQuery();
  const Icon = isOpen ? CancelIcon : DotsIcon;

  return (
    <div
      css={mq({
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        height: [60, 60, null],
        paddingLeft: [spacing.medium, spacing.medium, spacing.large],
        paddingRight: [spacing.medium, spacing.medium, spacing.large]
      })}
      {...props}
    >
      <svg
        width="129"
        height="35"
        xmlns="http://www.w3.org/2000/svg"
        fill="#E30613"
      >
        <path d="M119.42 2.06c3.78 0 6.84 3.1 6.84 6.84v17.18c0 3.78-3.09 6.84-6.84 6.84H95.4V8.9c0-3.78 3.09-6.84 6.84-6.84h17.18zm0-2.06h-17.18c-4.9 0-8.9 4-8.9 8.9v26.08h26.08c4.9 0 8.9-4 8.9-8.9V8.9c-.03-4.9-4-8.9-8.9-8.9zM94.18 33.95V8.9c.0026-2.08644.8327-4.08667 2.308-5.56201 1.4753-1.47534 3.4756-2.30534 5.562-2.30799h17.18c2.088 0 4.091.82884 5.568 2.30446 1.478 1.47563 2.309 3.47737 2.312 5.56554v17.18c-.003 2.0882-.834 4.0899-2.312 5.5655-1.477 1.4757-3.48 2.3045-5.568 2.3045H94.18zm9.8-25.27v17.56h3.1V20.1h3.87l4.32 6.13h3.68l-4.75-6.66c2.44-.68 4.16-2.43 4.16-5.3v-.07c0-1.53-.53-2.81-1.47-3.78-1.12-1.1-2.84-1.75-5.06-1.75h-7.84l-.01.01zm7.63 8.72h-4.53v-5.9h4.5c2.31 0 3.65 1.02 3.65 2.9v.06c0 1.78-1.4 2.94-3.62 2.94zM11.25 32.89l-4.31-6.1H3.06v6.13H0V15.37h7.81c1 0 1.9.12 2.72.37.81.25 1.5.63 2.06 1.1.56.46 1 1.06 1.28 1.74.31.69.44 1.47.44 2.31 0 1.47-.38 2.63-1.16 3.5-.8058.9016-1.8599 1.5451-3.03 1.85l4.75 6.65h-3.62zm-.07-11.8c0-.98-.3-1.73-.96-2.2-.78992-.546-1.7421-.8069-2.7-.74H3.07v5.9H7.6c.94487.0496 1.87672-.2374 2.63-.81.65-.53.96-1.25.96-2.16l-.01.01zm8.16 6.27c.19 1.1.62 1.9 1.31 2.5.69.56 1.53.87 2.5.87.75 0 1.4-.12 1.97-.4.56-.28 1.1-.66 1.62-1.19l1.78 1.6c-.6372.741-1.4113 1.3522-2.28 1.8-.87.44-1.93.7-3.15.7-1.7922.0211-3.5205-.6652-4.81-1.91-.6306-.619-1.1215-1.3657-1.44-2.19-.6955-1.7636-.7169-3.7216-.06-5.5.2867-.8078.7327-1.5498 1.3116-2.182.5789-.6321 1.2789-1.1415 2.0584-1.498.8155-.3708 1.7044-.552 2.6-.53.9566-.0202 1.9058.171 2.78.56.78.37 1.46.9 1.96 1.56.53.66.94 1.4 1.2 2.28.27.87.4 1.78.4 2.72v.4c0 .13-.03.28-.03.44h-9.72v-.03zm6.78-2c-.0593-.4632-.1666-.919-.32-1.36-.3032-.8224-.9122-1.4959-1.7-1.88-.4-.19-.83-.25-1.33-.25-.94 0-1.72.31-2.32.97-.6357.701-1.0284 1.5882-1.12 2.53h6.78l.01-.01zm17.15 5.37c-.6335.7273-1.3964 1.3309-2.25 1.78-.9217.4238-1.9196.6564-2.9336.6839-1.0141.0275-2.0231-.1507-2.9664-.5239-.8199-.3303-1.5637-.8243-2.1862-1.4519-.6224-.6276-1.1103-1.3755-1.4338-2.1981-.3606-.8457-.5465-1.7556-.5465-2.675 0-.9194.1859-1.8293.5465-2.675.34-.84.8-1.56 1.43-2.21.6303-.6319 1.373-1.1407 2.19-1.5.8665-.3799 1.804-.5708 2.75-.56 1.25 0 2.28.21 3.12.62.81.4 1.56.97 2.16 1.66l-1.88 2.03c-.4388-.471-.9442-.8753-1.5-1.2-.594-.3237-1.2639-.4826-1.94-.46-.5154-.0008-1.0247.1105-1.4927.3264-.468.2159-.8834.531-1.2173.9236-.6899.8472-1.0645 1.9075-1.06 3 0 .6.09 1.15.28 1.68.2635.7585.7564 1.4162 1.4104 1.8821.654.4658 1.4367.7167 2.2396.7179.72 0 1.34-.16 1.9-.47.5612-.3305 1.0786-.7303 1.54-1.19l1.84 1.81zm14.65 2.16h-3.5l-4-5.69-1.84 1.9v3.79h-3.06V14.62h3.06v10.93l5.5-5.87h3.69l-5.28 5.37 5.43 7.84zm14.47-6.6c.0011.926-.179 1.8432-.53 2.7-.3496.8121-.8482 1.5515-1.47 2.18-.6703.6653-1.4667 1.1902-2.3424 1.5439-.8757.3538-1.8132.5292-2.7576.5161-1 0-1.93-.19-2.77-.53-.8349-.3289-1.5912-.8298-2.22-1.47-.9721-.9629-1.6321-2.1958-1.8942-3.5387-.2622-1.3429-.1144-2.7335.4242-3.9913.3358-.8325.8355-1.589 1.4694-2.2246.6339-.6356 1.389-1.1373 2.2206-1.4754 1.7988-.737 3.8134-.7477 5.62-.03 1.2559.5181 2.33 1.397 3.0865 2.5255s1.1614 2.4559 1.1635 3.8145v-.02zm-3.06.04c0-.6-.1-1.13-.32-1.66-.1779-.5053-.4579-.9685-.8226-1.3607-.3648-.3923-.8064-.7052-1.2974-.9193-.7512-.3328-1.5871-.425-2.3928-.2639-.8057.1612-1.5418.5677-2.1072 1.1639-.6895.8589-1.0569 1.9318-1.0386 3.0331.0182 1.1012.421 2.1614 1.1386 2.9969.555.621 1.2946 1.0474 2.1101 1.2166.8154.1693 1.6637.0723 2.4199-.2766.4777-.2083.9057-.5158 1.2556-.9019.35-.3862.6139-.8423.7744-1.3381.18-.54.28-1.1.28-1.7v.01zm8.71 6.56h-3.06V19.68h3.06l-.03 2.06c.4356-.6497.9883-1.2127 1.63-1.66.65-.47 1.5-.68 2.5-.68 1.5 0 2.65.46 3.46 1.37.82.9 1.22 2.15 1.22 3.72v8.4h-3.06v-7.5c0-1.03-.25-1.84-.72-2.37-.2598-.2844-.5791-.508-.9351-.6549-.3561-.147-.7402-.2136-1.1249-.1951-.87 0-1.6.29-2.12.88-.5726.6643-.8664 1.5242-.82 2.4v7.44z M94.18 33.95V8.9c.0026-2.08644.8327-4.08667 2.308-5.56201 1.4753-1.47534 3.4756-2.30535 5.562-2.30799h17.18c2.088 0 4.091.82884 5.568 2.30446 1.478 1.47563 2.309 3.47737 2.312 5.56554v17.18c-.003 2.0882-.834 4.0899-2.312 5.5655-1.477 1.4757-3.48 2.3045-5.568 2.3045H94.18zm9.8-25.27v17.56h3.1V20.1h3.87l4.32 6.13h3.68l-4.75-6.66c2.44-.68 4.16-2.43 4.16-5.3v-.07c0-1.53-.53-2.81-1.47-3.78-1.12-1.1-2.84-1.75-5.06-1.75h-7.84l-.01.01zm7.63 8.72h-4.53v-5.9h4.5c2.31 0 3.65 1.02 3.65 2.9v.06c0 1.78-1.4 2.94-3.62 2.94zM11.25 32.89l-4.31-6.1H3.06v6.13H0V15.37h7.81c1 0 1.9.12 2.72.37.81.25 1.5.63 2.06 1.1.56.46 1 1.06 1.28 1.74.31.69.44 1.47.44 2.31 0 1.47-.38 2.63-1.16 3.5-.8058.9016-1.8599 1.5451-3.03 1.85l4.75 6.65h-3.62zm-.07-11.8c0-.98-.3-1.73-.96-2.2-.78992-.546-1.7421-.8069-2.7-.74H3.07v5.9H7.6c.94487.0495 1.87672-.2374 2.63-.81.65-.53.96-1.25.96-2.16l-.01.01zm8.16 6.27c.19 1.1.62 1.9 1.31 2.5.69.56 1.53.87 2.5.87.75 0 1.4-.12 1.97-.4.56-.28 1.1-.66 1.62-1.19l1.78 1.6c-.6372.741-1.4113 1.3522-2.28 1.8-.87.44-1.93.7-3.15.7-1.7922.0211-3.5205-.6652-4.81-1.91-.6306-.619-1.1215-1.3657-1.44-2.19-.6955-1.7636-.7169-3.7216-.06-5.5.2867-.8078.7327-1.5498 1.3116-2.182.5789-.6321 1.2789-1.1415 2.0584-1.498.8155-.3708 1.7044-.552 2.6-.53.9566-.0202 1.9058.171 2.78.56.78.37 1.46.9 1.96 1.56.53.66.94 1.4 1.2 2.28.27.87.4 1.78.4 2.72v.4c0 .13-.03.28-.03.44h-9.72v-.03zm6.78-2c-.0593-.4632-.1666-.919-.32-1.36-.3032-.8224-.9122-1.4959-1.7-1.88-.4-.19-.83-.25-1.33-.25-.94 0-1.72.31-2.32.97-.6357.701-1.0284 1.5882-1.12 2.53h6.78l.01-.01zm17.15 5.37c-.6335.7273-1.3964 1.3309-2.25 1.78-.9217.4237-1.9196.6564-2.9336.6839-1.0141.0275-2.0231-.1507-2.9664-.5239-.8199-.3303-1.5637-.8243-2.1862-1.4519-.6224-.6276-1.1103-1.3755-1.4338-2.1981-.3606-.8457-.5465-1.7556-.5465-2.675 0-.9194.1859-1.8293.5465-2.675.34-.84.8-1.56 1.43-2.21.6303-.632 1.373-1.1407 2.19-1.5.8665-.3799 1.804-.5708 2.75-.56 1.25 0 2.28.21 3.12.62.81.4 1.56.97 2.16 1.66l-1.88 2.03c-.4388-.471-.9442-.8753-1.5-1.2-.594-.3237-1.2639-.4826-1.94-.46-.5154-.0008-1.0247.1105-1.4927.3264-.468.2158-.8834.531-1.2173.9236-.6899.8472-1.0645 1.9075-1.06 3 0 .6.09 1.15.28 1.68.2635.7585.7564 1.4162 1.4104 1.8821.654.4658 1.4367.7167 2.2396.7179.72 0 1.34-.16 1.9-.47.5612-.3305 1.0786-.7303 1.54-1.19l1.84 1.81zm14.65 2.16h-3.5l-4-5.69-1.84 1.9v3.79h-3.06V14.62h3.06v10.93l5.5-5.87h3.69l-5.28 5.37 5.43 7.84zm14.47-6.6c.0011.9259-.179 1.8432-.53 2.7-.3496.8121-.8482 1.5515-1.47 2.18-.6703.6653-1.4667 1.1902-2.3424 1.5439-.8757.3537-1.8132.5292-2.7576.5161-1 0-1.93-.19-2.77-.53-.8349-.329-1.5912-.8298-2.22-1.47-.9721-.9629-1.6321-2.1958-1.8942-3.5387-.2622-1.3429-.1144-2.7335.4242-3.9913.3358-.8325.8355-1.589 1.4694-2.2246.6339-.6356 1.389-1.1373 2.2206-1.4754 1.7988-.737 3.8134-.7477 5.62-.03 1.2559.5181 2.33 1.397 3.0865 2.5255s1.1614 2.4559 1.1635 3.8145v-.02zm-3.06.04c0-.6-.1-1.13-.32-1.66-.1779-.5053-.4579-.9685-.8226-1.3607-.3648-.3923-.8064-.7052-1.2974-.9193-.7512-.3328-1.5871-.425-2.3928-.2639-.8057.1612-1.5418.5677-2.1072 1.1639-.6895.8589-1.0569 1.9318-1.0386 3.0331.0182 1.1012.421 2.1614 1.1386 2.9969.555.621 1.2946 1.0474 2.1101 1.2166.8154.1693 1.6637.0723 2.4199-.2766.4777-.2083.9057-.5158 1.2556-.9019.35-.3862.6139-.8423.7744-1.3381.18-.54.28-1.1.28-1.7v.01zm8.71 6.56h-3.06V19.68h3.06l-.03 2.06c.4356-.6497.9883-1.2127 1.63-1.66.65-.47 1.5-.68 2.5-.68 1.5 0 2.65.46 3.46 1.37.82.9 1.22 2.15 1.22 3.72v8.4h-3.06v-7.5c0-1.03-.25-1.84-.72-2.37-.2598-.2844-.5791-.508-.9351-.6549-.3561-.147-.7402-.2136-1.1249-.1951-.87 0-1.6.29-2.12.88-.5726.6643-.8664 1.5242-.82 2.4v7.44z" />
      </svg>
      <button
        onClick={toggleNav}
        css={mq({
          background: 0,
          border: 0,
          display: ["block", "block", "none"],
          outline: 0
        })}
      >
        <Icon />
      </button>
    </div>
  );
};
const NavList = ({
  isOpen,
  ...props
}: { isOpen: boolean } & HTMLAttributes<HTMLElement>) => {
  const { mq } = useMediaQuery();
  const show = isOpen ? "block" : "none";

  return (
    <div
      css={mq({
        display: [show, show, "block"],
        marginBottom: spacing.large
      })}
      {...props}
    />
  );
};
const NavGroupTitle = (props: HTMLAttributes<HTMLElement>) => (
  <div
    css={{
      color: color.blue400,
      fontWeight: "bold",
      marginBottom: spacing.medium,
      paddingLeft: spacing.large,
      paddingRight: spacing.large
    }}
    {...props}
  />
);
const NavItem = ({
  children,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLElement> & { href: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href.indexOf("/component/") === 0 ? "/component/[component]" : href}
      as={href}
      passHref
    >
      <a
        css={{
          alignItems: "center",
          color: color.red400,
          cursor: "pointer",
          display: "flex",
          fontWeight: "bold",
          height: spacing.large,
          marginLeft: spacing.large,
          paddingLeft: spacing.large,
          paddingRight: spacing.large,
          textDecoration: "none"
        }}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};
const Main = (props: HTMLAttributes<HTMLElement>) => {
  const { mq } = useMediaQuery();
  return (
    <main
      css={mq({
        flex: 1,
        marginLeft: [null, null, SIDEBAR_WIDTH],
        minWidth: 1, // resolves collapsing issues in children
        paddingBottom: spacing.xlarge
      })}
      {...props}
    />
  );
};

export default MyApp;
