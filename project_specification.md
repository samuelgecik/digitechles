Okay, here is the merged documentation, combining the Project Specification and the UI/UX Design Specification into a single, comprehensive document. Redundant sections have been consolidated, and the structure has been optimized for clarity.

```markdown
# DIGITECHLES Web Application Specification

## 1. Project Overview

DIGITECHLES is a web application designed to visualize and analyze afforestation opportunities in Slovakia, with a focus on carbon sequestration and environmental impact assessment. The application will allow users to explore different vegetation zones of Slovakia, configure tree planting parameters, and view projected environmental impacts over a 30-year period. The design emphasizes environmental stewardship, scientific credibility, and accessibility, creating a professional tool that remains approachable.

## 2. Technology Stack

### Frontend
- **Framework**: React with Next.js (TypeScript)
- **Map Library**: Leaflet.js with React-Leaflet
- **UI Components**: Shadcn/UI (using Tailwind CSS)
- **Data Visualization**: Recharts
- **Animation**: Framer Motion (optional, for enhanced UX)

### Data Management
- Static JSON files for demo purposes
- GeoJSON for map and zone data
- No backend required for initial implementation

## 3. Data Structure

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
        "temperature": 10.5, // °C
        "humidity": 65, // %
        "dustLevels": 35, // µg/m³ (example unit)
        "evapotranspiration": 450, // mm/year (example unit)
        "albedo": 0.15, // unitless
        "waterRetention": 70 // % (example unit)
      },
      "carbonSequestrationRate": 3.2, // tons CO₂/hectare/year (mature rate)
      "recommendedDensity": 1500, // trees/hectare
      "environmentalImpactFactors": { // Per 1000 trees/ha over 30 years
        "temperatureReduction": 0.05, // °C reduction factor
        "humidityIncrease": 0.08, // % increase factor
        "dustReduction": 0.12, // % reduction factor
        "evapotranspirationChange": 0.07, // mm/year change factor
        "albedoChange": 0.02, // unit change factor
        "waterRetentionImprovement": 0.09 // % improvement factor
      }
    },
    {
      "id": "oak-hornbeam",
      "name": "Oak-Hornbeam Zone",
      "altitudeRange": [300, 500],
      "baselineParameters": { "temperature": 9.5, "humidity": 68, "dustLevels": 30, "evapotranspiration": 480, "albedo": 0.14, "waterRetention": 75 },
      "carbonSequestrationRate": 3.5,
      "recommendedDensity": 2000,
      "environmentalImpactFactors": { "temperatureReduction": 0.06, "humidityIncrease": 0.09, "dustReduction": 0.14, "evapotranspirationChange": 0.08, "albedoChange": 0.025, "waterRetentionImprovement": 0.1 }
    },
    {
      "id": "fir-spruce",
      "name": "Fir-Spruce Zone",
      "altitudeRange": [1000, 1300],
      "baselineParameters": { "temperature": 7.0, "humidity": 75, "dustLevels": 20, "evapotranspiration": 520, "albedo": 0.12, "waterRetention": 82 },
      "carbonSequestrationRate": 4.2,
      "recommendedDensity": 2500,
      "environmentalImpactFactors": { "temperatureReduction": 0.07, "humidityIncrease": 0.11, "dustReduction": 0.18, "evapotranspirationChange": 0.09, "albedoChange": 0.03, "waterRetentionImprovement": 0.12 }
    },
    {
      "id": "spruce",
      "name": "Spruce Zone",
      "altitudeRange": [1300, 1550],
      "baselineParameters": { "temperature": 5.5, "humidity": 80, "dustLevels": 15, "evapotranspiration": 490, "albedo": 0.11, "waterRetention": 85 },
      "carbonSequestrationRate": 4.0,
      "recommendedDensity": 2200,
      "environmentalImpactFactors": { "temperatureReduction": 0.065, "humidityIncrease": 0.1, "dustReduction": 0.16, "evapotranspirationChange": 0.085, "albedoChange": 0.028, "waterRetentionImprovement": 0.11 }
    },
    {
      "id": "dwarf-pine-alpine",
      "name": "Dwarf Pine-Alpine Zone",
      "altitudeRange": [1550, 2500],
      "baselineParameters": { "temperature": 3.0, "humidity": 85, "dustLevels": 10, "evapotranspiration": 450, "albedo": 0.13, "waterRetention": 80 },
      "carbonSequestrationRate": 2.8,
      "recommendedDensity": 1800,
      "environmentalImpactFactors": { "temperatureReduction": 0.04, "humidityIncrease": 0.07, "dustReduction": 0.1, "evapotranspirationChange": 0.06, "albedoChange": 0.02, "waterRetentionImprovement": 0.08 }
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
      "areaSize": 5, // hectares
      "soilType": "Clay-rich soil with moderate drainage",
      "idealTreeSpecies": ["Silver Birch", "Scots Pine"],
      "baselineCredits": 120 // Example baseline carbon credit value
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

## 4. Design System

### Color System

#### Primary Palette
- **Primary Green**: #2D6A4F (Rich forest green for primary actions and branding)
- **Secondary Blue**: #1A759F (Water-inspired blue for secondary elements)
- **Tertiary Amber**: #D4A373 (Earth-tone for highlighting and accents)

#### Extended Palette
- **Greens**:
  - Lightest: #D8F3DC (Background, hover states)
  - Light: #95D5B2 (Secondary backgrounds, success states)
  - Medium: #52B788 (UI elements, buttons)
  - Dark: #2D6A4F (Primary actions, important text) - *Same as Primary Green*
  - Darkest: #1B4332 (Headers, emphasis)

- **Blues**:
  - Light: #90E0EF (Water features, chart elements)
  - Medium: #00B4D8 (Interactive elements)
  - Dark: #0077B6 (Important UI elements)

- **Earth Tones**:
  - Light Sand: #E9EDC9 (Background variations)
  - Medium: #CCD5AE (Neutral elements, borders)
  - Dark: #D4A373 (Highlights, focus states) - *Same as Tertiary Amber*

- **Functional Colors**:
  - Success: #38B000
  - Warning: #FFAA00
  - Error: #D62828
  - Information: #4361EE

#### Vegetation Zone Color Mapping
- Oak Zone: #588157 (Light forest green)
- Oak-Hornbeam Zone: #3A5A40 (Medium forest green)
- Fir-Spruce Zone: #344E41 (Deep forest green)
- Spruce Zone: #1B4332 (Dark forest green)
- Dwarf Pine-Alpine Zone: #6B705C (Alpine gray-green)

#### Color Application Rules
- Maintain a minimum contrast ratio of 4.5:1 for all text (WCAG AA).
- Use color as reinforcement, not the sole indicator of meaning.
- Apply consistent color mapping for zone visualization across all charts and maps.
- Reserve primary green (#2D6A4F) for main call-to-action buttons and key navigation elements.

### Typography

#### Font Selection
- **Primary Font**: Inter (Sans-serif) - For UI text, headings, body copy.
- **Data Visualization Font**: IBM Plex Mono - For chart labels, numerical data displays.
- **Alternative System Fonts**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif (Fallback).

#### Type Scale (Size / Line Height)
- Display: 32px / 40px (2rem)
- H1: 24px / 32px (1.5rem)
- H2: 20px / 28px (1.25rem)
- H3: 18px / 24px (1.125rem)
- Body: 16px / 24px (1rem)
- Small/Caption: 14px / 20px (0.875rem)
- Tiny: 12px / 16px (0.75rem)

#### Typography Rules
- Use font weight for hierarchy (e.g., 400 for body, 500/600 for emphasis/headings).
- Maintain appropriate line-height (approx. 1.5 for body, 1.3 for headings).
- Limit line length to ~75 characters for optimal readability in text blocks.
- Ensure sufficient text contrast against backgrounds (see Color Rules).

### Spacing & Layout

#### Spacing Scale (Base: 4px)
- 4px (0.25rem) - Micro
- 8px (0.5rem) - Small / Internal
- 16px (1rem) - Medium / Component spacing
- 24px (1.5rem) - Large / Section spacing
- 32px (2rem) - XL / Major section spacing
- 48px (3rem) - XXL / Page-level spacing

#### Layout Grid
- Use a 12-column grid for desktop layouts.
- Employ consistent gutters (e.g., 16px).
- Max content width (e.g., 1440px) with centered container for large screens.
- Adapt to single-column layouts for mobile.

### Shadows & Elevation
- Level 1: `0 2px 4px rgba(0,0,0,0.05)` - Subtle (e.g., input focus)
- Level 2: `0 4px 8px rgba(0,0,0,0.1)` - Standard (e.g., cards, popups)
- Level 3: `0 8px 16px rgba(0,0,0,0.15)` - Prominent (e.g., modals, dropdowns)
- Use transitions for interactive shadow changes (hover, focus).

### Border Radius
- Small: 4px (e.g., buttons, inputs)
- Medium: 8px (e.g., cards, panels)
- Large: 12px (e.g., modals)
- Circular: 50% (e.g., avatars, icons)

## 5. Component Library & Implementation (Shadcn/UI)

**Shadcn/UI** is recommended due to its utility-first approach (Tailwind), unstyled nature allowing full theme customization, accessibility focus (Radix UI), and lightweight integration (copy-paste components).

### Key Components to Utilize
- **Button:** Primary actions, presets.
- **Card:** Information displays, metric cards.
- **Dialog:** Modals for info or configuration.
- **Dropdown Menu:** Layer controls, options.
- **Label:** Form field labels.
- **Slider:** Tree density selection, time progression.
- **Tabs:** Switching dashboard views.
- **Toast:** Notifications.
- **Toggle:** Layer visibility.
- **Tooltip:** Contextual help, chart hovers.

### Installation and Setup
```bash
# Initial Next.js Setup (if not done)
# npx create-next-app@latest digitechles --typescript --tailwind --eslint

# Add Shadcn/UI
npx shadcn-ui@latest init

# Add specific components (example)
npx shadcn-ui@latest add button card dialog dropdown-menu label slider tabs toast toggle tooltip
```

### Tailwind Configuration (`tailwind.config.js`)
*(Integrate the detailed configuration from the Design Spec here, including colors, fonts, borderRadius, etc.)*
```javascript
// tailwind.config.js (Condensed Example - use full config from Design Spec)
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: { /* ... */ },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "#2D6A4F", foreground: "hsl(var(--primary-foreground))", /* Add shades */ },
        secondary: { DEFAULT: "#1A759F", foreground: "hsl(var(--secondary-foreground))", /* Add shades */ },
        accent: { DEFAULT: "#D4A373", foreground: "hsl(var(--accent-foreground))", /* Add shades */ },
        destructive: { /* ... */ },
        muted: { /* ... */ },
        success: { DEFAULT: "#38B000" },
        warning: { DEFAULT: "#FFAA00" },
        info: { DEFAULT: "#4361EE" },
        zones: {
          oak: "#588157",
          oakHornbeam: "#3A5A40",
          firSpruce: "#344E41",
          spruce: "#1B4332",
          dwarfPine: "#6B705C",
        },
      },
      borderRadius: { /* ... based on Design System */ },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        mono: ["IBM Plex Mono", ...fontFamily.mono],
      },
      // ... other extensions like keyframes, animation if needed
    },
  },
  plugins: [require("tailwindcss-animate")], // Required by Shadcn/UI
}
```

## 6. UI/UX Design & Layout

### Overall Layout Structure
- Fixed header containing Logo, Application Title, primary controls (e.g., Export, Help).
- Main content area dominated by the interactive map.
- Right sidebar (collapsible/expandable) for contextual controls, information display, and the main dashboard.
- Responsive design adapting layout for tablet and mobile screens.

### Screen Layout Specifications

*(Use the detailed layout diagrams and descriptions from the Design Spec for Main Map View, Zone Selection Flow, Initial Sidebar, Expanded Sidebar/Dashboard, Zone Detail View, Environmental Impact Detail View, and Mobile Layouts)*

**Example: Main Map View (Conceptual)**
```
┌────────────────────────────────────────────────────────────────┐
│ [Logo] DIGITECHLES                            [Controls] [Help] │ Header
├────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ ┌────────────────────┐ │ Main Content
│ │                                     │ │  ◄ Expand/Collapse │ │
│ │                                     │ │                    │ │
│ │                                     │ │  Layer Controls    │ │
│ │         Interactive Map             │ │   [✓] Base Map     │ │ Sidebar
│ │         (Leaflet)                   │ │   [✓] Zones        │ │ (Initial State)
│ │                                     │ │                    │ │
│ │                                     │ │  Selected Info     │ │
│ │                                     │ │   (Zone/Point)     │ │
│ │                                     │ │                    │ │
│ │                                     │ │  [View Dashboard]  │ │
│ └─────────────────────────────────────┘ └────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
```

**Example: Expanded Sidebar View (Dashboard - Conceptual)**
```
┌────────────────────────────────────────────────────────────────┐
│ [Logo] DIGITECHLES                            [Controls] [Help] │ Header
├────────────────────────────────────────────────────────────────┤
│ ┌───────────────┐ ┌──────────────────────────────────────────┐ │ Main Content
│ │               │ │  ► Collapse                              │ │
│ │ Map           │ │  [Tab: Carbon] [Tab: Environmental]      │ │ Sidebar
│ │ (Minimized)   │ │  ┌────────────────────────────────────┐  │ │ (Expanded State)
│ │               │ │  │ Chart/Data Visualization Area      │  │ │
│ │               │ │  └────────────────────────────────────┘  │ │
│ │               │ │  Tree Density Controls                 │ │
│ │               │ │  Parameter Cards / Metrics             │ │
│ │               │ │  Time Slider                           │ │
│ └───────────────┘ └──────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
```

*(Refer to Section 3 of the original Design Spec for detailed visual layouts and descriptions of each state/view)*

## 7. Component Architecture & Interactive Elements

### Core Components (Logical Structure)

1.  **App Container**: Manages global layout, theme, and potentially state.
2.  **Header**: Logo, title, global controls.
3.  **Map Component (`MapComponent.tsx`)**: Renders Leaflet map, manages base layers, GeoJSON layers (zones, points), handles map interactions (zoom, pan, click).
4.  **Sidebar (`Sidebar.tsx`)**: Container for controls and dashboard. Manages expanded/collapsed state.
5.  **Layer Toggle (`LayerToggle.tsx`)**: Controls for map layer visibility (e.g., Base, Zones). Uses Shadcn `Toggle` or `Checkbox`.
6.  **Information Panel (`InfoPanel.tsx`)**: Displays static info for selected zone/point (name, altitude, soil, species). Uses Shadcn `Card`.
7.  **Tree Density Configurator (`DensityConfigurator.tsx`)**: Slider and preset buttons for trees/ha. Uses Shadcn `Slider`, `Button`, `Label`.
8.  **Carbon Sequestration Dashboard (`CarbonDashboard.tsx`)**: Displays carbon calculation results (chart, metrics). Uses Recharts `LineChart`, Shadcn `Card`.
9.  **Environmental Impact Visualizer (`EnvironmentalDashboard.tsx`)**: Displays environmental impact results (radar chart, parameter cards, time slider). Uses Recharts `RadarChart`, Shadcn `Card`, `Slider`.
10. **Export Controls (`ExportControls.tsx`)**: Buttons for exporting data/views. Uses Shadcn `Button`, `DropdownMenu`.
11. **User Guidance (`UserGuidance.tsx`)**: Tooltips, potentially intro tour. Uses Shadcn `Tooltip`.

### Interactive Element Specifications

*(Use the detailed specifications from Section 4 of the original Design Spec)*

*   **Map Controls**: Layer Toggle (Shadcn Toggle), Navigation (Leaflet defaults + custom reset), Point/Zone Selection (hover/click states, Leaflet event handlers).
*   **Tree Density Slider**: Shadcn Slider (500-5000 range, step 100), Shadcn Buttons for presets, visual feedback. (Include JSX example from Design Spec).
*   **Chart Interactions**: Recharts LineChart/RadarChart hover tooltips, optional zoom/pan, legend interaction. (Include JSX example from Design Spec).
*   **Time Progression Controls**: Shadcn Slider (Years 1-30), potentially with play/pause button.

## 8. Feature Implementation Details

### 1. Landing Page & Base Map
- Initial load shows Slovakia map centered via React-Leaflet.
- Display the three predefined points (`predefined-points.json`) as markers.
- Basic sidebar is visible with layer controls.
- Optional: First-time user overlay/tooltip explaining core interaction.

### 2. Vegetation Zone Layer
- Load `vegetation-zones.geojson` using React-Leaflet's `GeoJSON` component.
- Style polygons based on `zones` colors in the Design System.
- Implement `onEachFeature` for interactions:
    - `mouseover`: Highlight zone border, show tooltip with name.
    - `mouseout`: Remove highlight/tooltip.
    - `click`: Select zone, update sidebar `InfoPanel`, potentially zoom slightly.
- Use `LayerToggle` to control visibility of this layer.

### 3. Site Information Display
- When a point marker or zone polygon is clicked:
    - Fetch corresponding data (from `predefined-points.json` or `vegetation-zones.geojson`).
    - Update state managed by a parent component (e.g., `AppContainer` or a dedicated map context).
    - Populate the `InfoPanel` in the sidebar with Name, Altitude (for zones), Area Size, Soil Type, Ideal Species (for points), Baseline Parameters/Credits.

### 4. Tree Density Configuration
- Implement `DensityConfigurator` component in the sidebar (visible when a zone/point is selected).
- Use Shadcn `Slider` bound to a state variable (e.g., `selectedDensity`).
- Min: 500, Max: 5000, Step: 100. Default to `recommendedDensity` for the selected zone.
- Preset `Button`s set the `selectedDensity` state to predefined values (e.g., 1000, 2500, 4000 or zone's recommended).
- Changes in `selectedDensity` trigger recalculation of Carbon & Environmental Impacts.

### 5. Carbon Sequestration Calculation & Display
- Trigger calculation when zone/point selected, area defined (use point's `areaSize` or a default/input for zones), and `selectedDensity` changes.
- Implement the `calculateCarbonSequestration` function based on formulas below.
- Pass the 30-year projection data to `CarbonDashboard`.
- Render a Recharts `LineChart` showing cumulative tons CO₂ sequestered over 30 years.
- Display total sequestration and potentially yearly breakdown or milestone values in Shadcn `Card`s.

### 6. Environmental Impact Analysis
- Trigger calculation alongside carbon sequestration.
- Implement `calculateEnvironmentalImpact` function based on formulas below.
- Pass baseline values and calculated changes to `EnvironmentalDashboard`.
- Use a Recharts `RadarChart` to show the *relative* change (%) for each parameter at a selected year (controlled by time slider).
- Use Shadcn `Card`s to display each parameter's baseline value and the calculated value/change at the selected year.
- Implement the time progression `Slider` (Years 1-30) to update the displayed impact values.

### 7. Expandable Sidebar Dashboard
- Implement the sidebar's expand/collapse functionality using state and CSS transitions/Framer Motion.
- The expand button (`◄`) toggles a state (e.g., `isDashboardExpanded`).
- Conditional rendering or CSS classes adjust the width of the sidebar and the map container.
- When expanded, the sidebar shows the `CarbonDashboard`, `EnvironmentalDashboard`, and `DensityConfigurator`. Use Shadcn `Tabs` to switch between Carbon and Environmental views if needed.
- When collapsed, show the basic `InfoPanel` and layer controls.

### 8. User Guidance System
- Implement Shadcn `Tooltip`s on controls, chart elements, and potentially technical terms in the `InfoPanel`.
- Consider a simple first-time user overlay using a Modal (`Dialog`) or a library like `react-joyride`.

## 9. Calculation Formulas

### Carbon Sequestration
- **Age Factor Adjustment:** Define a function `getAgeFactor(year)`:
  ```javascript
  function getAgeFactor(year) {
    if (year >= 1 && year <= 5) return 0.3;
    if (year >= 6 && year <= 10) return 0.6;
    if (year >= 11 && year <= 20) return 0.9;
    if (year >= 21 && year <= 30) return 1.0;
    return 0; // Outside 30-year range
  }
  ```
- **Yearly Sequestration Calculation:** For a given `year` (1 to 30):
  `yearlySequestration = zone.carbonSequestrationRate * areaSize * (selectedDensity / 1000) * getAgeFactor(year)`
  *   `zone.carbonSequestrationRate`: Base rate for the selected zone (tons CO₂/ha/year at maturity).
  *   `areaSize`: Area in hectares (from selected point or input).
  *   `selectedDensity`: Trees per hectare selected by the user.
  *   *(Note: Division by 1000 assumes rate is per 1000 mature trees/ha, adjust if definition differs. The provided JSON structure implies rate is per hectare, so density factor might be relative to `recommendedDensity` or another baseline. Let's refine based on the JSON: Rate seems per hectare, impacted by density relative to recommended)*

- **Revised Yearly Sequestration (Assuming rate is per hectare, influenced by density):**
  `densityFactor = selectedDensity / zone.recommendedDensity` (Consider capping this, e.g., max 1.5 or based on ecological limits)
  `yearlySequestration = zone.carbonSequestrationRate * areaSize * densityFactor * getAgeFactor(year)`

- **Total Sequestration over 30 Years:** Sum of `yearlySequestration` for years 1 through 30.
- **Data for Chart:** An array of objects `{ year: y, cumulativeCarbon: total_up_to_year_y }` for y = 1 to 30.

### Environmental Impact Calculation
- **Parameter Change Calculation:** For each environmental parameter (e.g., 'temperatureReduction') at a given `year` (1 to 30):
  `densityInfluence = selectedDensity / zone.recommendedDensity` (Again, consider capping)
  `timeInfluence = year / 30` // Linear progression over 30 years
  `parameterImpactFactor = zone.environmentalImpactFactors[parameterKey]`
  
  `totalChangeOver30Years = parameterImpactFactor * densityInfluence` // This is the potential change after 30 years at this density

  `changeAtYear = totalChangeOver30Years * timeInfluence` // The change accumulated by the specific year

- **Applying the Change:**
  *   For reductions (Temperature, Dust): `newValue = baselineValue - (baselineValue * changeAtYear)` OR `newValue = baselineValue - changeAtYear` (if factor is absolute change). *Need clarification on factor definition - assuming it's a relative factor applied to baseline*. Let's assume `changeAtYear` represents the *absolute* change by that year (e.g., 0.06 means 0.06°C reduction by year 30 at recommended density).
  
  *   **Revised Parameter Calculation (Assuming factor is total absolute change over 30y at rec. density):**
      `absoluteChangeAtYear = zone.environmentalImpactFactors[parameterKey] * (selectedDensity / zone.recommendedDensity) * (year / 30)`
      `newValue = zone.baselineParameters[parameterKey] + (absoluteChangeAtYear * (parameterIncreases ? 1 : -1))` 
      *(Need to know which parameters increase vs decrease)*
        *   Decrease: Temperature, Dust, Albedo(?)
        *   Increase: Humidity, Evapotranspiration(?), Water Retention
  
- **Data for Visualization:** For the selected year: An array of objects `{ parameter: 'Temperature', baseline: X, current: Y }` for the Radar chart and parameter cards.

## 10. Responsive Design & Accessibility

### Responsive Design

*(Use the detailed specifications from Section 5 of the original Design Spec)*
- **Breakpoints**: Mobile (<640px), Tablet (640-1024px), Desktop (>1024px).
- **Strategies**: Map adjustments, bottom navigation (mobile), collapsible sidebar (tablet/desktop), stacked vs. side-by-side content, touch target optimization.

### Accessibility Compliance

*(Use the detailed specifications from Section 6 of the original Design Spec)*
- **Standards**: Target WCAG 2.1 Level AA. Use WAI-ARIA for complex widgets.
- **Color/Contrast**: Adhere to contrast ratios (4.5:1 text, 3:1 graphical). Use non-color indicators.
- **Keyboard Navigation**: Logical tab order, visible focus indicators (`focus-visible`), keyboard operability for all controls (map markers, sliders, charts).
- **Screen Reader Support**: Semantic HTML, ARIA attributes (`aria-label`, `aria-describedby`), alt text, announcements for dynamic updates.
- **Specific Components**: Provide keyboard navigation for map features, table alternatives for charts, respect `prefers-reduced-motion`.

## 11. Animation & Micro-interactions

*(Use the detailed specifications from Section 7 of the original Design Spec)*
- **Principles**: Enhance usability, short durations (200-500ms), easing functions, provide reduce motion option.
- **Key Animations**: State changes (toggles, buttons), data transitions (charts), navigation transitions (sidebar expand/collapse).
- **Micro-interactions**: Map hover/selection, slider interaction, feedback indicators.
- **Implementation**: CSS Transitions, Framer Motion (optional).

## 12. Design-to-Code Implementation Notes

*(Use the detailed specifications from Section 8 of the original Design Spec)*
- **Component Structure**: Atomic design principles, composition.
- **CSS**: Tailwind utility-first, custom classes/components via `@apply` sparingly, CSS variables for theming.
- **Theme**: Centralized theme config (e.g., `theme.ts` or within `tailwind.config.js`).
- **Map Implementation**: React-Leaflet hooks, GeoJSON component, event handling (`onEachFeature`). (Include code snippet example).
- **Chart Implementation**: Recharts wrappers, `ResponsiveContainer`.
- **Animation Implementation**: CSS transitions, Framer Motion hooks (`useAnimationPresets`). (Include code snippet example).

## 13. Development Phases

### Phase 1: Project Setup & Base Map
- Set up Next.js project (TypeScript, Tailwind, Shadcn/UI).
- Implement basic layout (Header, Map Area, Sidebar Area).
- Integrate Leaflet map with Slovakia boundary (`slovakia-boundary.geojson`).
- Add predefined markers (`predefined-points.json`).
- Implement basic sidebar structure with expand/collapse toggle.

### Phase 2: Vegetation Zone Implementation
- Load and display `vegetation-zones.geojson` layer.
- Implement color-coding based on zone ID and Design System.
- Add hover (highlight/tooltip) and click (selection) interactions.
- Populate basic `InfoPanel` in sidebar with selected zone/point data.
- Implement `LayerToggle` functionality.

### Phase 3: Configuration & Dashboard Shell
- Build the `DensityConfigurator` component (Slider, Presets).
- Structure the expanded dashboard view within the sidebar.
- Add Shadcn `Tabs` for Carbon/Environmental sections (if using tabs).
- Create placeholders for charts and metric cards.
- Ensure responsive behavior of sidebar/dashboard layout.

### Phase 4: Calculation Engine
- Implement `calculateCarbonSequestration` function.
- Implement `calculateEnvironmentalImpact` function.
- Create utility functions for age factor, parameter lookups, etc.
- Connect density selection and zone/point selection to trigger calculations.
- Prepare data structures suitable for Recharts.

### Phase 5: Data Visualization
- Implement Recharts `LineChart` for Carbon Sequestration using calculated data.
- Implement Recharts `RadarChart` and parameter `Card`s for Environmental Impact.
- Connect the time progression `Slider` to update Environmental Impact visualizations.
- Add data export functionality (e.g., CSV download, chart image save).

### Phase 6: Final Integration, Polish & Guidance
- Ensure all components interact correctly.
- Refine UI based on the Design System.
- Implement user guidance (`Tooltip`s, optional tour).
- Implement accessibility features (ARIA attributes, keyboard nav).
- Add subtle animations/transitions.
- Perform cross-browser and responsive testing.
- Optimize performance (GeoJSON loading, calculations).

## 14. Testing Requirements

- **Unit Tests**: For calculation functions, utility functions.
- **Integration Tests**: For component interactions (e.g., slider affecting charts).
- **End-to-End Tests**: Simulate user flows (select zone -> configure density -> view results).
- **Cross-browser Testing**: Latest Chrome, Firefox, Safari, Edge.
- **Responsive Design Testing**: Across defined breakpoints (Mobile, Tablet, Desktop) using browser dev tools and real devices if possible.
- **Accessibility Testing**: Automated tools (Axe), manual keyboard navigation, screen reader testing (NVDA/JAWS/VoiceOver).
- **Performance Testing**: Map rendering speed with GeoJSON, calculation speed, bundle size analysis.
- **Data Validation**: Verify calculation outputs against manual examples or benchmarks.

## 15. Future Enhancement Considerations

- **Tree Species Selection**: Allow users to select specific species affecting rates/impacts.
- **User-Defined Areas**: Allow drawing polygons or uploading shapefiles for custom analysis.
- **Backend Integration**: Save/load user scenarios, user accounts.
- **Advanced Modeling**: Incorporate soil type, slope, existing land cover into calculations.
- **Economic Analysis**: Add cost estimation, carbon credit market value features.
- **API Exposure**: Allow other applications to use the calculation engine.
- **Data Updates**: Mechanism for updating zone data, climate projections.

## 16. Implementation Checklist

*(Combined and ordered checklist)*

### Phase 1: Project Setup & Base Map
- [ ] Set up Next.js project with TypeScript and Tailwind CSS
- [ ] Install and configure Shadcn/UI components
- [ ] Configure theme variables and design tokens in Tailwind config
- [ ] Implement basic layout structure (Header, Map Area, Sidebar Area)
- [ ] Implement base layout and responsive containers
- [ ] Add Leaflet map component with Slovakia boundaries
- [ ] Implement the three predefined marker locations
- [ ] Create basic sidebar structure with expand/collapse functionality

### Phase 2: Vegetation Zone Implementation
- [ ] Implement map component with Leaflet integration (basic map exists)
- [ ] Implement GeoJSON loading for Slovakia boundary (`slovakia-boundary.geojson`)
- [ ] Implement GeoJSON loading for vegetation zones (`vegetation-zones.geojson`)
- [ ] Create color-coded visualization of zones on the map
- [ ] Add zone selection interactions (hover/click) on the map
- [ ] Implement zone information display in the (collapsed) sidebar (`InfoPanel`)
- [ ] Create layer toggle controls (`LayerToggle`)

### Phase 3: Configuration & Dashboard Shell
- [ ] Create control panel components within the sidebar
- [ ] Implement expandable sidebar dashboard view
- [ ] Implement tabs (if used) for different data categories in the dashboard
- [ ] Build tree density configurator (`DensityConfigurator`) with slider and presets
- [ ] Create chart placeholders for visualization sections in the dashboard
- [ ] Implement responsive behavior for dashboard components and sidebar states

### Phase 4: Calculation Engine
- [ ] Build carbon sequestration calculation functions (`calculateCarbonSequestration`)
- [ ] Create environmental impact calculation system (`calculateEnvironmentalImpact`)
- [ ] Implement year-based progression model logic within calculations
- [ ] Connect calculations to UI state (selected zone/point, density)
- [ ] Create data transformation logic for Recharts

### Phase 5: Data Visualization
- [ ] Implement carbon sequestration charts (Recharts `LineChart`)
- [ ] Create environmental impact visualizations (Recharts `RadarChart`, parameter `Card`s)
- [ ] Build parameter cards for individual environmental metrics
- [ ] Add time progression slider and connect it to Environmental Impact view
- [ ] Implement comparison features (optional, e.g., compare scenarios)
- [ ] Add data export functionality (CSV, Image)

### Phase 6: Polish, Guidance & Optimization
- [ ] Connect all components into a cohesive application flow
- [ ] Add user guidance system (`Tooltip`s, potentially intro tour)
- [ ] Implement accessibility features (ARIA, keyboard nav, screen reader support)
- [ ] Add animations and transitions (using CSS/Framer Motion)
- [ ] Implement responsive adaptations for all views/components
- [ ] Optimize performance (map rendering, calculations, bundle size)
- [ ] Conduct thorough cross-browser and responsive testing
- [ ] Add documentation and component showcase (e.g., Storybook - optional)

```