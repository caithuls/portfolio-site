import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-purple-700">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            Created by {` `}
            <a
              className="font-bold no-underline text-white"
              href="http://www.caitlinhulsey.com"
            >
              Caitlin Hulsey
            </a>
          </p>
          <p className="text-white">
            Adapted from{` `}
            <a
              className="font-bold no-underline text-white"
              href="https://www.gatsbyjs.org/starters/taylorbryant/gatsby-starter-tailwind/"
            >
              Gatsby Starter Tailwind
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
