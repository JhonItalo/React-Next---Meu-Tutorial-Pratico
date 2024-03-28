"use client";

import { useForm } from "react-hook-form";

type FormData = {
    email: string;
    senha: string;
};

const ReactHookForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>();

    const handleSubmitform = (data: FormData) => {
        console.log("data", data);
    };

    return (
        <form onSubmit={handleSubmit(handleSubmitform)}>
            <label htmlFor='email'>
                email
                <input
                    {...register("email", { required: true })}
                    required
                    type='text'
                    placeholder='Digite seu e-mail'
                    id='email'
                />
                {errors.email && <p>campo obrigatorio</p>}
            </label>
            <label htmlFor='senha'>
                senha
                <input {...register("senha")} required type='password' placeholder='Digite sua senha' id='senha' />
            </label>
            <button type='submit'>submeter</button>
        </form>
    );
};

export default ReactHookForm;
