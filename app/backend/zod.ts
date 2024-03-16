import {z} from 'zod'
export {schema , loginSchema}

const schema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email().max(100),
    password: z.string().min(8).max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    confirmPassword: z.string().min(8).max(100),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});


const loginSchema = z.object({
    email: z.string().email().max(100),
    password: z.string().max(100),
});



// const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       schema.parse(formData);
//       // Form data is valid, you can submit it
//       console.log('Form data:', formData);
//     } catch (error) {
//       // Validation failed, set errors
//       setErrors(error.errors);
//     }
//   };

// {errors.name && <div className="text-red-500">{errors.name}</div>}