import light from "../../assets/img/Vector.png";
import { Form } from "./Form";

const NewsletterSection = () => {
  return (
    <section className="bg-brandPurple flex justify-center py-24 px-4 bg-[url('src/assets/backgrounds/dots.svg')]">
      <div className="bg-white rounded-xl  flex flex-col justify-around gap-5 max-w-[400px] p-6">
        <div className="flex">
          <div>
            <img src={light} alt="light icon" className="p-6" />
          </div>
          <div>
            <p className="font-bold text-lg">Subskrybuj nasz</p>
            <p className="font-bold text-[#198F51] text-xl">newsletter</p>
            <p>aby poznać wyniki badania.</p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export { NewsletterSection };
