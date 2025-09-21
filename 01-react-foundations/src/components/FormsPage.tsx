import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};
export const FormsPage = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "ismaeldcent@gmail.com",
      password: "12345",
    },
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log(myForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formularios</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Email" {...register("email")} />
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </>
  );
};
