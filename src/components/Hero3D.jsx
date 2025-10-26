import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Instant Credit Card Decisions</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
          Secure API and demo UI to submit applications and receive an approval decision with probability, explanation, and next steps.
        </p>
      </div>
    </section>
  );
}
