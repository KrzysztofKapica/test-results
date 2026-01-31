import XYZLogo from "../assets/img/XYZ-Logo.png";
import TaflaLogo from "../assets/img/Tafla-Logo.png";

//Styles
const textStyles = "text-sm/6";
const containerSideStyles =
  "flex flex-col items-center justify-between h-full max-w-80 text-center flex-wrap p-6 gap-5";
const headingStyles = "font-bold text-xl";

const PatronitesSections = () => {
  return (
    <section className="bg-brandBlue text-white flex justify-around  flex-wrap px-16 py-2 bg-[url('src/assets/backgrounds/dots.svg')]">
      {/* Left side */}
      <div className={containerSideStyles}>
        <h3 className={headingStyles}>Patron medialny</h3>
        <p className={textStyles}>
          Patronem medialnym naszego badania jest XYZ.
        </p>
        <a href="https://xyz.pl/">
          <img src={XYZLogo} alt="XYZ logo" className="w-48 " />
        </a>
        <p className={textStyles}>
          Jesteśmy dumni, że najbardziej rzetelne medium w Polsce wspiera nasze
          inicjatywy!
        </p>
        <p className={textStyles}>
          Jeśli jesteście studentami/wykładowcami - zapraszamy do{" "}
          <a className="underline" href="https://xyz.pl/kampus/">
            bezpłatnej subskrypcji w ramach Kampus XYZ.
          </a>
        </p>
        <p className={textStyles}>
          Zero click-baitów i polaryzacji - tylko wartościowe treści!
        </p>
      </div>
      {/* Right side */}
      <div className={containerSideStyles}>
        <h3 className={headingStyles}>Patron merytoryczny</h3>
        <p className={textStyles}>
          Merytorycznie współtworzy z nami badanie Fundacja Tafla.
        </p>
        <a href="https://fundacjatafla.pl/">
          <img src={TaflaLogo} alt="Tafla logo" className="w-24" />
        </a>
        <p className={textStyles}>
          Wspaniali eksperci którzy oferują bezpłatne wsparcie psychologiczne
          osobom w kryzysie i na co dzień stosują niektóre z badanych nawyków w
          swojej pracy!
        </p>
      </div>
    </section>
  );
};

export { PatronitesSections };
