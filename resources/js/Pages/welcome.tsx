import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="LearnWithBen" />

            <div className="min-h-screen bg-white text-black">
                <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12">
                    <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-black/50">
                                Plateforme d’apprentissage
                            </p>
                            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-black sm:text-6xl">
                                Cours, tokens et compétences, réunis dans un espace simple.
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-black/70">
                                Gérez vos classes, suivez les progrès et distribuez les ressources sans bruit. Pensé pour les enseignants et les élèves.
                            </p>
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
                            <p className="text-xs uppercase tracking-[0.35em] text-black/50">Enseignants</p>
                            <h2 className="mt-5 text-2xl font-semibold">Pilotage clair</h2>
                            <p className="mt-3 text-sm leading-6 text-black/70">
                                Visualisez vos classes, vos participants et votre activité pédagogique au même endroit.
                            </p>
                        </article>
                        <article className="rounded border border-black/10 bg-white p-6 text-black shadow-sm">
                            <p className="text-xs uppercase tracking-[0.35em] text-black/50">Étudiants</p>
                            <h2 className="mt-5 text-2xl font-semibold">Accès instantané</h2>
                            <p className="mt-3 text-sm leading-6 text-black/70">
                                Retrouvez vos cours, vos ressources et le suivi de vos compétences en un clic.
                            </p>
                        </article>
                        <article className="rounded border border-black/10 bg-white p-6 text-black shadow-sm">
                            <p className="text-xs uppercase tracking-[0.35em] text-black/50">Gestion</p>
                            <h2 className="mt-5 text-2xl font-semibold">Tokens & compétences</h2>
                            <p className="mt-3 text-sm leading-6 text-black/70">
                                Gérez les validations, les tokens et les achats pédagogiques sans complexité.
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        </>
    );
}
