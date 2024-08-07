import React from 'react';
import { useField, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardDescription, CardHeader, CardTitle } from '../ui/card';


interface Step1Values {
  username: string;
  name: string;
}

const Field = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='w-[400px] space-y-2 mb-2'>
      <Label>{label}</Label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-purple-800">{meta.error}</div>
      ) : null}
    </div>
  );
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .test('is-unique', 'Username already taken', async (value) => {
      if (!value) return true;
    //   const response = await axios.post('/api/validate-username', { username: value });
    //   return response.data.isValid;
    return true;
    }),
  name: Yup.string().required('Name is required'),
});

export default function Step1({ verifyStep }) {
  const initialValues: Step1Values = {
    username: '',
    name: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className='mt-10 mx-5 flex justify-around'>
          <div>
            <Avatar className='w-32 h-32 mx-auto'>
              <AvatarImage src="https://64.media.tumblr.com/9fd769413a24e007d81ede3a886bfc92/8294417e3352c36f-13/s1280x1920/bf1b923fea50b111a4800c88bbf1b43ff1baef34.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardHeader className='text-center'>
              <CardTitle>Bae Joo-hyun</CardTitle>
              <CardDescription>@ireneredvelvet</CardDescription>
            </CardHeader>
          </div>
          <div>
            <Field label="Username" name="username" />
            <Field label="Name" name="name" />
            <div className='w-[400px] space-y-2 mb-2'>
              <Label>Profile Image</Label>
              <Input type="file" disabled={true} />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
