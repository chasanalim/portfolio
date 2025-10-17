import React from "react";
import "./ContributionGraph.scss";

const ContributionGraph = ({ weeks, isDark }) => {
  const getColor = (count) => {
    if (count === 0) return isDark ? "#2f3030ff" : "#eff2f5";
    if (count <= 1) return "#11471bff";
    if (count <= 2) return "#278832ff";
    if (count <= 4) return "#46a551ff";
    if (count <= 7) return "#61c06cff";
    return "#77d193ff";
  };

  return (
    <div className="contribution-graph-wrapper">
      <div className="contribution-graph">
        <div className="months">
          {[
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ].map((month) => (
            <div key={month} className="month">
              {month}
            </div>
          ))}
        </div>
        <div className="days">
          {["Mon", "Wed", "Fri"].map((day) => (
            <div key={day} className="day">
              {day}
            </div>
          ))}
        </div>
        <div className="graph">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="week">
              {week.contributionDays.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="contribution-cell"
                  style={{ backgroundColor: getColor(day.contributionCount) }}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="legend">
          <span>Less</span>
          {[0, 1, 2, 7, 9].map((count) => (
            <div
              key={count}
              className="legend-cell"
              style={{ backgroundColor: getColor(count) }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;