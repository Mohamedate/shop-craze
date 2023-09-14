import { Form, redirect, useActionData } from "react-router-dom";
import Button from "../../ui/Button";
import { isValidText } from "../../utilities";

export default function Signup() {
  const formData = useActionData();

  return (
    <section className="flex h-[85vh] max-h-[700px] items-center justify-center pt-4">
      <div className="w-full rounded-[20px] border px-4 py-10 md:w-[400px] md:px-8 md:py-16">
        <h1 className="mb-8 text-center text-2xl font-bold text-blue md:text-3xl">
          Sign up
        </h1>
        <Form method="POST">
          <div className="mb-4">
            <input
              className="input"
              type="text"
              placeholder="First Name"
              name="firstname"
              required
            />
            {formData?.firstName && (
              <p className="mt-2 rounded-sm bg-red-100 p-2 text-xs font-semibold text-red-700">
                <span className="mr-2">&times;</span>
                {formData.firstName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              name="lastname"
              required
            />
            {formData?.lastName && (
              <p className="mt-2 rounded-sm bg-red-100 p-2 text-xs font-semibold text-red-700">
                <span className="mr-2">&times;</span>
                {formData.lastName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="input"
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="input"
              type="password"
              placeholder="password"
              name="password"
              required
            />
          </div>
          <Button>Sign up</Button>
        </Form>
      </div>
    </section>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const errors = {};

  const firstNameValidation = isValidText(data.firstname);
  const lastNameValidation = isValidText(data.lastname);
  if (firstNameValidation) {
    errors.firstName = firstNameValidation;
  }
  if (lastNameValidation) {
    errors.lastName = lastNameValidation;
  }

  if (Object.keys(errors).length > 0) return errors;

  return redirect("/sldfjlsdkfjl");
}
