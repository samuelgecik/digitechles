# DIGITECHLES Web Application Specification

## Project Overview

DIGITECHLES is a web application designed to visualize and analyze afforestation opportunities in Slovakia, with a focus on carbon sequestration and environmental impact assessment. The application will allow users to explore different vegetation zones of Slovakia, configure tree planting parameters, and view projected environmental impacts over a 30-year period.

## Technology Stack

### Frontend
- **Framework**: React with Next.js
- **Map Library**: Leaflet.js with React-Leaflet
- **UI Components**: Shadcn/UI (using Tailwind CSS)
- **Data Visualization**: Recharts

### Data Management
- Static JSON files for demo purposes
- GeoJSON for map and zone data
- No backend required for initial implementation

## Data Structure

### Map Data Files
- `slovakia-boundary.geojson`: Country outline for base map
- `vegetation-zones.geojson`: Polygon features for the 5 vegetation zones
- `predefined-points.json`: Three sample locations from original spec

### Vegetation Zone Data Structure
```json
{
  "vegetationZones": [
    {
      "id": "oak",
      "name": "Oak Zone",
      "altitudeRange": [150, 300],
      "baselineParameters": {
        "temperature": 10.5,
        "humidity": 65,
        "dustLevels": 35,
        "evapotranspiration": 450,
        "albedo": 0.15,
        "waterRetention": 70
      },
      "carbonSequestrationRate": 3.2,
      "recommendedDensity": 1500,
      "environmentalImpactFactors": {
        "temperatureReduction": 0.05,
        "humidityIncrease": 0.08,
        "dustReduction": 0.12,
        "evapotranspirationChange": 0.07,
        "albedoChange": 0.02,
        "waterRetentionImprovement": 0.09
      }
    },
    {
      "id": "oak-hornbeam",
      "name": "Oak-Hornbeam Zone",
      "altitudeRange": [300, 500],
      "baselineParameters": {
        "temperature": 9.5,
        "humidity": 68,
        "dustLevels": 30,
        "evapotranspiration": 480,
        "albedo": 0.14,
        "waterRetention": 75
      },
      "carbonSequestrationRate": 3.5,
      "recommendedDensity": 2000,
      "environmentalImpactFactors": {
        "temperatureReduction": 0.06,
        "humidityIncrease": 0.09,
        "dustReduction": 0.14,
        "evapotranspirationChange": 0.08,
        "albedoChange": 0.025,
        "waterRetentionImprovement": 0.1
      }
    },
    {
      "id": "fir-spruce",
      "name": "Fir-Spruce Zone",
      "altitudeRange": [1000, 1300],
      "baselineParameters": {
        "temperature": 7.0,
        "humidity": 75,
        "dustLevels": 20,
        "evapotranspiration": 520,
        "albedo": 0.12,
        "waterRetention": 82
      },
      "carbonSequestrationRate": 4.2,
      "recommendedDensity": 2500,
      "environmentalImpactFactors": {
        "temperatureReduction": 0.07,
        "humidityIncrease": 0.11,
        "dustReduction": 0.18,
        "evapotranspirationChange": 0.09,
        "albedoChange": 0.03,
        "waterRetentionImprovement": 0.12
      }
    },
    {
      "id": "spruce",
      "name": "Spruce Zone",
      "altitudeRange": [1300, 1550],
      "baselineParameters": {
        "temperature": 5.5,
        "humidity": 80,
        "dustLevels": 15,
        "evapotranspiration": 490,
        "albedo": 0.11,
        "waterRetention": 85
      },
      "carbonSequestrationRate": 4.0,
      "recommendedDensity": 2200,
      "environmentalImpactFactors": {
        "temperatureReduction": 0.065,
        "humidityIncrease": 0.1,
        "dustReduction": 0.16,
        "evapotranspirationChange": 0.085,
        "albedoChange": 0.028,
        "waterRetentionImprovement": 0.11
      }
    },
    {
      "id": "dwarf-pine-alpine",
      "name": "Dwarf Pine-Alpine Zone",
      "altitudeRange": [1550, 2500],
      "baselineParameters": {
        "temperature": 3.0,
        "humidity": 85,
        "dustLevels": 10,
        "evapotranspiration": 450,
        "albedo": 0.13,
        "waterRetention": 80
      },
      "carbonSequestrationRate": 2.8,
      "recommendedDensity": 1800,
      "environmentalImpactFactors": {
        "temperatureReduction": 0.04,
        "humidityIncrease": 0.07,
        "dustReduction": 0.1,
        "evapotranspirationChange": 0.06,
        "albedoChange": 0.02,
        "waterRetentionImprovement": 0.08
      }
    }
  ]
}
```

### Predefined Points Data Structure
```json
{
  "points": [
    {
      "id": "point1",
      "name": "Bratislava Region",
      "coordinates": [48.1486, 17.1077],
      "zoneId": "oak",
      "areaSize": 5,
      "soilType": "Clay-rich soil with moderate drainage",
      "idealTreeSpecies": ["Silver Birch", "Scots Pine"],
      "baselineCredits": 120
    },
    {
      "id": "point2",
      "name": "Žilina Region",
      "coordinates": [49.2231, 18.7393],
      "zoneId": "oak-hornbeam",
      "areaSize": 8,
      "soilType": "Loamy soil with good drainage",
      "idealTreeSpecies": ["European Oak", "Common Hornbeam"],
      "baselineCredits": 240
    },
    {
      "id": "point3",
      "name": "High Tatras Region",
      "coordinates": [49.1753, 20.1298],
      "zoneId": "spruce",
      "areaSize": 10,
      "soilType": "Sandy loam with high organic content",
      "idealTreeSpecies": ["Norway Spruce", "European Beech"],
      "baselineCredits": 360
    }
  ]
}
```

## Calculation Formulas

### Carbon Sequestration
- Base yearly sequestration: `yearlySequestration = baseRate * area * (treeCount/1000) * zoneModifier`
- Where:
  - `baseRate`: Zone-specific carbon sequestration rate (tons CO₂/hectare/year)
  - `area`: Area size in hectares
  - `treeCount`: Selected number of trees per hectare
  - `zoneModifier`: Growth factor specific to vegetation zone

- Age factor: Trees don't sequester carbon at a constant rate over 30 years
  - Years 1-5: 30% of mature rate
  - Years 6-10: 60% of mature rate
  - Years 11-20: 90% of mature rate
  - Years 21-30: 100% of mature rate

### Environmental Impact Calculation
For each parameter (temperature, humidity, etc.):
- `yearlyImpact = baselineValue * impactFactor * (treeCount/recommendedDensity) * (currentYear/30)`
- Total impact at year X: Sum of yearly impacts up to year X

## UI/UX Design

### Color Scheme (Based on design_spec.md)

#### Primary Palette
- **Primary Green**: #2D6A4F (Rich forest green for primary actions and branding)
- **Secondary Blue**: #1A759F (Water-inspired blue for secondary elements)
- **Tertiary Amber**: #D4A373 (Earth-tone for highlighting and accents)

#### Extended Palette & Functional Colors
- Refer to `design_spec.md` for the full extended palette (Greens, Blues, Earth Tones) and functional colors (Success, Warning, Error, Information).

#### Vegetation Zone Color Mapping
- Oak Zone: #588157 (Light forest green)
- Oak-Hornbeam Zone: #3A5A40 (Medium forest green)
- Fir-Spruce Zone: #344E41 (Deep forest green)
- Spruce Zone: #1B4332 (Dark forest green)
- Dwarf Pine-Alpine Zone: #6B705C (Alpine gray-green)

### Typography (Based on design_spec.md)

#### Font Selection
- **Primary Font**: Inter (Sans-serif)
- **Data Visualization Font**: IBM Plex Mono

#### Type Scale
- Display: 32px/40px (2rem)
- H1: 24px/32px (1.5rem)
- H2: 20px/28px (1.25rem)
- H3: 18px/24px (1.125rem)
- Body: 16px/24px (1rem)
- Small/Caption: 14px/20px (0.875rem)
- Tiny: 12px/16px (0.75rem)

#### Typography Rules
- Refer to `design_spec.md` for detailed rules on font weight, line height, line length, and contrast.

### Layout Structure (Based on design_spec.md)
- Fixed header with logo, title, and primary controls.
- Map dominates the interface as the primary interaction point.
- Right sidebar contains contextual controls (e.g., layers, selected area info).
- Bottom panel (potentially tabbed) for data visualization (e.g., charts, results).
- Responsive design adapting layout for tablet and mobile (refer to `design_spec.md` for details).

## Component Architecture

### Core Components

1. **App Container**
   - Main application wrapper
   - Manages global state
   - Handles responsive layout

2. **Map Component**
   - Renders Leaflet map
   - Manages layers (base map, vegetation zones, markers)
   - Handles user interaction with map elements

3. **Layer Toggle**
   - UI controls for switching between normal view and vegetation zone view
   - Layer visibility management

4. **Information Panel**
   - Displays selected location/zone information
   - Shows soil type, ideal tree species, etc.

5. **Tree Density Configurator**
   - Slider for selecting trees per hectare (500-5000)
   - Preset density buttons (Low, Medium, High)
   - Visual representation of selected density

6. **Carbon Sequestration Dashboard**
   - Line chart showing carbon sequestration over 30 years
   - Metrics displaying total carbon credits
   - Year-by-year breakdown option

7. **Environmental Impact Visualizer**
   - Radar chart for multi-parameter visualization
   - Individual parameter cards showing before/after values
   - Time-based progression slider

8. **Export Controls**
   - Buttons for exporting results as PDF or images
   - Data download options

### Page Structure

```
┌────────────────────────────────────────────────────────────────┐
│ [Logo] DIGITECHLES                            [Controls] [Help] │
├────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ ┌────────────────────┐ │
│ │                                     │ │  ◄                 │ │
│ │                                     │ │  Layer Controls    │ │
│ │                                     │ │  [✓] Base Map      │ │
│ │                                     │ │  [✓] Vegetation    │ │
│ │                                     │ │  [ ] Topography    │ │
│ │          Interactive Map            │ │                    │ │
│ │          of Slovakia                │ │  Selected Area     │ │
│ │                                     │ │  ▢ Bratislava      │ │
│ │                                     │ │  ▢ Žilina          │ │
│ │                                     │ │  ▢ High Tatras     │ │
│ │                                     │ │                    │ │
│ │                                     │ │  [Custom Select]   │ │
│ │                                     │ │                    │ │
│ │                                     │ │  [Dashboard Tab]   │ │
│ │                                     │ │  [Charts Preview]  │ │
│ │                                     │ │                    │ │
│ └─────────────────────────────────────┘ └────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
```

## Feature Implementation Details

### 1. Landing Page & Base Map

The application will load with:
- Slovakia map displayed prominently
- Three predefined markers from the original specification
- Vegetation zone toggle in the control panel
- Instructions overlay for first-time users

### 2. Vegetation Zone Layer

- Color-coded polygons representing the five vegetation zones
- Interactive borders that highlight on hover
- Information popup on click showing zone name and altitude range
- Toggle button to switch between normal view and vegetation zone view

### 3. Site Information Display

When a predefined point or area within a vegetation zone is selected:
- Display area size in hectares
- Show soil type description
- List ideal tree species for that zone
- Present baseline carbon sequestration estimate
- Show zone-specific environmental parameters

### 4. Tree Density Configuration

- Slider component for selecting trees per hectare
- Visual indicator showing current density selection
- Quick-select buttons for common density configurations
- Real-time update of calculations based on density changes

### 5. Carbon Sequestration Calculation

- Dynamic calculation based on selected zone, area, and tree density
- Line graph showing cumulative carbon sequestration over 30 years
- Key milestone markers at years 5, 10, 20, and 30
- Comparison feature to contrast different scenarios
- Displayed in the expandable sidebar dashboard view

### 6. Environmental Impact Analysis

- Radar/spider chart visualizing multiple environmental parameters
- Individual metric cards for each parameter:
  - Temperature reduction
  - Humidity increase
  - Dust/particulate matter reduction
  - Evapotranspiration changes
  - Albedo modification
  - Water retention improvement
- Time slider to view projected changes at different years
- Accessible through the expandable sidebar interface

### 7. Expandable Sidebar Dashboard

- Arrow button on sidebar to expand/collapse the dashboard view
- When expanded, sidebar takes up approximately 70% of screen width
- Map remains visible but minimized when dashboard is expanded
- Dashboard contains all visualization components
- Responsive design accommodates different screen sizes
- On mobile, transitions to full-screen dashboard view

### 8. User Guidance System

- First-time user overlay with brief instructions
- Contextual tooltips for complex features
- "i" information icons next to technical terms with explanations on hover
- Optional guided tour of application features

## Development Phases

### Phase 1: Project Setup & Base Map
- Set up Next.js project structure
- Implement Leaflet map with Slovakia boundary
- Add the three predefined points
- Create basic information display for selected points

### Phase 2: Vegetation Zone Implementation
- Add GeoJSON layer for vegetation zones
- Implement zone selection and information display
- Create zone toggle functionality
- Connect zone data to information panel

### Phase 3: Tree Density Configuration
- Build density selection UI components
- Implement the slider and preset buttons
- Create visual representation of density
- Connect density selection to calculation engine

### Phase 4: Calculation Engine
- Implement carbon sequestration formulas
- Build environmental impact calculation logic
- Create time-based progression models
- Test calculations against scientific benchmarks

### Phase 5: Data Visualization
- Implement line charts for carbon sequestration
- Build radar charts for environmental parameters
- Create parameter cards with before/after values
- Add time slider for viewing progression

### Phase 6: Final Integration & Polish
- Connect all components into cohesive application
- Implement responsive design for various screen sizes
- Add guidance system and tooltips
- Perform performance optimization
- Implement export functionality

## Testing Requirements

- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Responsive design testing on various screen sizes
- Calculation accuracy verification
- User interaction flow testing
- Performance testing with large GeoJSON files

## Future Enhancement Considerations

- Tree species selection feature (placeholder UI elements included)
- User-defined points and custom area selection
- Backend integration for saving scenarios
- More detailed environmental modeling
- Economic/financial calculator for afforestation projects

## Implementation Checklist

### Phase 1: Project Setup & Base Map
- [x] Set up Next.js project with TypeScript and Tailwind CSS
- [x] Install and configure Shadcn/UI components
- [x] Implement basic layout structure with header and content area
- [x] Add Leaflet map component with Slovakia boundaries
- [x] Implement the three predefined marker locations
- [ ] Create basic sidebar structure with expand/collapse functionality

### Phase 2: Vegetation Zone Implementation
- [ ] Implement GeoJSON loading for vegetation zones
- [ ] Create color-coded visualization of zones
- [ ] Add zone selection interactions (hover/click)
- [ ] Implement zone information display in sidebar
- [ ] Create layer toggle controls

### Phase 3: Dashboard Components
- [ ] Create expandable sidebar dashboard view
- [ ] Implement tabs for different data categories
- [ ] Build tree density configurator with slider and presets
- [ ] Create chart placeholders for visualization sections
- [ ] Implement responsive behavior for dashboard components

### Phase 4: Calculation Engine
- [ ] Build carbon sequestration calculation functions
- [ ] Create environmental impact calculation system
- [ ] Implement year-based progression model
- [ ] Connect calculations to UI components
- [ ] Add data export functionality

### Phase 5: Data Visualization
- [ ] Implement carbon sequestration charts
- [ ] Create environmental impact visualizations
- [ ] Build parameter cards for individual metrics
- [ ] Add time progression slider
- [ ] Implement comparison features

### Phase 6: Polish and Optimization
- [ ] Add user guidance system and tooltips
- [ ] Implement accessibility features
- [ ] Add animations and transitions
- [ ] Optimize performance for large datasets
- [ ] Cross-browser and responsive testing