import React from 'react'

const Input = ({ formik, data }) => {

    const { label, name, type } = data
    const bsClass = name === 'terms' ? 'form-check-input' : 'form-control';
    return (
        <div>
            <label className='form-label' >{label}</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange}
                name={name} type={type}
                className={`${bsClass} ${formik.errors[name] && formik.touched[name] && 'is-invalid '}`} />
            <div className='feed-back'>{formik.errors[name]} &nbsp;</div>
        </div>
    )
}

export default Input