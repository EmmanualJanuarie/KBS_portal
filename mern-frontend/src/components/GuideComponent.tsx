/**
 * Fabricates the layout of the Guide component
 * @function GuideComponent
 * @returns tsx script to render in the layout.
 */


export default function GuideComponent(){

    return(
       <div className="w-full px-5 py-60">
      <h1 className="text-white font-bold text-center text-5xl md:text-6xl py-8">
        <span className="heading-background-effect-1 px-5 py-3">
          How We Work
        </span>
      </h1>

      <div className="grid lg:grid-col-3 md:grid-cols-3 sm:grid-col-1 gap-10 items-center w-full px-20 ">
  {[
    { 
      num: 1, 
      heading: "Request a Quote", 
      subtext: "Choose the courses and number of employees, then submit your request to get a tailored quote." 
    },
    { 
      num: 2, 
      heading: "We Set Up Accounts", 
      subtext: "Once confirmed, we create accounts for your employees and assign them to the selected courses." 
    },
    { 
      num: 3, 
      heading: "Complete Training", 
      subtext: "Employees log in, complete their courses, and receive digital certificates upon completion." 
    }
  ].map((step, index) => (
    <div
      key={step.num}
      className={`bg-white/95 shadow-lg rounded-2xl p-8 max-w-md text-center flex flex-col items-center
        ${index % 2 !== 0 ? "w-full" : "w-full"}`}
    >
      {/* Number */}
      <div className="text-3xl font-bold text-yellow-600 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {step.num}
      </div>

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">{step.heading}</h2>

      {/* Subtext */}
      <p className="text-gray-700">{step.subtext}</p>
    </div>
  ))}
</div>
    </div>
    );
}