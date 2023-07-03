import React, { useState } from 'react';
import { ApartamentsData } from './ApartmentsData';
import styles from './Apartments.module.scss';

export const Apartments = () => {
  const [currentTab, setCurrentTab] = useState('1-комнатные');

  const handleTabClick = (tabType: string) => {
    setCurrentTab(tabType);
  };

  return (
    <div className={styles.container} id="apartments">
      <div className={styles.containerTitle}>
        <div className={styles.title}>
          <h1>Квартиры</h1>
        </div>

        <div className={styles.table}>
          <button
            className={`${styles.btn} ${currentTab === '1-комнатные' ? styles.active : ''}`}
            onClick={() => handleTabClick('1-комнатные')}
          >
            1-комнатные
          </button>
          <button
            className={`${styles.btn} ${currentTab === '2-комнатные' ? styles.active : ''}`}
            onClick={() => handleTabClick('2-комнатные')}
          >
            2-комнатные
          </button>
          <button
            className={`${styles.btn} ${currentTab === '3-комнатные' ? styles.active : ''}`}
            onClick={() => handleTabClick('3-комнатные')}
          >
            3-комнатные
          </button>
        </div>

        <div className={styles.mobileTable}>
          <select value={currentTab} onChange={(e) => handleTabClick(e.target.value)}>
            <option value="1-комнатные">1-комнатные</option>
            <option value="2-комнатные">2-комнатные</option>
            <option value="3-комнатные">3-комнатные</option>
          </select>
        </div>
      </div>

      <div className={styles.apartmentsContainer}>
        {ApartamentsData.filter((el) => el.type === currentTab).map((el) => (
          <div key={el.id} className={styles.apartments}>
            <img src={el.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};