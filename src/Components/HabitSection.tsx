const cardText = [
  "Cieszenie się chwilą",
  "Wdzięczność",
  "Zapisywanie faktów",
  "Pozytywne stwierdzenia",
  "Picie wody rano",
  "Technika oddechowa 4/6",
];

const HabitSection = () => {
  return (
    <section className="bg-brandGreen  flex flex-col justify-around px-6 py-24">
      <div className="flex flex-col items-center font-bold text-xl gap-6">
        <h3 className="text-white">Zbadaliśmy takie mikro-nawyki jak:</h3>
        <div className="flex flex-wrap gap-2  justify-center">
          {cardText.map((card, index) => (
            <div
              className="bg-gray-200 rounded-lg w-[192px] h-[256px] relative"
              key={index}
            >
              <p className="absolute bottom-0 text-sm h-1/6 bg-white w-full rounded-lg text-center">
                {card}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white flex items-center flex-col h-1/3 pt-6">
        <h3 className="font-bold text-xl">Co chcieliśmy sprawdzić?</h3>
        <div className="flex justify-around flex-wrap text-center w-full min-h-32 items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            aliquid
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            aliquid
          </p>
        </div>
      </div>
    </section>
  );
};

export { HabitSection };
