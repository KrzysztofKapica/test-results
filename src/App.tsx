import { AmbassadorsSection } from "./Components/AmbassadorsSection";
import { HabitSection } from "./Components/HabitSection";
import { NewsletterSection } from "./Components/Newsletter/NewsletterSection";
import { PatronitesSections } from "./Components/PatronitesSection";

const App = () => {
  return (
    <>
      <HabitSection />
      <NewsletterSection />
      <AmbassadorsSection />
      <PatronitesSections />
    </>
  );
};

export { App };
