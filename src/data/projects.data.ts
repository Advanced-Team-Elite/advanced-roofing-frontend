// ─────────────────────────────────────────────────────────────────────────────
//  projects.data.ts
//  Fuente única de verdad para OurProjects (home) y /portfolio.
//  Agrega proyectos aquí — ambas secciones se actualizan solas.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCategory = 'Commercial' | 'Residential';

export interface Project {
    id: number;
    title: string;
    category: ProjectCategory;
    type: string;          // "Commercial Flat Roof", "Residential Shingle Roof", etc.
    size: string;          // "59,500 sq. ft."
    time: string;          // "3 weeks"
    image: string;
    system: string;        // "Timberline GAF shingle"
    description?: string;  // párrafo para la página de portfolio
    location?: string;     // ciudad/estado — SIN dirección exacta
    year?: number;
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Industrial Logistics Hub',
        category: 'Commercial',
        type: 'Commercial Flat Roof',
        size: '59,500 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/industrial-logistics.webp',
        system: 'Roofing Membrane + 5.2" Insulation',
        description: 'Full replacement of a large-scale industrial flat roof using a high-performance TPO membrane system with 5.2" of rigid insulation. The project required coordinated scheduling to avoid disrupting active logistics operations during peak hours.',
        location: 'Des Plaines, IL',
        year: 2025,
    },
    {
        id: 2,
        title: 'Modern Family Estate',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '3,450 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/modern-family.webp',
        system: 'Timberline GAF shingle',
        description: 'Complete residential re-roof on a modern two-story estate. We installed GAF Timberline HDZ shingles with a lifetime warranty, enhanced ridge ventilation, and ice & water shield throughout valleys and eaves.',
        location: 'Schaumburg, IL',
        year: 2025,
    },
    {
        id: 3,
        title: 'Suburban Heritage Home',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '4,222 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/suburban-heritage-alt.webp',
        system: 'Timberline GAF shingle',
        description: 'Storm damage repair and full roof replacement on a heritage-style suburban home. This project included custom flashing work around multiple dormers and a complex hip roof geometry.',
        location: 'Arlington Heights, IL',
        year: 2025,
    },
    {
        id: 4,
        title: 'Classic Residential Villa',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '1,602 sq. ft.',
        time: '2 weeks',
        image: '/assets/images/projects/residential-villa.webp',
        system: 'Timberline GAF shingle',
        description: 'Roof replacement on a classic villa-style home following hail damage. We worked directly with the homeowner\'s insurance adjuster to document all damage and ensure a smooth claims process.',
        location: 'Mount Prospect, IL',
        year: 2024,
    },
    {
        id: 5,
        title: 'Classic Suburban Ranch',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '2,800 sq. ft.',
        time: '2 weeks',
        image: '/assets/images/projects/classic-suburban-ranch.webp',
        system: 'Timberline GAF shingle',
        description: 'Full re-roof on a single-story ranch home with a low-slope section over the garage. The project included new skylights, updated chimney flashing, and seamless gutter integration.',
        location: 'Palatine, IL',
        year: 2024,
    },
    {
        id: 6,
        title: 'Historic Village Home',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '2,150 sq. ft.',
        time: '2 weeks',
        image: '/assets/images/projects/historic-village-home.webp',
        system: 'Timberline GAF shingle',
        description: 'Careful replacement of an aging roof on a historic neighborhood home, matching the original profile and color palette while upgrading to modern weather-resistant materials.',
        location: 'Evanston, IL',
        year: 2024,
    },
    {
        id: 7,
        title: 'Contemporary Brick Residence',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '3,200 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/contemporary-brick-residence.webp',
        system: 'Timberline GAF shingle',
        description: 'Complete roof system replacement on a contemporary brick home. Work included tear-off of two existing layers, full deck inspection and spot repairs, and installation of a new ventilation system.',
        location: 'Naperville, IL',
        year: 2025,
    },
    {
        id: 8,
        title: 'Suburban Brick & Siding Home',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '3,100 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/down-net_http20260727-436-soyo5u.webp',
        system: 'Timberline GAF shingle',
        description: 'Storm response project covering both roof replacement and partial siding repair. Completed within a tight insurance timeline while maintaining full communication with the claims adjuster.',
        location: 'Skokie, IL',
        year: 2026,
    },
    {
        id: 9,
        title: 'Gated Estate Property',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '3,600 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/down-net_http20260727-164-svejaf.webp',
        system: 'Timberline GAF shingle',
        description: 'Premium roof replacement on a gated estate property featuring a steep-pitch roof with multiple valleys. Extra scaffolding and safety equipment were deployed to protect the landscaping below.',
        location: 'Hoffman Estates, IL',
        year: 2026,
    },
    {
        id: 10,
        title: 'Dark Grey Colonial Home',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '4,500 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/down-net_http20260727-116-k83ngw.webp',
        system: 'Timberline GAF shingle',
        description: 'Large colonial home re-roof in charcoal GAF Timberline. The job required a full tear-off of three existing layers before deck repair and installation of the new system with enhanced ridge ventilation.',
        location: 'Des Plaines, IL',
        year: 2026,
    },
    {
        id: 11,
        title: 'Light Blue Modern Residence',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '2,900 sq. ft.',
        time: '2 weeks',
        image: '/assets/images/projects/9c5b654f-da21-4e25-8c74-efcae06db418.webp',
        system: 'Timberline GAF shingle',
        description: 'Roof replacement on a modern residence following wind damage. We matched the existing shingle color and replaced damaged fascia boards and soffits as part of the same mobilization.',
        location: 'Arlington Heights, IL',
        year: 2026,
    },
    {
        id: 12,
        title: 'Two-Story Split-Level Residence',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '2,650 sq. ft.',
        time: '2 weeks',
        image: '/assets/images/projects/3437f200-ccb9-4839-a2df-0a29810f16fc.webp',
        system: 'Timberline GAF shingle',
        description: 'Complete roof replacement on a split-level residential property featuring attached garage lines and multi-level roof pitch sections. Upgraded with GAF Timberline HDZ shingles, ice & water shield protection along eaves, and brand-new gutter line flashing.',
        location: 'Elk Grove Village, IL',
        year: 2026,
    },
    {
        id: 13,
        title: 'Modernized Tri-Level Residence',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '2,900 sq. ft.',
        time: '2 weeks',
        image: '/assets/images/projects/49265a60-026b-4cdc-823a-8e22e1d4948a.webp',
        system: 'Timberline GAF shingle',
        description: 'Full roof replacement on a multi-level suburban home with attached garage. The project included complete tear-off, deck inspection, installation of high-performance GAF Timberline shingles in a dark charcoal tone, and updated chimney flashing and ridge ventilation.',
        location: 'Hoffman Estates, IL',
        year: 2026,
    },
    {
        id: 14,
        title: 'Executive Brick Estate',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '5,200 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/down-net_http20260911-123-q31u8m.webp',
        system: 'Timberline GAF shingle',
        description: 'Comprehensive roof replacement on an expansive two-story brick luxury home. The installation featured architectural shingles on high-pitch gables, specialized valley metal flashing, ice & water shield application across all eaves, and integrated ridge ventilation for optimized airflow.',
        location: 'Naperville, IL',
        year: 2026,
    },
    {
        id: 15,
        title: 'Two-Story Suburban Craftsman',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '3,800 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/down-net_http20260911-128-kr04fk.webp',
        system: 'Timberline GAF shingle',
        description: 'Complete roof replacement on a two-story residential home featuring complex rooflines and multi-level roof intersections. Work included tear-off of old materials, full deck inspection, installation of GAF Timberline shingles, ice & water shield protection, and new roof vent caps.',
        location: 'Schaumburg, IL',
        year: 2026,
    },
    {
        id: 15,
        title: 'Two-Story Suburban Craftsman',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '3,800 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/down-net_http20260911-128-kr04fk.webp',
        system: 'Timberline GAF shingle',
        description: 'Complete roof replacement on a two-story residential home featuring complex rooflines and multi-level roof intersections. Work included tear-off of old materials, full deck inspection, installation of GAF Timberline shingles, ice & water shield protection, and new roof vent caps.',
        location: 'Schaumburg, IL',
        year: 2026,
    },
    {
        id: 17,
        title: 'Suburban Split-Level Family Home',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '3,100 sq. ft.',
        time: '2 weeks',
        image: '/assets/images/projects/down-net_http20260911-403-d6iurb.webp',
        system: 'Timberline GAF shingle',
        description: 'Full roof installation on a classic multi-level suburban home. The project included a complete tear-off, roof deck inspection, and installation of GAF Timberline shingles in a sleek light grey shade, complete with low-profile ridge ventilation and custom flashing over the attached front garage.',
        location: 'Mount Prospect, IL',
        year: 2026,
    },
    {
        id: 19,
        title: 'Luxury Stone & Brick Estate',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '5,800 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/down-net_http20260911-356-u5czin.webp',
        system: 'Timberline GAF shingle',
        description: 'Large-scale roof installation on a luxury custom home featuring complex steep-slope gables and intricate brick and stone masonry details. The project involved complete underlayment replacement, premium GAF Timberline shingles, custom wall-to-roof step flashing, and ice & water shield protection throughout all major roof valleys.',
        location: 'Palatine, IL',
        year: 2026,
    },
    {
        id: 20,
        title: 'Traditional Suburban House & Chimney',
        category: 'Residential',
        type: 'Residential Shingle Roof',
        size: '3,200 sq. ft.',
        time: '2 weeks',
        image: '/assets/images/projects/down-net_http20260911-119-r3lsui.webp',
        system: 'Timberline GAF shingle',
        description: 'Rear roof replacement featuring warm weathered wood shingles on a two-story residential home. The project involved installing custom copper-style flashing around a prominent exterior brick chimney, replacing roof exhaust vents, and laying ice & water shield membrane along the eaves.',
        location: 'Evanston, IL',
        year: 2026,
    },
];

// ── Helpers ────────────────────────────────────────────────────────────────────

/** Todos los proyectos — para el home carousel */
export const getAllProjects = (): Project[] => PROJECTS;

/** Filtrar por categoría */
export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
    PROJECTS.filter(p => p.category === category);

/** Stats para el hero del portfolio */
export const getPortfolioStats = () => ({
    total:      PROJECTS.length,
    commercial: PROJECTS.filter(p => p.category === 'Commercial').length,
    residential: PROJECTS.filter(p => p.category === 'Residential').length,
    states:     ['IL', 'WI', 'IN', 'MI'],
    sqFt:       PROJECTS.reduce((sum, p) => {
        const n = parseFloat(p.size.replace(/[^0-9.]/g, ''));
        return sum + (isNaN(n) ? 0 : n);
    }, 0),
});