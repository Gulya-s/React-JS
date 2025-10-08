import {useFormik} from "formik"
import * as Yup from "yup"

const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    course: '',
    gender: '',
    dob: '',
    education: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    password: '123456',
}

const schema = Yup.object({
    fullName: Yup.string()
    .trim()
    .required("Full name is required"),

    email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),

    phone: Yup.string().optional(),

    course: Yup.string()
    .oneOf(["Course A", "Course B", "Course C"], "Select a course")
    .required("Select a course"),

    dob: Yup.string().required("Required"),

    education: Yup.string().optional(),
    address: Yup.string().optional(),
    state: Yup.string().optional(),

    city: Yup.string()
    .trim()
    .required("Required"),

    zip: Yup.string()
    .matches(/^\d+$/, {message: "Digits only", excludeEmptyString: true})
    .optional(),

    country: Yup.string()
    .trim()
    .required("Required"),

    password: Yup.string().min(6, "Password must be at least 6 characters").optional(),
})

export default function CourseApplicationForm(){
    const f = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: (v) => alert(JSON.stringify(v, null, 2))
    })

    const cls = (n) => (f.touched[n] && f.errors[n] ? 'input error' : 'input')

    return(
        <form onSubmit={f.handleSubmit} noValidate>
            <h1 className="title">Course Application</h1>

            <label className="col-2">
                <input 
                type="text"
                name = "fullName"
                className={cls('fullName')}
                placeholder="Full name"
                value={f.values.fullName}
                onChange={f.handleChange}
                onBlur={f.handleBlur}
                />
                {f.touched.fullName && f.errors.fullName &&(
                    <div className="error-text">{f.errors.fullName}</div>
                )}
            </label>

            <label>
                <input type="text"
                name='email'
                className={cls('email')}
                placeholder="Email"
                value={f.values.email}
                onChange={f.handleChange}
                onBlur={f.handleBlur} 
                />
                {f.touched.email && f.errors.email &&(
                    <div className="error-text">{f.errors.email}</div>
                )}
            </label>

            <label>
                <input type="tel"
                name='phone'
                className='input'
                placeholder="Phone"
                value={f.values.phone}
                onChange={f.handleChange}
                onBlur={f.handleBlur} 
                />
            </label>

            <div className="col-2 label-like">Which course are you applying for?</div>
            <fieldset className={`fieldset col-2 ${f.touched.course && f.errors.course ? 'error' : ''}`}>
                <label className="radio"><input type="radio" name="course" value='Course A' 
                checked={f.values.course === 'Course A'}
                onChange={f.handleChange} onBlur={f.handleBlur}/><span>Course A</span></label>

                <label className="radio"><input type="radio" name="course" value='Course B' 
                checked={f.values.course === 'Course B'}
                onChange={f.handleChange} onBlur={f.handleBlur}/><span>Course B</span></label>

                <label className="radio"><input type="radio" name="course" value='Course C' 
                checked={f.values.course === 'Course C'}
                onChange={f.handleChange} onBlur={f.handleBlur}/><span>Course C</span></label>
            </fieldset>

            {f.touched.course && f.errors.course && <div className="error-text col-2">{f.errors.course}</div>}

            <label>
                <input type="date" 
                name="dob"
                className={cls('dob')}
                placeholder="dd - mm - yyyy"
                value={f.values.dob}
                onChange={f.handleChange}
                onBlur={f.handleBlur}
                />
                {f.touched.dob && f.errors.dob && <div className="error-text">{f.errors.dob}</div>}
            </label>

            <div className={`inline-group ${f.touched.gender && f.errors.gender ? 'err' : ''}`}>
                <label className="radio tight">
                    <input type="radio" name="gender" value="MALE" 
                    checked={f.values.gender === 'MALE'}
                    onChange={f.handleChange} onBlur={f.handleBlur}/>
                    <span>MAlE</span>
                </label>

                <label className="radio tight">
                    <input type="radio" name="gender" value="FEMALE" 
                    checked={f.values.gender === 'FEMALE'}
                    onChange={f.handleChange} onBlur={f.handleBlur}/>
                    <span>FEMAlE</span>
                </label>
            </div>
            {f.touched.gender && f.errors.gender && <div className="error-text">{f.errors.gender}</div>}

            <label className="col-2">
                <select name="education" className="input" value={f.values.education} onChange={f.handleChange} onBlur={f.handleBlur}>
                    <option value="">School</option>
                    <option value="College">College</option>
                    <option value="University">University</option>
                </select>
            </label>

            <label className="col-2">
                <textarea 
                name="address"
                className="input textarea"
                rows='3'
                placeholder="Address"
                value={f.values.address} 
                onChange={f.handleChange} 
                onBlur={f.handleBlur}
                />
            </label>

            <label>
                <input 
                type="text"
                name="city"
                className={cls('city')}
                placeholder="City"
                value={f.values.city} 
                onChange={f.handleChange} 
                onBlur={f.handleBlur}
                />
            {f.touched.city && f.errors.city && <div className="error-text">{f.errors.city}</div>}
            </label>

            <label>
                <input 
                type="text"
                name="state"
                className='input'
                placeholder="State"
                value={f.values.state} 
                onChange={f.handleChange} 
                onBlur={f.handleBlur}
                />
            </label>

            <label>
                <input 
                type="text"
                name="zip"
                inputMode="numeric"
                className={f.touched.zip && f.errors.zip ? 'input error' : 'input'}
                placeholder="Zip Code"
                value={f.values.zip} 
                onChange={(e) => f.setFieldValue('zip', e.target.value.replace(/\D+/g, ''))} 
                onBlur={f.handleBlur}
                />
                {f.touched.zip && f.errors.zip && <div className="error-text">{f.errors.zip}</div>}
            </label>

            <label>
                <input 
                type="text"
                name="country"
                className={cls("country")}
                placeholder="Zip Code"
                value={f.values.country} 
                onChange={f.handleChange}
                onBlur={f.handleBlur}
                />
                {f.touched.country && f.errors.country && <div className="error-text">{f.errors.country}</div>}
            </label>

            <button type="submit" className="btn col-2">Submit</button>
        </form>
    )
}