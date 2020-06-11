import React from 'react'
import useScroll from '../hooks/useScroll'
import { useForm } from 'react-hook-form';

type props = {
    departments: Array<any>
    department: any
    municipalities: Array<any>
    status: Array<any>
    onSubmit: any
    onChange: any
}

const ReportContainer: React.FC<props> = props => {

    const titleRef = useScroll<HTMLHeadingElement>(null)
    const { departments, department, municipalities, status, onSubmit, onChange } = props
    const { register, handleSubmit, errors } = useForm()

    return (
        <section className='Report container'>
            <h2 ref={titleRef}>Reporta tus sintomas</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='field'>
                    <label>Correo: </label>
                    <input
                        name='mail'
                        placeholder='correo electronico'
                        type='text'
                        className={errors.mail && 'Error-input'}
                        ref={register({
                            required: 'Este capo es obligatorio',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Correo invalido'
                            }
                        })}
                    />
                    {errors.mail && <p className='Error-text'>{errors.mail.message}</p>}
                </div>
                <div className='field'>
                    <label>Nombre</label>
                    <input
                        name='name'
                        placeholder='nombre de usuario'
                        type='text'
                        className={errors.name && 'Error-input'}
                        ref={register({
                            required: 'Este capo es obligatorio',
                            minLength: 6,
                            maxLength: 80,
                            pattern: {
                                value: /^[^%._':;\\-`\\+´{}!|&\\/#@"!¡¿?\\(\\)]*$/i,
                                message: 'No uses caracteres especiales % . # _ & / @ !¡ ¿? ( )'
                            }
                        })}
                    />
                    {errors.name && <p className='Error-text'>{errors.name.message}</p>}
                    {errors.name?.type === 'minLength' && <p className='Error-text'>Tu nombre debe tener más de 6 caracteres</p>}
                    {errors.name?.type === 'maxLength' && <p className='Error-text'>Tu nombre debe tener menos de 80 caracteres</p>}
                </div>
                <div className='field'>
                    <label>Estados de tus sintomas</label>
                    <select name='state' ref={register({ required: true })} >
                        {status?.length > 0 && status.map((element: any) => {
                            return (
                                <option key={element.id} value={element.id}>{element.description}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='field'>
                    <label>Departamento</label>
                    <select name='department' onChange={onChange} value={department.id}>
                        {departments?.length > 0 && departments.map((element: any) => {
                            return (
                                <option key={element.id} value={element.id}>{element.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='field'>
                    <label>Municipio</label>
                    <select name='municipality' ref={register({ required: true })} >
                        {municipalities?.length > 0 && municipalities.map((element: any) => {
                            return (
                                <option key={element.id} value={element.id}>{element.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='field'>
                    <label>Fecha de contagio</label>
                    <input
                        type='text'
                        name='contact_date'
                        placeholder='YYYY-MM-DD'
                        className={errors.contact_date && 'Error-input'}
                        ref={register({
                            required: 'Este capo es obligatorio',
                            minLength: 6,
                            maxLength: 100,
                            pattern: {
                                value: /^\d{4}-\d{2}-\d{1,}$/,
                                message: 'La fecha debería ser YYYY-MM-DD'
                            }
                        })}
                    />
                    {errors.contact_date && <p className='Error-text'>{errors.contact_date.message}</p>}
                </div>
                <div className='field-button'>
                    <button className='button'>Reportar</button>
                </div>
            </form>
        </section>
    )
}

export default ReportContainer
