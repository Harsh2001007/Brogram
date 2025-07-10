import React from "react";

function Hero() {
  return (
    <>
      <h5>Complete this training program if you want to...</h5>
      <ol className="benefits-list">
        <li>Follow a simple program with guaranteed results</li>
        <li>Get fit, healthy, strong and shredded</li>
        <li>Learn more about gym, training and techniques</li>
        <li>Become a lifetime gym bro</li>
      </ol>
      <h3>The rules</h3>
      <p>
        To complete this program, you <b>MUST</b> follow these 3 simple steps
      </p>
      <ul className="rules-list">
        <li className="rule-item">
          <p>
            <b>Rest</b>
          </p>
          <p>Ensure that you are taking rest days when necessary</p>
        </li>
        <li className="rule-item">
          <p>
            <b>Reps</b>
          </p>
          <p>
            Every rep is a pause rep following a{" "}
            <abbr title="2 seconds down - 2 seconds pause - 2 seconds up">
              2 - 2 - 2 tempo
            </abbr>
          </p>
        </li>
        <li className="rule-item">
          <p>
            <b>Weight*</b>
          </p>
          <p>
            Select a maximum weight that allow you to complete the set with good
            forms
          </p>
        </li>
      </ul>
      <small>
        * The first and second set should be 75% and 85% of your working weight
        used for the last two sets.
      </small>
      <h3>The Training Plan</h3>
      <p>
        This training plan uses a structure known as <b>bro split</b> and
        follows this rotattion ⬇️
      </p>
      <p>
        <b>
          <i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i>
        </b>
      </p>
      <p>
        Complete all of the workouts below and track your progress along the way
        ✅
      </p>
    </>
  );
}

export default Hero;
