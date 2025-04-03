import ForgotPassword from './_components/forgot-password-form';

export default function Page() {
  return (
    <>
      {/* Title */}
      <h2 className="font-bold text-2xl mb-3">Forgot your password?</h2>

      {/* Form */}
      <ForgotPassword />
    </>
  );
}
