import React from 'react';

const LANGUAGES = [
  { value: 'python', label: 'Python' },
  { value: 'go', label: 'Go' },
];

const LanguageSelector: React.FC<{ selectedLanguage: string; onSelect: (lang: string) => void }> = ({ selectedLanguage, onSelect }) => {
  return (
    <select className="language-selector" value={selectedLanguage} onChange={(e) => onSelect(e.target.value)}>
      {LANGUAGES.map((lang) => (
        <option key={lang.value} value={lang.value}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;