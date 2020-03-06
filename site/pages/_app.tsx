/** @jsx jsx */

import App from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container } from "@elemental-ui/container";
import { Core, color, jsx, spacing } from "@elemental-ui/core";
import CancelIcon from "@elemental-ui/icon/X";
import DotsIcon from "@elemental-ui/icon/X";
import { useMediaQuery } from "@elemental-ui/utils";
import { Heading } from "@elemental-ui/typography";
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
  .context("../../elemental-ui", true, /\.\/[a-z0-9-]+\/package\.json/);

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
      <Heading level={2}>Elemental</Heading>
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
      color: color.purple400,
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
          color: color.pink400,
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
