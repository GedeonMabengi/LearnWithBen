import { Head, Link, usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { dashboard, login, register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <GuestLayout>
            <Head title="LearnWithBen | Cours d'anglais" />

            <div className="min-h-screen bg-white text-black">
                <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12">
                    <header className="grid gap-8 rounded-3xl border border-black/10 bg-white p-8 shadow-[10px_10px_0_#000] md:grid-cols-[1.1fr_0.9fr] md:p-10">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-black/50">
                                Cours d’anglais par correspondance
                            </p>
                            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-black sm:text-6xl">
                                Un parcours d’anglais clair, moderne et orienté résultats.
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-black/70">
                                Suivez vos leçons, échangez avec votre professeur et gardez chaque ressource, feedback et progression au même endroit.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-black/60">
                                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-2">Professeur</span>
                                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-2">Étudiants</span>
                                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-2">Suivi</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="inline-flex rounded border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                                >
                                    Tableau de bord
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="inline-flex rounded border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                                    >
                                        Se connecter
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="inline-flex rounded border border-black bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                                    >
                                        Créer un compte
                                    </Link>
                                </>
                            )}
                        </div>
                    </header>

                    <section className="grid gap-5 sm:grid-cols-3">
                        <article className="rounded border border-black/10 bg-white p-6 text-black shadow-sm">
                            <p className="text-xs uppercase tracking-[0.35em] text-black/50">Professeur</p>
                            <h2 className="mt-5 text-2xl font-semibold">Pilotage des leçons</h2>
                            <p className="mt-3 text-sm leading-6 text-black/70">
                                Préparez et corrigez les exercices de vos correspondants avec un suivi structuré.
                            </p>
                        </article>
                        <article className="rounded border border-black/10 bg-white p-6 text-black shadow-sm">
                            <p className="text-xs uppercase tracking-[0.35em] text-black/50">Apprenant</p>
                            <h2 className="mt-5 text-2xl font-semibold">Pratique asynchrone</h2>
                            <p className="mt-3 text-sm leading-6 text-black/70">
                                Recevez des devoirs, des retours et des ressources à votre rythme, même hors cours en direct.
                            </p>
                        </article>
                        <article className="rounded border border-black/10 bg-white p-6 text-black shadow-sm">
                            <p className="text-xs uppercase tracking-[0.35em] text-black/50">Suivi</p>
                            <h2 className="mt-5 text-2xl font-semibold">Compétences validées</h2>
                            <p className="mt-3 text-sm leading-6 text-black/70">
                                Mesurez le progrès avec des validations simples et des tokens pédagogiques clairs.
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        </GuestLayout>
    );
}
