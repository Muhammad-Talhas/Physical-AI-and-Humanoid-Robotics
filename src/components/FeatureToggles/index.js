import React, { useState, useEffect } from 'react';
import styles from './FeatureToggles.module.css';

const FeatureToggles = () => {
  const [isUrduEnabled, setIsUrduEnabled] = useState(false);
  const [personalizationSettings, setPersonalizationSettings] = useState({
    showAdvancedContent: false,
    highlightCodeExamples: false,
  });

  // Load settings from localStorage on initial render
  useEffect(() => {
    const savedUrdu = localStorage.getItem('textbook_urdu_enabled');
    const savedPersonalization = localStorage.getItem('textbook_personalization_settings');

    if (savedUrdu !== null) {
      setIsUrduEnabled(savedUrdu === 'true');
    }
    if (savedPersonalization) {
      try {
        setPersonalizationSettings(JSON.parse(savedPersonalization));
      } catch (e) {
        console.warn("Could not parse personalization settings from localStorage, using defaults.");
      }
    }
  }, []);

  // Save Urdu setting to localStorage
  const handleUrduToggle = (e) => {
    const newValue = e.target.checked;
    setIsUrduEnabled(newValue);
    localStorage.setItem('textbook_urdu_enabled', newValue);
  };

  // Save personalization settings to localStorage
  const handlePersonalizationChange = (settingName, value) => {
    const newSettings = { ...personalizationSettings, [settingName]: value };
    setPersonalizationSettings(newSettings);
    localStorage.setItem('textbook_personalization_settings', JSON.stringify(newSettings));
  };

  return (
    <div className={styles.togglesContainer}>
      <h4>Feature Toggles</h4>

      <div className={styles.toggleItem}>
        <label className={styles.toggleLabel}>
          <input
            type="checkbox"
            checked={isUrduEnabled}
            onChange={handleUrduToggle}
            className={styles.toggleInput}
          />
          Enable Urdu Translation
        </label>
        <p className={styles.toggleDescription}>
          {isUrduEnabled
            ? "Urdu translation is currently enabled."
            : "Urdu translation is currently disabled."}
        </p>
      </div>

      <div className={styles.toggleItem}>
        <label className={styles.toggleLabel}>
          <input
            type="checkbox"
            checked={personalizationSettings.showAdvancedContent}
            onChange={(e) => handlePersonalizationChange('showAdvancedContent', e.target.checked)}
            className={styles.toggleInput}
          />
          Show Advanced Content
        </label>
        <p className={styles.toggleDescription}>
          {personalizationSettings.showAdvancedContent
            ? "Showing advanced content sections."
            : "Showing standard content only."}
        </p>
      </div>

      <div className={styles.toggleItem}>
        <label className={styles.toggleLabel}>
          <input
            type="checkbox"
            checked={personalizationSettings.highlightCodeExamples}
            onChange={(e) => handlePersonalizationChange('highlightCodeExamples', e.target.checked)}
            className={styles.toggleInput}
          />
          Highlight Code Examples
        </label>
        <p className={styles.toggleDescription}>
          {personalizationSettings.highlightCodeExamples
            ? "Code examples are highlighted."
            : "Code examples are displayed normally."}
        </p>
      </div>

      <p className={styles.infoText}>
        <em>Settings are saved in your browser's local storage.</em>
      </p>
    </div>
  );
};

export default FeatureToggles;
