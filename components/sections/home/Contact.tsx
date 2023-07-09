import { useState } from 'react';
import { useFormik } from 'formik';

import ID from '@/components/navigation/ID';
import TextInput from '@/components/UI/TextInput';
import TextArea from '@/components/UI/TextArea';
import Button from '@/components/UI/Button';
import InputFeedback from '@/components/UI/InputFeedback';

import { handleSubmit, validateContactForm } from '@/util/form';

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: validateContactForm,
    onSubmit: async (values, { resetForm }) => {
      setError(false);
      setSuccess(false);
      try {
        handleSubmit('contact', values);
        resetForm();
        setSuccess(true);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    },
  });

  return (
    <section className='relative bg-gradient-to-b from-purple1 to-transparent dark:from-purple4'>
      <ID id='contact' />
      <div className='mx-container pb-16 pt-10 3xs:pb-20 sm:pt-12 lg:grid xl:grid-cols-[2fr_3fr] xl:gap-24 xl:pb-32 xl:pt-20 2xl:grid-cols-[4fr_5fr] 2xl:pb-36 2xl:pt-24'>
        <div>
          <h2 className='mb-2 text-2xl font-semibold 3xs:mb-3 3xs:text-3xl 2xs:text-5xl md:text-6xl xl:mb-4 xl:text-7xl 2xl:text-8xl 3xl:mb-5 3xl:text-9xl'>
            <span className='gradient-text dark-main-gradient dark:light-main-gradient'>
              Let&apos;s get in touch.
            </span>
          </h2>
          <p className='transition-300 mb-6 max-w-[600px] leading-loose text-black dark:text-purple2 3xs:mb-8 lg:mb-10 lg:text-lg xl:mb-0 2xl:text-xl'>
            Have a question, new opportunity, or just want to have a quick chat?
            Feel free to send me a message.
          </p>
        </div>
        <form
          name='contact'
          onSubmit={formik.handleSubmit}
          className='xl:mt-4'
          data-netlify='true'
        >
          <div className='mb-10 flex flex-col gap-5 3xs:mb-12 3xs:gap-6 xl:mb-16 xl:gap-8'>
            <div>
              <TextInput
                id='name'
                name='name'
                type='text'
                placeholder='Name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => setSuccess(false)}
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name && (
                <InputFeedback state='error'>
                  {formik.errors.name}
                </InputFeedback>
              )}
            </div>
            <div>
              <TextInput
                id='email'
                name='email'
                type='email'
                placeholder='Email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => setSuccess(false)}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <InputFeedback state='error'>
                  {formik.errors.email}
                </InputFeedback>
              )}
            </div>
            <div>
              <TextArea
                id='message'
                name='message'
                rows={10}
                placeholder='Message'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => setSuccess(false)}
                value={formik.values.message}
              />
              {formik.errors.message && formik.touched.message && (
                <InputFeedback state='error'>
                  {formik.errors.message}
                </InputFeedback>
              )}
              {success && (
                <InputFeedback state='success'>
                  Message sent successfully! I&apos;ll get back to you as soon
                  as possible.
                </InputFeedback>
              )}
              {error && (
                <InputFeedback state='error'>
                  Oops! Something went wrong. Please try again.
                </InputFeedback>
              )}
            </div>
          </div>
          <Button type='submit' classes='w-full sm:w-auto'>
            Let&apos;s Chat!
          </Button>
        </form>
      </div>
    </section>
  );
}
