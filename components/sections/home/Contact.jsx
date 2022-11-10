import { useFormik } from 'formik';
import ID from '../../navigation/ID';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import TextArea from '../../UI/TextArea';
import handleSubmit from '../../../utils/submitForm';

export default function Contact() {
  return (
    <section className="relative bg-gradient-to-b from-translucentLightPurple to-transparent dark:from-translucentDarkPurple">
      <ID id="contact" />
      <div className="m-horizontal pt-10 pb-16 3xs:pb-20 sm:pt-12 lg:grid xl:grid-cols-[2fr_3fr] xl:gap-24 xl:pt-20 xl:pb-32 2xl:grid-cols-[4fr_5fr] 2xl:pt-24 2xl:pb-36">
        <div>
          <h2 className="mb-2 text-2xl font-semibold 3xs:mb-3 3xs:text-3xl 2xs:text-4xl sm:text-5xl md:text-6xl xl:mb-4 xl:text-7xl 2xl:text-8xl 3xl:mb-5 3xl:text-9xl">
            <span className="gradient-text gradient-main-light dark:gradient-main-dark">
              Let&apos;s get in touch.
            </span>
          </h2>
          <p className="mb-6 max-w-[600px] text-base text-black dark:text-lightPurple 3xs:mb-8 lg:mb-10 lg:text-lg xl:mb-0 2xl:text-xl">
            Have a question, new opportunity, or just want to have a quick chat?
            Feel free to send me a message.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please enter a name.';
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email.';
  }

  if (!values.message) {
    errors.message = 'Please enter a message.';
  }

  return errors;
};

function ContactForm() {
  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validate,
    onSubmit: (values, actions) => {
      handleSubmit('contact', values);
      actions.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="xl:mt-4" netlify>
      <div className="mb-10 flex flex-col gap-5 3xs:mb-12 3xs:gap-6 xl:mb-16 xl:gap-8">
        <div className="flex flex-col gap-2.5">
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-sm text-red">{formik.errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-2.5">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-sm text-red">{formik.errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2.5">
          <TextArea
            id="message"
            name="message"
            type="text"
            rows={8}
            placeholder="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.errors.message && formik.touched.message && (
            <p className="text-sm text-red">{formik.errors.message}</p>
          )}
        </div>
      </div>
      <Button
        purpose="submit"
        size="sm"
        mobileFullWidth={true}
        showOpenIcon={false}
      >
        Let&apos;s Chat!
      </Button>
    </form>
  );
}
