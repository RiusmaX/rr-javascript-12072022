import { Field, Form, Formik } from 'formik'
import { login } from '../services/ExpressApi'

function Login () {
  const initialValues = {
    email: 'marius@sergent.dev',
    password: 'SuperMotDePasse'
  }

  const handleSubmit = async (values) => {
    await login(values)
  }

  return (
    <>
      <h1>Se connecter</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name='email' type='email' />
          <br />
          <Field name='password' type='password' />
          <br />
          <button type='submit'>Connection</button>
        </Form>
      </Formik>
    </>
  )
}

export default Login
