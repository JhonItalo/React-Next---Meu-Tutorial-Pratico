'use client';


import React from 'react';

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signIn } from 'next-auth/react';


type FormData = {
	email: string;
	password: string;
};

const schema = yup
	.object({
		email: yup.string().email('digite email valido').required(),
		password: yup.string().min(8).required(),
	})
	.required();

const Login = () => {
	const router = useRouter()


	const { handleSubmit, register, reset, formState: { errors }, } = useForm<FormData>({
		criteriaMode: 'all',
		mode: 'all',
		resolver: yupResolver(schema),
	});


	const handleSubmitform: SubmitHandler<FormData> = async (data: FormData) => {
		const result = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false
		})

		if (!result) {
			console.log(result)
			return
		}

		router.replace('/')
		reset();
	};

	return (
		<div className='flex flex-col items-center justify-center w-4/5 h-screen'>
			<h1 className='text-3xl mb-6'>Login</h1>

			<form
				className='w-[400px] flex flex-col gap-6'
				onSubmit={handleSubmit(handleSubmitform)}>
				<label
					className='flex flex-col'
					htmlFor='iemail'>
					Email
					<input
						className={`h-12 rounded-md p-2 bg-transparent border border-gray-300 outline-none
                    ${errors.email ? 'border border-red-600' : 'border border-gray-500'}
                    `}
						{...register('email')}
						type='text'
						name='email'
						id='iemail'
						placeholder='Digite seu e-mail'
						required
						aria-invalid={errors.email ? 'true' : 'false'}
					/>
					{errors.email && errors.email.type === 'required' && (
						<span
							className='text-sm text-red-600 mt-1'
							role='alert'>
							*required
						</span>
					)}
					{errors.email && errors.email.type === 'email' && (
						<span
							className='text-sm text-red-600 mt-1'
							role='alert'>
							*email inválido
						</span>
					)}
				</label>

				<label className='flex flex-col' htmlFor="ipassword">
					Senha
					<input
						className={` h-12 rounded-md p-2 bg-transparent  outline-none border  ${errors.password ? "border-red-600" : "border-gray-500"
							}`}
						{...register("password")}
						name='password'
						id='ipassword'
						type="password"
						placeholder="Digite sua senha"
						required
						aria-invalid={errors.password ? 'true' : 'false'}
					/>
					{errors.password && errors.password.type === 'min' && (
						<span
							className='text-sm text-red-600 mt-1'
							role='alert'>
							*senha inválida
						</span>
					)}
				</label>

				<button
					type='submit'
					className='h-12 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400'>
					Entrar
				</button>
			</form>
		</div>
	);
};

export default Login;
