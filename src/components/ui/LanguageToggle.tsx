'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageIcon } from '@heroicons/react/24/outline'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
      title={language === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      <LanguageIcon className="w-5 h-5" />
      <span className="text-sm font-medium">
        {language === 'zh' ? 'EN' : '中'}
      </span>
    </button>
  )
}
