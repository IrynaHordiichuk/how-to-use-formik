import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
};

// викликаємо ф-ю стайлд, передаємо ссилку на компонент від Форміка,
// цей компонент підтримує навішування додаткового CSS класу
const Input = styled(Field)`
  /* width: 100%; */
  background-color: #3cbc8d;
  color: white;
`;
const Button = styled.button`
  background-color: #04aa6d;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
`;
export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {/*prop initialValues and refence to the object */}
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
         <br />
        <label htmlFor="password">
          Password
          <Input type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};
