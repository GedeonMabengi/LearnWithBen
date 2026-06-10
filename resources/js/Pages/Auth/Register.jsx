import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function submit(e) {
    e.preventDefault();
    post("/register");
  }

  return (
    <GuestLayout>
      <Head title="Register" />
      <div className="mx-auto grid min-h-[calc(100vh-137px)] w-full max-w-6xl items-center gap-10 md:grid-cols-[1fr_440px]">
        <section className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-black">
            Start learning
          </p>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-black md:text-7xl">
            Constituez votre routine d’anglais en quelques secondes.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-neutral-700">
            Créez votre compte pour centraliser vos cours, votre suivi, vos feedbacks et vos ressources dans un espace sans distraction.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-black/60">
            <span className="rounded-full border border-black/10 bg-black/5 px-3 py-2">Inscription</span>
            <span className="rounded-full border border-black/10 bg-black/5 px-3 py-2">Professeur</span>
            <span className="rounded-full border border-black/10 bg-black/5 px-3 py-2">Suivi</span>
          </div>
        </section>

        <section className="border border-black bg-white p-6 shadow-[8px_8px_0_#000]">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-black">
                Register
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Your workspace starts here.
              </p>
            </div>
            <div
              className="mt-2 grid h-8 w-8 grid-cols-2 grid-rows-2 border border-black"
              aria-hidden="true"
            >
              <span className="bg-black" />
              <span />
              <span />
              <span className="bg-black" />
            </div>
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
                Name
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                className="mt-2 block h-12 w-full border border-black bg-white px-4 text-black shadow-none outline-none transition placeholder:text-neutral-400 focus:ring-2 focus:ring-black"
                required
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>
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
            <div>
              <label className="block text-sm font-medium text-black">
                Confirm Password
              </label>
              <input
                type="password"
                value={data.password_confirmation}
                onChange={(e) =>
                  setData("password_confirmation", e.target.value)
                }
                className="mt-2 block h-12 w-full border border-black bg-white px-4 text-black shadow-none outline-none transition placeholder:text-neutral-400 focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <button
              type="submit"
              disabled={processing}
              className="h-12 w-full border border-black bg-black px-4 font-medium text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-sm">
            <Link
              href="/login"
              className="font-medium text-black underline decoration-black/30 underline-offset-4 hover:decoration-black"
            >
              Already have an account?
            </Link>
          </div>
        </section>
      </div>
    </GuestLayout>
  );
}
