import React from "react";

function WorkoutCard({ trainingPlan, index, type, icon, dayNum }) {
  const { warmup, workout } = trainingPlan || {};

  return (
    <div className="workout-container">
      <div className="workout-card card">
        <div className="plan-card-header">
          <p>Day {dayNum}</p>
          {icon}
        </div>
        <div className="plan-card-header">
          <h2>
            <b>{type} workout</b>
          </h2>
        </div>
      </div>

      <div className="workout-grid">
        <div className="exercise-name">
          <h4>Warmup</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className="weight-input">Max Weights</h6>
        {warmup.map((warmupExercise, warmupIndex) => {
          return (
            <React.Fragment key={warmupIndex}>
              <div className="exercise-name">
                <p>
                  {warmupIndex + 1}. {warmupExercise.name}
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default WorkoutCard;
