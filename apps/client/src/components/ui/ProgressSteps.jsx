const ProgressSteps = ({ steps, activeSteps }) => {
    return (
      <ul className="w-full flex justify-between items-center">
        <span
          style={{
            width: ((activeSteps.length - 1) / (steps.length - 1)) * 100 + "%",
          }}
          className="absolute inset-x-0 bg-blue-500"
        ></span>
        {steps.map((step, ind) => (
          <li
            key={ind}
            className={`${
              activeSteps.includes(step) ? "active" : ""
            } w-fit p-2 bg-blue-500 rounded-full aspect-square`}
          >
            {step}
          </li>
        ))}
      </ul>
    );
  };
  export default ProgressSteps;