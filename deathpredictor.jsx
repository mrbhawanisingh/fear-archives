import { useState } from "react";

const DeathPredictor = () => {
  const [birthDate, setBirthDate] = useState("");
  const [deathDate, setDeathDate] = useState("");

  const handlePredict = () => {
    const birth = new Date(birthDate);
    const predictionYears = 50 + Math.floor(Math.random() * 30);
    birth.setFullYear(birth.getFullYear() + predictionYears);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const fakeDeathDate = birth.toLocaleDateString("en-US", options);

    setDeathDate(fakeDeathDate);
  };

  return (
    <section className="death-predictor-block">
      <div className="predictor-container">
        <div className="predictor-image">
          <img src={`${process.env.PUBLIC_URL}/5257ca76-8750-43ae-8591-8de744dc5658.jpg`} alt="Death Prediction"/>
          {/* <img src="/5257ca76-8750-43ae-8591-8de744dc5658.jpg" alt="Death Prediction" /> */}
        </div>
        <div className="predictor-content">
          <h2>👁 When Will You Die?</h2>
          <p>
            Based on a real theory by paranormal experts, your death date may already be decided...
          </p>

          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />

          <br />
          <button onClick={handlePredict}>Reveal My Death Date</button>

          {deathDate && (
            <div>
              ☠️ You may leave this world on: <span>{deathDate}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeathPredictor;
