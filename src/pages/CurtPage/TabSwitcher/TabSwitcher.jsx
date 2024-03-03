import { useState } from 'react';
import styles from './TabSwitcher.module.css';
import Icons from '../../../components/Icons/Icons';


export const TabSwitcher = ({ data, tabs }) => {
    const [selectedId, setSelectedId] = useState(tabs[0].id);

    const lineWidth = (tabs.findIndex(t => t.id === selectedId) + 1) * (100 / tabs.length);

    return (
        <div>
            <div className={styles.wrapper}>
                {tabs.map((tab, index) => (
                    <button
                        className={styles.title}
                        key={tab.id}
                        onClick={() => setSelectedId(tab.id)}
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
                        <tab.component key={tab.id} data={tab.data || data} />
                    )
                ))}
            </div>
        </div>
    );
}
