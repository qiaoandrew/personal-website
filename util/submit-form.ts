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
