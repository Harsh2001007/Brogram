import { workoutProgram as training_plan } from "../utils/index.js";
import WorkoutCard from "./WorkoutCard.jsx";

function Grid() {
  const isLocked = false;
  const selectedWorkout = 0;
  return (
    <div className="training-grid-plan">
      {Object.keys(training_plan).map((item, index) => {
        const type =
          index % 3 === 0 ? "Push" : index % 3 === 1 ? "Pull" : "Legs";

        const trainingPlan = training_plan[index];
        const dayNum = index / 8 <= 1 ? "0" + (index + 1) : index + 1;
        const icon =
          index % 3 === 0 ? (
            <i className="fa-solid fa-dumbbell"></i>
          ) : index % 3 === 1 ? (
            <i className="fa-solid fa-weight-hanging"></i>
          ) : (
            <i className="fa-solid fa-bolt"></i>
          );

        if (index == selectedWorkout) {
          return (
            <WorkoutCard
              trainingPlan={trainingPlan}
              index={index}
              type={type}
              icon={icon}
              dayNum={dayNum}
            />
          );
        }
        return (
          <button key={index}>
            <div className="plan-card-header">
              <p>Day {dayNum}</p>
            </div>

            {isLocked ? <i className="fa-solid fa-lock"></i> : icon}

            <div className="plan-card-header">
              <h4>
                <b>{type}</b>
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default Grid;
