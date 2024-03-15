import React from 'react';
import styles from './TabSwitcher.module.css';
import Icons from '../../../components/Icons/Icons';

export const TabSwitcher = ({ tabs, selectedId, setSelectedId }) => {
    const handleClick = (tabId) => {
        setSelectedId(tabId);
    }

    const lineWidth = (tabs.findIndex(t => t.id === selectedId) + 1) * (100 / tabs.length);

    return (
        <div>
            <div className={styles.wrapper}>
                {tabs.map((tab, index) => (
                    <button
                        className={styles.title}
                        key={tab.id}
                        onClick={() => handleClick(tab.id)}
                    >
                        <div 
                            className={styles.check}
                            style={{
                                backgroundColor: index < tabs.findIndex(t => t.id === selectedId) ? '#fcb654' : ''
                            }}
                        >
                            <Icons icon={'check'}/>
                        </div>
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className={styles.hr}>
                <div className={styles.progress} style={{ width: `${lineWidth}%`}}></div>
            </div>
            <div className={styles.wrapperContent}>
                {tabs.map(tab => (
                    selectedId === tab.id && (
                        <tab.component key={tab.id} setSelectedId={setSelectedId} tabs={tabs} />
                    )
                ))}
            </div>
        </div>
    );
}
