import { AmbassadorsSection } from "./Components/AmbassadorsSection";
import { HabitSection } from "./Components/HabitSection";
import { NewsletterSection } from "./Components/Newsletter/NewsletterSection";
import { PatronitesSections } from "./Components/PatronitesSection";
import { StartSection } from "./Components/StartSection";
import { TestResultsSection } from "./Components/TestResultsSection";
import Footer from "./Components/layout/Footer/Footer";
import Header from "./Components/layout/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <StartSection />
      <TestResultsSection />
      <HabitSection />
      <NewsletterSection />
      <AmbassadorsSection />
      <PatronitesSections />
      <Footer />
    </>
  );
};

export { App };
