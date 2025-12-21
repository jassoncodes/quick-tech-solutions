import React from 'react'
import { useForm } from 'react-hook-form'

export const ContactForm = () =>
{

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <section className='contact-form-section'>
            <form id='contact-form' className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <input id='name' placeholder='Name' {...register("firstName")} />
                <input placeholder='Last Name' {...register("lastName")} />
                <input placeholder='Phone' {...register("phone")} />
                <input placeholder='Email' {...register("email")} />
                <select {...register("service")}>
                    <option defaultChecked value="">Please select the service your interested in...</option>
                    <option value="computer-diagnostic">Computer Check-Up & Diagnostics</option>
                    <option value="network-setup">Wi-Fi Setup & Coverage Optimization</option>
                    <option value="printer-setup">Printer Installation</option>
                    <option value="backup-setup">Important File Backup</option>
                    <option value="remote-support">Fast Remote Support</option>
                    <option value="onsite-support">Fast Remote Support</option>
                    <option value="tech-training">Technology Training</option>
                </select>
                <textarea placeholder='Can you provide more details?' {...register("message")} />
                <input type="submit" />
            </form>
        </section>
    )
}
