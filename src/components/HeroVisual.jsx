import { motion } from 'framer-motion';
import { Activity, BarChart3, CheckCircle2, CircleDollarSign, UsersRound } from 'lucide-react';

const metricCards = [
  { label: 'Pipeline', value: '$1.8M', icon: CircleDollarSign },
  { label: 'Activation', value: '74%', icon: Activity },
  { label: 'Accounts', value: '426', icon: UsersRound },
];

export function HeroVisual() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-2xl"
      initial={{ opacity: 0, scale: 0.96, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-cyanGlow/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-600/60 bg-white/[0.06] p-4 shadow-card backdrop-blur-2xl">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-700/70 bg-ink/70 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-ember" />
            <span className="h-3 w-3 rounded-full bg-acid" />
            <span className="h-3 w-3 rounded-full bg-cyanGlow" />
          </div>
          <span className="text-xs text-slate-400">growth-command.nova</span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_0.74fr]">
          <div className="rounded-3xl border border-slate-700/70 bg-surface/80 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Revenue Engine</p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-white">Growth OS</h3>
              </div>
              <BarChart3 className="text-cyanGlow" size={28} />
            </div>
            <div className="mt-8 flex h-44 items-end gap-3">
              {[40, 68, 52, 86, 74, 94, 108].map((height, index) => (
                <motion.span
                  key={height}
                  className="flex-1 rounded-t-xl bg-gradient-to-t from-cyanGlow/35 to-white"
                  initial={{ height: 10 }}
                  animate={{ height }}
                  transition={{ duration: 0.9, delay: 0.35 + index * 0.06, ease: 'easeOut' }}
                />
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {metricCards.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="rounded-2xl border border-slate-800/80 bg-white/[0.04] p-3">
                    <Icon className="mb-3 text-acid" size={17} />
                    <p className="text-lg font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-[11px] text-slate-400">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-700/70 bg-white/[0.05] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Launch Readiness</p>
              <div className="mt-5 space-y-4">
                {['Brand system', 'SaaS onboarding', 'SEO foundation'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="text-acid" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-white/12 to-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Signal Quality</p>
              <p className="mt-4 font-display text-4xl font-semibold text-white">98</p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyanGlow via-acid to-ember"
                  initial={{ width: '20%' }}
                  animate={{ width: '92%' }}
                  transition={{ duration: 1.1, delay: 0.55 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
