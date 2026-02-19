import React from 'react';
import styles from './SearchSection.module.css';

const SearchSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>

                {/* Título Principal */}
                <h2 className={styles.title}>
                    How Can We Help You?
                </h2>

                {/* Caja de Búsqueda Negra */}
                <div className={styles.searchBox}>
                    <label className={styles.label}>
                        Search by keyword
                    </label>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            className={styles.input}
                        />
                        <button className={styles.searchButton}>
                            Search
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SearchSection;