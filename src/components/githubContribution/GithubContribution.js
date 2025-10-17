import React from "react";
import "./GithubContribution.scss";
import ContributionGraph from "./ContributionGraph";

const GithubContribution = ({ contribution, isDark }) => {
  return (
    <div className={isDark ? "dark-card contribution-card" : "contribution-card"}>
      <h2>{contribution.contributionCalendar.totalContributions} contributions in the last year</h2>
      <ContributionGraph 
        weeks={contribution.contributionCalendar.weeks} 
        isDark={isDark}
      />
    </div>
  );
};

export default GithubContribution;
