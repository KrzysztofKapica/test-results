import arrow from "../../assets/img/arrow.png";
import { useForm } from "react-hook-form";

type FormType = {
  email: string;
  agreement: boolean;
};

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        {errors.email && (
          <p className="text-center text-red-500 text-sm">
            {errors.email.message}
          </p>
        )}
        <input
          {...register("email", {
            required: {
              value: true,
              message: "Email jest wymagany.",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Niepoprawny adres email",
            },
          })}
          placeholder="jan.kowalski@email.com"
          className={`border-2 ${errors.email ? "border-red-500" : "border-black"} rounded-xl w-full placeholder:text-sm px-4 pr-24"`}
        />
        <button
          type="submit"
          className="bg-[#198F51] text-white absolute right-0 rounded-r-xl px-3 cursor-pointer border border-black"
        >
          Subskrybuj
        </button>

        {errors.agreement && (
          <p className="text-center mt-2 text-red-500 text-sm">
            Aby móc subskrybować, musisz wyrazić zgodę.
          </p>
        )}
      </div>

      <label className="text-sm flex  gap-4 cursor-pointer relative py-4">
        <input
          type="checkbox"
          className="opacity-0 absolute pointer-events-none peer"
          {...register("agreement", { required: true })}
        />
        <span
          className={`${errors.agreement && "border-red-500"} size-5 rounded-md inline-block border border-black flex-shrink-0  relative  
            after:content-['✓']
          after:text-[#198F51]
            after:text-lg
            after:absolute
            after:left-1
            after:top-[-5px]
            after:opacity-0
            peer-checked:after:opacity-100 top-1`}
        ></span>
        Wyrażam zgodę na otrzymywanie newslettera Fundacji Szczęśliwsi na podany
        adres e-mail
        <img src={arrow} alt="arrow" className="size-6 absolute right-0" />
      </label>
    </form>
  );
};

export { Form };
