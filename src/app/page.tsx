'use client'

import { Header } from '@/components/Header'
import { SearchCEP } from '@/components/SearchCEP'
import { useLanguage } from '@/hooks/useLanguage'

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <SearchCEP />
    </>
  )
}
