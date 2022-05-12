import React from "react";
import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";
import EmailButton from "./EmailButton";

const Footer = () => {
  return (
    <footer className="mb-4 font-theme text-center text-xl text-white">
      <p className="mb-4">Yes, I did name these myself :)</p>
      <p className="mb-4">
        View{" "}
        <a
          href="https://github.com/iferraro/isaacs-colors"
          className="underline"
        >
          this site's code
        </a>{" "}
        on GitHub
      </p>
      <div className="flex justify-center">
        <GitHubButton />
        <LinkedInButton />
        <EmailButton />
      </div>
    </footer>
  );
};

export default Footer;
