import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="31" cy="31" r="31" fill="black" />
        <path
          d="M40.2814 26.8333L36.4964 37.1141C36.2976 37.6577 35.7724 38.0239 35.1834 38.0239L20.4297 38.0387C19.8407 38.0387 19.3193 38.4011 19.1167 38.9447L16.0857 47.1472C15.7593 48.0311 16.4045 48.9926 17.3574 48.9961C17.3649 48.9961 17.3686 48.9961 17.3761 48.9961H31.5409V48.9851C31.706 48.989 31.8673 48.9961 32.0361 48.9961C40.2664 48.9961 46.94 43.046 46.94 35.7051C46.94 32.0107 45.2519 28.6712 42.5247 26.2638C41.7894 25.6203 40.619 25.9198 40.2814 26.8333Z"
          fill="white"
        />
        <path
          d="M28.0791 23.1684L42.4428 23.1536C43.0317 23.1536 43.5532 22.7912 43.7557 22.2476L46.8542 13.8491C47.1805 12.9652 46.5353 12.0037 45.5825 12C45.575 12 45.5714 12 45.5638 12H31.399V12.0111C31.2339 12.0074 31.0689 12 30.9038 12C22.6735 12 16 17.9503 16 25.2911C16 29.1261 17.8231 32.5802 20.7416 35.0062C21.4844 35.6238 22.6285 35.3242 22.9624 34.4219L26.7662 24.0782C26.965 23.5345 27.4902 23.1721 28.0791 23.1684Z"
          fill="white"
        />
      </svg>

      <span style={{ marginLeft: ".4em", fontWeight: 500 }}>
        Solarium Finance
      </span>
    </>
  ),
  project: {
    link: "https://github.com/solarium-dev/solarium-options",
  },
  chat: {
    link: "https://discord.gg/t5jTyGsj",
  },
  docsRepositoryBase: "https://github.com/solarium-dev/solarium-docs",
  footer: {
    text: "Solarium Finance Documentation",
  },
};

export default config;
