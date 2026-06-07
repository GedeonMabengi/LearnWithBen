import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  function submit(e) {
    e.preventDefault();
    post("/login");
  }

  return (
    <GuestLayout>
      <Head title="Login" />
      <div className="mx-auto grid min-h-[calc(100vh-137px)] w-full max-w-6xl items-center gap-10 md:grid-cols-[1fr_420px]">
        <section className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-black">
            Welcome back
          </p>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-black md:text-7xl">
            Learn English with clarity.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-neutral-700">
            Connect to your courses, tokens, resources and learning progress in
            one quiet workspace.
          </p>
        </section>

        <section className="border border-black bg-white p-6 shadow-[8px_8px_0_#000]">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-black">
                Login
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Use your LearnWithBen account.
              </p>
            </div>
            <div
              className="mt-2 h-8 w-8 border border-black bg-black"
              aria-hidden="true"
            />
          </div>

          <div className="mb-6 grid gap-3">
            <a
              href="/auth/google/redirect"
              className="flex h-12 items-center justify-center border border-black bg-white px-4 text-sm font-medium text-black transition hover:bg-black hover:text-white"
            >
              Continue with Google
            </a>
            <a
              href="/auth/apple/redirect"
              className="flex h-12 items-center justify-center border border-black bg-black px-4 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              Continue with Apple
            </a>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-black/20" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              or
            </span>
            <div className="h-px flex-1 bg-black/20" />
          </div>

          <form onSubmit={submit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                className="mt-2 block h-12 w-full border border-black bg-white px-4 text-black shadow-none outline-none transition placeholder:text-neutral-400 focus:ring-2 focus:ring-black"
                required
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                className="mt-2 block h-12 w-full border border-black bg-white px-4 text-black shadow-none outline-none transition placeholder:text-neutral-400 focus:ring-2 focus:ring-black"
                required
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={processing}
              className="h-12 w-full border border-black bg-black px-4 font-medium text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              Log in
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between gap-4 text-sm">
            <Link
              href="/forgot-password"
              className="font-medium text-black underline decoration-black/30 underline-offset-4 hover:decoration-black"
            >
              Forgot password?
            </Link>
            <Link
              href="/register"
              className="font-medium text-black underline decoration-black/30 underline-offset-4 hover:decoration-black"
            >
              Create account
            </Link>
          </div>
        </section>
      </div>
    </GuestLayout>
  );
}
