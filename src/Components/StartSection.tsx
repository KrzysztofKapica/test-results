const StartSection = () => {
    return (
      <section className="py-16 bg-white relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[url('src/assets/backgrounds/straight-lines.svg')] before:bg-contain before:bg-repeat before:opacity-30">
        <div className="container mx-auto relative px-8 md:px-4 flex flex-col items-start">
          
            <div className="mt-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="text-brandGraphite">Masz wpływ</span>
                    <br />
                    <span className="text-brandGraphite">na twoje </span>
                    <span className="text-brandBlue">szczęście</span>
                </h2>

                <p className="text-xl md:text-2xl font-bold mb-8">
                    <span className="text-brandGraphite">Zrób to </span>
                    <span className="text-brandBlue">#MałymiKrokami.</span>
                </p>
        
                <a 
                    href="#TODO" 
                    className="bg-brandYellow text-black font-bold text-lg px-4 py-2 rounded-full border-2 border-black hover:opacity-80 transition-colors text-sm -ml-4 shadow-lg" 
                    // plus cien i w lewo - zjustowac tekst, ale ramka moze byc w lewo
                >
                    Dołącz do inicjatywy!
                </a>
                <div className="h-[100px]"></div>
            </div>
        </div>
      </section>
    );
  };
  
  export { StartSection };