'use client'

import { useTranslations } from 'next-intl'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type City = 'SF' | 'Seoul'

// ── SF Timeline ──────────────────────────────────

type SFEntry = {
  time: string
  activityKey: string
  highlight?: boolean
  lobster?: boolean
}

const SF_ENTRIES: SFEntry[] = [
  { time: '02:00 PM', activityKey: 'sf_t0830' },
  { time: '02:30 PM', activityKey: 'sf_t0930' },
  { time: '02:45 PM', activityKey: 'sf_t1000' },
  { time: '03:30 PM', activityKey: 'sf_t1230', lobster: true },
  { time: '03:30–05:30 PM', activityKey: 'sf_t1230_1530' },
  { time: '05:30 PM', activityKey: 'sf_t1530' },
  { time: '06:00 PM', activityKey: 'sf_t1630' },
  { time: '06:30–07:00 PM', activityKey: 'sf_t_judging' },
  { time: '07:00 PM', activityKey: 'sf_t1730', highlight: true },
  { time: '07:30 PM', activityKey: 'sf_t1930' },
  { time: '~08:00 PM', activityKey: 'sf_t2000' },
]

// ── Seoul Timeline ───────────────────────────────

type SeoulPhaseEntry = {
  time: string
  titleKey: string
  descKey?: string
}

type SeoulPhase = {
  nameKey: string
  label: string
  lobster?: boolean
  entries: SeoulPhaseEntry[]
}

const SEOUL_PHASES: SeoulPhase[] = [
  {
    nameKey: 'seoul_morning',
    label: 'KICKOFF',
    entries: [
      { time: '8:00-9:00', titleKey: 'seoul_k1_title', descKey: 'seoul_k1_desc' },
      { time: '9:00-9:30', titleKey: 'seoul_k2_title', descKey: 'seoul_k2_desc' },
      { time: '9:30-10:30', titleKey: 'seoul_k3_title', descKey: 'seoul_k3_desc' },
      { time: '10:30-12:00', titleKey: 'seoul_k4_title', descKey: 'seoul_k4_desc' },
      { time: '12:00-12:10', titleKey: 'seoul_k5_title', descKey: 'seoul_k5_desc' },
    ],
  },
  {
    nameKey: 'seoul_ralph',
    label: 'LOOP',
    lobster: true,
    entries: [
      { time: '12:10-13:00', titleKey: 'seoul_r1_title' },
      { time: '13:00-14:00', titleKey: 'seoul_r2_title', descKey: 'seoul_r2_desc' },
      { time: '14:00-14:10', titleKey: 'seoul_r3_title', descKey: 'seoul_r3_desc' },
      { time: '14:10-15:30', titleKey: 'seoul_r4_title', descKey: 'seoul_r4_desc' },
      { time: '15:30-16:55', titleKey: 'seoul_r5_title', descKey: 'seoul_r5_desc' },
      { time: '16:55-17:00', titleKey: 'seoul_r6_title', descKey: 'seoul_r6_desc' },
    ],
  },
  {
    nameKey: 'seoul_finale_name',
    label: 'FINALE',
    entries: [
      { time: '17:00-18:00', titleKey: 'seoul_f1_title', descKey: 'seoul_f1_desc' },
      { time: '18:00-18:30', titleKey: 'seoul_f2_title' },
      { time: '18:30-18:35', titleKey: 'seoul_f3_title', descKey: 'seoul_f3_desc' },
      { time: '18:35-19:00', titleKey: 'seoul_f4_title', descKey: 'seoul_f4_desc' },
      { time: '19:00-20:00', titleKey: 'seoul_f5_title', descKey: 'seoul_f5_desc' },
      { time: '20:00-20:30', titleKey: 'seoul_f6_title', descKey: 'seoul_f6_desc' },
      { time: '20:30-20:40', titleKey: 'seoul_f7_title' },
      { time: '20:40-21:00', titleKey: 'seoul_f8_title', descKey: 'seoul_f8_desc' },
    ],
  },
]

// ── Components ───────────────────────────────────

export function EventInfo({ city }: { city: City }) {
  const t = useTranslations('timeline')

  const infoRows = city === 'SF'
    ? [
        { label: t('event'), value: `${t('sf_name')} (${t('subtitle')})` },
        { label: t('dateLabel'), value: t('sf_date') },
        { label: t('venueLabel'), value: t('sf_venue') },
        { label: t('scaleLabel'), value: t('scale') },
        { label: t('lumaLabel'), value: t('luma'), isLink: true, href: 'https://www.linkedin.com/in/chang-in-kong-57060b171/' },
        { label: t('crossCityLabel'), value: t('crossCity') },
      ]
    : [
        { label: t('event'), value: `${t('seoul_name')} (${t('subtitle')})` },
        { label: t('dateLabel'), value: t('seoul_date') },
        { label: t('venueLabel'), value: t('seoul_venue') },
        { label: t('scaleLabel'), value: t('scale') },
        { label: t('lumaLabel'), value: t('seoul_luma'), isLink: true, href: 'https://luma.com/v68q8un9' },
        { label: t('crossCityLabel'), value: t('crossCity') },
      ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{t('eventInfo')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {infoRows.map((row) => (
            <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <span
                className="min-w-[90px] shrink-0 text-xs font-medium uppercase tracking-wide"
                style={{ color: '#8892b0' }}
              >
                {row.label}
              </span>
              {row.isLink ? (
                <a
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-2 hover:text-foreground"
                  style={{ color: '#64ffda' }}
                >
                  {row.value}
                </a>
              ) : (
                <span className="text-sm font-medium">{row.value}</span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function SFSchedule() {
  const t = useTranslations('timeline')

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{t('schedule')}</CardTitle>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <div
          className="grid grid-cols-[120px_1fr] items-center gap-2 border-b px-4 pb-2 text-xs font-medium uppercase tracking-wide"
          style={{ color: '#8892b0' }}
        >
          <span>{t('sfTime')}</span>
          <span>{t('activity')}</span>
        </div>
        <div className="flex flex-col">
          {SF_ENTRIES.map((entry) => (
            <div
              key={entry.activityKey}
              className="grid grid-cols-[120px_1fr] items-center gap-2 border-b px-4 py-3 text-sm last:border-b-0"
              style={
                entry.highlight
                  ? { background: 'rgba(255, 217, 15, 0.06)', borderLeft: '3px solid #FFD90F' }
                  : undefined
              }
            >
              <span className="font-mono text-xs font-bold" style={{ color: entry.highlight ? '#FFD90F' : undefined }}>
                {entry.time}
              </span>
              <span className="flex items-center gap-1.5">
                {entry.lobster && <span>{'\u{1F99E}'}</span>}
                {entry.highlight ? (
                  <span className="font-bold">{t(entry.activityKey)}</span>
                ) : (
                  t(entry.activityKey)
                )}
                {entry.highlight && (
                  <Badge variant="outline" className="ml-1 text-[10px]">
                    MAIN
                  </Badge>
                )}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function SeoulSchedule() {
  const t = useTranslations('timeline')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-right" style={{ color: '#8892b0' }}>
        Ralphton#2 @ Seoul
      </p>
      <div className="grid gap-4 lg:grid-cols-3">
        {SEOUL_PHASES.map((phase) => (
          <Card key={phase.nameKey}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">
                  {phase.lobster && <span className="mr-1">{'\u{1F99E}'}</span>}
                  {t(phase.nameKey)}
                </CardTitle>
                <Badge variant="outline" className="text-[10px] uppercase">
                  {phase.label}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="flex flex-col">
                {phase.entries.map((entry) => (
                  <div
                    key={entry.titleKey}
                    className="flex gap-3 border-t px-4 py-3"
                  >
                    <span
                      className="shrink-0 font-mono text-xs font-bold"
                      style={{ color: '#64ffda', minWidth: '90px' }}
                    >
                      {entry.time}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">{t(entry.titleKey)}</span>
                      {entry.descKey && (
                        <span className="text-xs" style={{ color: '#8892b0' }}>
                          {t(entry.descKey)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cross-city note */}
      <div
        className="rounded-lg px-4 py-3 text-sm"
        style={{
          background: 'rgba(255, 217, 15, 0.06)',
          border: '1px solid rgba(255, 217, 15, 0.2)',
        }}
      >
        {t('seoul_crosscity_note')}
      </div>
    </div>
  )
}

export function TimelineSchedule({ city }: { city: City }) {
  return city === 'SF' ? <SFSchedule /> : <SeoulSchedule />
}

export function Timeline() {
  // 단일 행사 — 방구석 RALPHTHON @ Seoul Forest
  return (
    <div className="flex flex-col gap-6">
      <EventInfo city="SF" />
      <TimelineSchedule city="SF" />
    </div>
  )
}
