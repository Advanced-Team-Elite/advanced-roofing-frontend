'use client';
import {useEffect, useState} from 'react';
import styles from './AdvancedIsHere.module.css';
import { FlairIcon } from '@/shared/Icons/Icons';
import { IllinoisMap } from './IllinoisMap';

interface CountyData {
    county: string;
    communities: string[];
}

export const COUNTIES_LIST: CountyData[] = [
    {
        county: "Cook",
        communities: [
            "Arlington Heights",
            "Barrington",
            "Buffalo Grove",
            "Des Plaines",
            "Evanston",
            "Hoffman Estates",
            "Lemont",
            "Mount Prospect",
            "Northbrook",
            "Orland Park",
            "Palatine",
            "Rolling Meadows",
            "Schaumburg",
            "Skokie",
            "Tinley Park"
        ]
    },
    {
        county: "DuPage",
        communities: [
            "Downers Grove",
            "Elmhurst",
            "Lemont",
            "Naperville",
            "Oak Brook"
        ]
    },
    {
        county: "Will",
        communities: [
            "Bolingbrook",
            "Lemont",
            "Lockport",
            "Naperville",
            "Romeoville",
            "Tinley Park"
        ]
    },
    {
        county: "Lake",
        communities: [
            "Barrington",
            "Buffalo Grove",
            "Lake Forest",
            "Lake Zurich"
        ]
    },
    {
        county: "Kane",
        communities: [
            "St. Charles"
        ]
    },
    {
        county: "McHenry",
        communities: [
            "Barrington"
        ]
    }
];

// Set de counties que queremos destacar en azul
const ACTIVE_COUNTY_IDS = new Set(COUNTIES_LIST.map(c => c.county));

const ALL_COUNTY_IDS = [
    "Vermilion", "Iroquois", "Alexander", "Pulaski", "Massac", "Hardin",
    "Pope", "Johnson", "Union", "Gallatin", "Saline", "Williamson",
    "Jackson", "Monroe", "Randolph", "Perry", "Franklin", "Hamilton",
    "White", "Jefferson", "Washington", "Clinton", "St._Clair", "Madison",
    "Bond", "Marion", "Wayne", "Wabash", "Edwards", "Lawrence", "Richland",
    "Clay", "Jasper", "Crawford", "Clark", "Cumberland", "Effingham",
    "Fayette", "Shelby", "Montgomery", "Jersey", "Macoupin", "Calhoun",
    "Greene", "Christian", "Coles", "Edgar", "Douglas", "Moultrie",
    "Macon", "Sangamon", "Morgan", "Scott", "Pike", "Brown", "Adams",
    "Hancock", "Donough", "Schuyler", "Cass", "Menard", "Mason", "Logan",
    "De_Witt", "Piatt", "Champaign", "Ford", "McLean", "Tazewell",
    "Woodford", "Peoria", "Fulton", "Warren", "Henderson", "Mercer",
    "Knox", "Stark", "Marshall", "Putnam", "Livingston", "Kankakee",
    "Grundy", "Will", "Kendall", "La_Salle", "Bureau", "Henry",
    "Rock_Island", "Lee", "Whiteside", "Carroll", "Ogle", "DeKalb",
    "Kane", "DuPage", "Cook", "Lake", "McHenry", "Boone", "Winnebago",
    "Stephenson", "Jo_Daviess"
];

export default function AdvancedIsHere() {
    const [tooltip, setTooltip] = useState({
        visible: false,
        x: 0,
        y: 0,
        county: '',
        communities: [] as string[],
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const getActiveCounty = () => {
        const query = searchQuery.toLowerCase().trim().replace(/\s+/g, '_');
        if (!query) return null;
        return ALL_COUNTY_IDS.find(id => {
            const normalizedId = id.toLowerCase();
            return normalizedId === query || normalizedId.replace(/_/g, '') === query.replace(/_/g, '');
        });
    };

    const activeSearchId = getActiveCounty();

    const formatCountyName = (id: string) => id.replace(/_/g, ' ');

    const filteredCounties = ALL_COUNTY_IDS.filter(id =>
        formatCountyName(id).toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);

    const handleMouseOver = (e: React.MouseEvent) => {
        const target = e.target as SVGPathElement;
        if (target.tagName !== 'path') return;

        const countyId = target.id;
        if (!countyId) return;

        // Buscamos si el condado existe en nuestra base de datos de servicios
        const countyEntry = COUNTIES_LIST.find(c => c.county === countyId);

        setTooltip({
            visible: true,
            x: e.clientX,
            y: e.clientY,
            county: countyId.replace(/_/g, ' '),
            // Si existe, pasamos sus comunidades; si no, pasamos un array vacío o null
            communities: countyEntry ? countyEntry.communities : [],
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (tooltip.visible) {
            setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
        }
    };

    return (
        <section className={styles.outerContainer}>
            <div className={styles.mapCard}>
                <div className={styles.flairBg}>
                    <FlairIcon size={2100} />
                </div>

                <div className={styles.cardContent}>
                    <div className={styles.infoSide}>
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder="Search your county (e.g. Cook)"
                                className={styles.mapSearch}
                                value={searchQuery}
                                onFocus={() => setShowDropdown(true)}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setShowDropdown(true);
                                }}
                            />
                            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            {showDropdown && searchQuery.trim() !== "" && (
                                <ul className={styles.suggestionsList}>
                                    {filteredCounties.length > 0 ? (
                                        filteredCounties.map((id) => (
                                            <li
                                                key={id}
                                                onClick={() => {
                                                    setSearchQuery(formatCountyName(id));
                                                    setShowDropdown(false);
                                                }}
                                            >
                                                {formatCountyName(id)}
                                            </li>
                                        ))
                                    ) : (
                                        <li className={styles.noResult}>No counties found</li>
                                    )}
                                </ul>
                            )}
                        </div>

                        <div className={styles.textContent}>
                            <p className={styles.label}>Counties</p>
                            <h2 className={styles.title}>
                                Advanced <br /><span className={styles.highlight}>Is Here</span>
                            </h2>
                            <p className={styles.description}>
                                From multiple counties to entire regions, our presence reflects where we've delivered results—bringing precision, reliability, and <strong>proven roofing solutions to every project we take on.</strong>
                            </p>
                        </div>
                    </div>

                    <div
                        className={styles.mapSide}
                        onMouseOver={handleMouseOver}
                        onMouseMove={handleMouseMove}
                        onMouseOut={() => setTooltip(prev => ({ ...prev, visible: false }))}
                    >
                        <div className={styles.mapWrapper}>
                            <IllinoisMap
                                activeId={activeSearchId}
                                highlightedIds={ACTIVE_COUNTY_IDS}
                                className={styles.svgMap}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {tooltip.visible && (
                <div
                    className={styles.tooltip}
                    style={{
                        top: tooltip.y - 80,
                        left: tooltip.x + 20,
                        position: 'fixed',
                    }}
                >
                    <div className={styles.tooltipCounty}>{tooltip.county} County</div>

                    {tooltip.communities.length > 0 ? (
                        <ul className={styles.tooltipCommunities}>
                            {tooltip.communities.map(c => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    ) : (
                        // Mensaje para condados sin comunidades asignadas
                        <div className={styles.noCommunities}>
                            No communities yet. <br />
                            <span className={styles.contactLink}>Contact us for details</span>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}