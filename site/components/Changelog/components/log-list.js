/** @jsx jsx */

import React from "react";
import ReactMarkdown from "react-markdown";
import { color, jsx, radii, spacing } from "@elemental-ui/core";

import filterChangelog from "../utils/filter-changelog";
import divideChangelog from "../utils/divide-changelog";

function getVersion(str) {
  return str.match(/^(\d+\.\d+\.\d+)/);
}

const Heading = ({ children, href }) => {
  const childrenArray = React.Children.toArray(children);
  const title = childrenArray[0];
  const version = getVersion(title.toString());

  // wrap children if they can't be rendered e.g. array
  if (childrenArray.length !== 1) return <div>{children}</div>;
  if (typeof title !== "string") return <div>{children}</div>;
  if (!version) return <div>{children}</div>;

  const versionNumber = version[1];
  const versionDate = version[2];
  const anchorProps = {
    href: href || "",
    rel: "noopener noreferrer",
    style: { fontWeight: 500 },
    target: "_blank"
  };
  return (
    <h3>
      {href ? <a {...anchorProps}>{versionNumber}</a> : versionNumber}
      {versionDate ? <small> &mdash; {versionDate}</small> : null}
    </h3>
  );
};

export default class LogList extends React.Component {
  state = {
    currentPage: 1
  };

  static defaultProps = {
    getUrl: () => null,
    changelog: ""
  };

  handlePageChange = (_e, newPage) => {
    this.setState({ currentPage: newPage });
  };

  render() {
    const {
      changelog,
      getUrl,
      range,
      packageName,
      entriesPerPage
    } = this.props;
    const logs = divideChangelog(changelog);
    let filteredLogs = filterChangelog(logs, range);

    if (entriesPerPage) {
      const { currentPage } = this.state;

      filteredLogs = filteredLogs.filter(
        (_v, i) =>
          i >= (currentPage - 1) * entriesPerPage &&
          i < currentPage * entriesPerPage
      );
    }

    let currentMajor = "0";

    return (
      <div>
        {!filteredLogs.length ? (
          <div
            css={{
              borderRadius: radii.small,
              backgroundColor: color.N100,
              color: color.bad,
              marginTop: spacing.medium,
              padding: spacing.large,
              textAlign: "center"
            }}
          >
            No matching versions &mdash; please try again.
          </div>
        ) : (
          filteredLogs.map((v, i) => {
            const major = v.version.substr(0, 1);
            const majorHasChanged = currentMajor !== major;
            currentMajor = major;
            const href = getUrl(v.version);

            return (
              <div
                key={`${v.version}-${i}`}
                css={[
                  majorHasChanged && {
                    "&:not(:first-of-type)": {
                      borderTop: `1px dotted ${color.N300}`,
                      marginTop: spacing.large,
                      paddingTop: spacing.medium
                    }
                  }
                ]}
              >
                <ReactMarkdown
                  escapeHtml
                  source={v.md}
                  renderers={{
                    Heading: props => (
                      <Heading
                        packageName={packageName}
                        href={href}
                        {...props}
                      />
                    )
                  }}
                />
              </div>
            );
          })
        )}
      </div>
    );
  }
}
