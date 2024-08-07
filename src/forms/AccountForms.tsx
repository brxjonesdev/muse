'use client';
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useField, Form, FormikProps, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SignUpValues {
  name: string;
  email: string;
}

const AccountSignUpSchema = Yup.object().shape({
  name: Yup.string().required(`Sorry, we're not Facebook. We need your name.`),
  email: Yup.string().email('Are you sure this is a valid email? 👀').required(`
  We need your email. Don't worry, we won't spam you. 🙏
  `),
});

export function SignUpForm() {
  function handleSignUp(values: SignUpValues) {}

  const TextField = ({
    label,
    ...props
  }: {
    label: string;
    name: string;
    type?: string;
  }) => {
    const [field, meta, helpers] = useField(props);

    return (
      <>
        <div className="">
          <Label>{label}</Label>
          <Input
            {...field}
            {...props}
            autoComplete="false"
            className="mt-2 mb-1"
          />
          {meta.touched && meta.error ? (
            <div className="text-sm ml-2 text-rose-950">{meta.error}</div>
          ) : null}
        </div>
      </>
    );
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        onSubmit={(values) => {
          handleSignUp(values);
        }}
        validationSchema={AccountSignUpSchema}
      >
        {(props: FormikProps<SignUpValues>) => (
          <Form className="space-y-4">
            <TextField label="What's your name?" name="name" />
            <TextField label="Email" name="email" />
            <Button
              type="submit"
              className="w-full mt-7 bg-app-accent hover:bg-app-secondary"
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export function SignInForm() {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>

      <Button type="submit" className="w-full">
        Sign in with Email
      </Button>
    </>
  );
}
