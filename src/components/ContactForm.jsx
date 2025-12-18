import React from 'react'
import { useForm } from 'react-hook-form'

export const ContactForm = () =>
{

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <section className='contact-form-section'>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" />
            </form>
        </section>
    )
}
