import axios from 'axios';

const encode = (data: Record<string, string>): string => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const handleSubmit = async (
  name: string,
  data: Record<string, string>
): Promise<void> => {
  try {
    await axios.post('/form.html', encode({ 'form-name': name, ...data }));
  } catch (error) {
    console.log(error);
  }
};

export const validateContactForm = (values: Record<string, string>) => {
  const errors: Record<string, string> = {};

  if (!values.name) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email) {
    errors.email = 'Please enter your email.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email.';
  }

  if (!values.message) {
    errors.message = 'Please enter a message.';
  }

  return errors;
};
