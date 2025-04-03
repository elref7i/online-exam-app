import LoginForm from './_components/login-form';

export default function Page() {
  return (
    <>
      {/* Title */}
      <h2 className="font-bold text-2xl mb-3">Sign in</h2>

      {/* Form */}
      <LoginForm />
    </>
  );
}
