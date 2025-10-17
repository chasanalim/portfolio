import React from "react";
import "./ContributionGraph.scss";

const ContributionGraph = ({ weeks, isDark }) => {
  const getColor = (count) => {
    if (count === 0) return isDark ? '#161b22' : '#ebedf0';
    if (count <= 3) return '#9be9a8';
    if (count <= 6) return '#40c463';
    if (count <= 9) return '#30a14e';
    return '#216e39';
  };

  return (
    <div className="contribution-graph">
      <div className="months">
        {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map(month => (
          <div key={month} className="month">{month}</div>
        ))}
      </div>
      <div className="days">
        {['Mon', 'Wed', 'Fri'].map(day => (
          <div key={day} className="day">{day}</div>
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
        {[0, 3, 6, 9, 12].map(count => (
          <div
            key={count}
            className="legend-cell"
            style={{ backgroundColor: getColor(count) }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export default ContributionGraph;