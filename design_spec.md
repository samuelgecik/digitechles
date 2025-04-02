
# DIGITECHLES UI/UX Design Specification

## 1. Design System Overview

### Design Philosophy
The DIGITECHLES application requires a design system that communicates environmental stewardship, scientific credibility, and accessibility. The visual language will balance data-rich visualization with intuitive navigation, creating a professional tool that remains approachable to various stakeholders in afforestation projects.

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
  - Dark: #2D6A4F (Primary actions, important text)
  - Darkest: #1B4332 (Headers, emphasis)

- **Blues**:
  - Light: #90E0EF (Water features, chart elements)
  - Medium: #00B4D8 (Interactive elements)
  - Dark: #0077B6 (Important UI elements)

- **Earth Tones**:
  - Light Sand: #E9EDC9 (Background variations)
  - Medium: #CCD5AE (Neutral elements, borders)
  - Dark: #D4A373 (Highlights, focus states)

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
- Maintain a minimum contrast ratio of 4.5:1 for all text
- Use color as reinforcement, not the sole indicator of meaning
- Apply consistent color mapping for zone visualization across all charts and maps
- Reserve primary green for main actions and navigation

### Typography

#### Font Selection
- **Primary Font**: Inter (Sans-serif)
  - Excellent readability at various sizes
  - Good support for multiple languages
  - Modern, clean appearance

- **Data Visualization Font**: IBM Plex Mono
  - Clear number presentation
  - Distinct appearance for data values
  - Good alignment in charts and tables

- **Alternative System Fonts**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif

#### Type Scale
- Display: 32px/40px (2rem)
- H1: 24px/32px (1.5rem)
- H2: 20px/28px (1.25rem)
- H3: 18px/24px (1.125rem)
- Body: 16px/24px (1rem)
- Small/Caption: 14px/20px (0.875rem)
- Tiny: 12px/16px (0.75rem)

#### Typography Rules
- Use font weight for hierarchy (400 for body, 500 for emphasis, 600 for headings)
- Maintain proper line-height (1.5 for body text, 1.3 for headings)
- Limit line length to 75 characters for optimal readability
- Ensure sufficient text contrast against backgrounds

### Spacing & Layout

#### Spacing Scale
- 4px (0.25rem) - Micro spacing
- 8px (0.5rem) - Default internal spacing
- 16px (1rem) - Standard component spacing
- 24px (1.5rem) - Medium section spacing
- 32px (2rem) - Large section spacing
- 48px (3rem) - Extra large section spacing

#### Layout Grid
- 12-column grid for desktop layouts
- Single-column with standard spacing for mobile layouts
- Consistent 16px gutters between columns
- Maximum content width of 1440px with responsive behavior

### Shadows & Elevation
- Level 1: `0 2px 4px rgba(0,0,0,0.05)` - Subtle elevation
- Level 2: `0 4px 8px rgba(0,0,0,0.1)` - Cards, popups
- Level 3: `0 8px 16px rgba(0,0,0,0.15)` - Modals, important UI elements
- Interactive shadows: Transition between levels for interactive states

### Border Radius
- Small: 4px - Form inputs, buttons
- Medium: 8px - Cards, panels
- Large: 12px - Modal windows
- Circular: 50% - Avatar elements, circular buttons

## 2. Component Library Recommendation

After evaluating various component libraries, **Shadcn/UI** is recommended as the primary component system for DIGITECHLES for the following reasons:

### Shadcn/UI Advantages
- Utility-first approach that uses Tailwind CSS
- Unstyled and accessible components that allow custom theming
- Lightweight with minimal bundle size impact
- Copy-paste components directly into the project (not imported as a dependency)
- Well-documented with Radix UI primitives for accessibility
- Excellent theming capabilities aligned with our design system

### Key Components to Utilize
- **Dialog** - For information popups and configuration panels
- **Dropdown Menu** - For layer controls and filtering options
- **Slider** - For tree density configuration
- **Tabs** - For switching between different information views
- **Toast** - For system notifications
- **Tooltip** - For contextual help
- **Toggle** - For layer visibility options
- **Card** - For information displays

### Installation and Setup
```bash
# Initial setup
npx create-next-app@latest digitechles --typescript --tailwind --eslint

# Add Shadcn/UI
npx shadcn-ui@latest init

# Configure with our color theme
# Add specific components as needed
npx shadcn-ui@latest add button card dialog dropdown-menu slider tabs toast toggle tooltip
```

### Tailwind Configuration
```javascript
// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2D6A4F",
          foreground: "hsl(var(--primary-foreground))",
          50: "#D8F3DC",
          100: "#B7E4C7",
          200: "#95D5B2",
          300: "#74C69D",
          400: "#52B788",
          500: "#2D6A4F",
          600: "#1B4332",
          700: "#081C15",
        },
        secondary: {
          DEFAULT: "#1A759F",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#CAF0F8",
          100: "#ADE8F4",
          200: "#90E0EF",
          300: "#48CAE4",
          400: "#00B4D8",
          500: "#0077B6",
          600: "#023E8A",
          700: "#03045E",
        },
        accent: {
          DEFAULT: "#D4A373",
          foreground: "hsl(var(--accent-foreground))",
          50: "#FEFAE0",
          100: "#FAEDCD",
          200: "#E9EDC9",
          300: "#CCD5AE",
          400: "#D4A373",
          500: "#BC6C25",
          600: "#A98467",
          700: "#6B705C",
        },
        destructive: {
          DEFAULT: "#D62828",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        success: {
          DEFAULT: "#38B000",
        },
        warning: {
          DEFAULT: "#FFAA00",
        },
        info: {
          DEFAULT: "#4361EE",
        },
        // Zone-specific colors
        zones: {
          oak: "#588157",
          oakHornbeam: "#3A5A40",
          firSpruce: "#344E41",
          spruce: "#1B4332",
          dwarfPine: "#6B705C",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        mono: ["IBM Plex Mono", ...fontFamily.mono],
      },
    },
  },
}
```

## 3. Screen Layout Specifications

### Main Map View

```
┌────────────────────────────────────────────────────────────────┐
│ [Logo] DIGITECHLES                            [Controls] [Help] │
├────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ ┌────────────────────┐ │
│ │                                     │ │                    │ │
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
│ └─────────────────────────────────────┘ └────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────┐ │
│ │                                                            │ │
│ │  [Tab: Carbon] [Tab: Environmental] [Tab: Comparison]      │ │
│ │  ┌──────────────────────────────────────────────────────┐  │ │
│ │  │                                                      │  │ │
│ │  │  [Chart: Carbon Sequestration Over 30 Years]         │  │ │
│ │  │                                                      │  │ │
│ │  └──────────────────────────────────────────────────────┘  │ │
│ │  Tree Density: [====|==========] 2500 trees/ha             │ │
│ │  [Low] [Medium] [High]                                     │ │
│ │                                                            │ │
│ │  Total Sequestration: 240 tons CO₂ over 30 years          │ │
│ │                                                            │ │
│ └────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
```

#### Design Decisions
- Map dominates the interface as the primary interaction point
- Right sidebar contains contextual controls to maximize map viewing area
- Bottom panel for data visualization allows users to maintain geographical context while viewing results
- Tabs organize different data views without overwhelming the user
- Controls are grouped logically with clear visual hierarchy

### Zone Detail View (Activated on Zone Click)

```
┌────────────────────────────────────────────────────────────────┐
│ [Logo] DIGITECHLES                            [Controls] [Help] │
├────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ ┌────────────────────┐ │
│ │                                     │ │                    │ │
│ │                                     │ │  Oak-Hornbeam Zone │ │
│ │                                     │ │  300-500m altitude │ │
│ │                                     │ │                    │ │
│ │                                     │ │  Soil Type:        │ │
│ │          Interactive Map            │ │  Loamy soil with   │ │
│ │          (Highlighted Zone)         │ │  good drainage     │ │
│ │                                     │ │                    │ │
│ │                                     │ │  Ideal Species:    │ │
│ │                                     │ │  • European Oak    │ │
│ │                                     │ │  • Common Hornbeam │ │
│ │                                     │ │                    │ │
│ │                                     │ │  [View Details]    │ │
│ └─────────────────────────────────────┘ └────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────┐ │
│ │ Environmental Impact                                       │ │
│ │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │ │
│ │ │ Temperature  │ │ Humidity     │ │ Dust Levels  │        │ │
│ │ │ -1.2°C       │ │ +8%          │ │ -14%         │        │ │
│ │ └──────────────┘ └──────────────┘ └──────────────┘        │ │
│ │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │ │
│ │ │ Evaporation  │ │ Albedo       │ │ Water        │        │ │
│ │ │ +7%          │ │ +2.5%        │ │ Retention +10%│        │ │
│ │ └──────────────┘ └──────────────┘ └──────────────┘        │ │
│ │                                                            │ │
│ │ [View Full Environmental Report]                           │ │
│ └────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
```

#### Design Decisions
- Maintains geographical context while displaying zone-specific information
- Uses cards for environmental metrics to create visual grouping
- Clear labeling with both percentage and directional indicators
- Action buttons for drilling deeper into specific aspects of the data

### Environmental Impact Detail View

```
┌────────────────────────────────────────────────────────────────┐
│ [Logo] DIGITECHLES                            [Controls] [Help] │
├────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────┐ │
│ │ Environmental Impact Analysis                              │ │
│ │ Oak-Hornbeam Zone | 2500 trees/ha | 8 hectares             │ │
│ ├────────────────────────────────────────────────────────────┤ │
│ │ ┌───────────────────────┐  ┌───────────────────────────┐   │ │
│ │ │                       │  │ Parameter Changes Over Time│   │ │
│ │ │                       │  │                           │   │ │
│ │ │                       │  │ [Line Chart: Multiple     │   │ │
│ │ │  [Radar Chart:        │  │  Parameters x Time]       │   │ │
│ │ │   Environmental       │  │                           │   │ │
│ │ │   Parameters]         │  │                           │   │ │
│ │ │                       │  │                           │   │ │
│ │ │                       │  │                           │   │ │
│ │ └───────────────────────┘  └───────────────────────────┘   │ │
│ │                                                            │ │
│ │ Time Progression: [===|===============] Year 15            │ │
│ │                                                            │ │
│ │ Detailed Metrics:                                          │ │
│ │ • Temperature reduction: 1.2°C (0.08°C annually)           │ │
│ │ • Humidity increase: 8% (0.53% annually)                   │ │
│ │ • Dust reduction: 14% (0.93% annually)                     │ │
│ │ • Water retention improvement: 10% (0.67% annually)        │ │
│ │                                                            │ │
│ │ [Export Report] [Compare Zones]                            │ │
│ └────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
```

#### Design Decisions
- Dual visualization approach with radar chart for overall comparison and line chart for temporal progression
- Time slider allows users to see changes at specific intervals
- Detailed metrics provided as exact values for precision
- Clear header maintains context about selected zone and configuration

### Mobile Layout (Map View)

```
┌────────────────────────┐
│ DIGITECHLES    [≡][?] │
├────────────────────────┤
│                        │
│                        │
│                        │
│    Interactive Map     │
│    of Slovakia         │
│                        │
│                        │
│                        │
├────────────────────────┤
│ [Map] [Layers] [Data]  │
├────────────────────────┤
│ Selected: Oak Zone     │
│ Tree Density:          │
│ [==|========] 2000/ha  │
│                        │
│ Carbon: 180 tons CO₂   │
│ [View Details ↓]       │
└────────────────────────┘
```

#### Mobile Design Decisions
- Bottom navigation for switching between primary views
- Collapsible details panel to maximize map viewing area
- Essential controls and information always visible
- Progressive disclosure of detailed information

## 4. Interactive Element Specifications

### Map Controls

#### Layer Toggle
- **Style**: Shadcn Toggle components with descriptive labels
- **States**: On/Off with subtle animation
- **Grouping**: Logical grouping of related layers
- **Visual Feedback**: Layer icon changes color when active

#### Map Navigation
- **Zoom Controls**: "+" and "-" buttons on top right of map
- **Pan**: Standard drag interaction
- **Reset View**: "Home" button returning to full Slovakia view
- **Mouse Interaction**: Scroll wheel zoom, right-click pan

#### Point/Zone Selection
- **Hover State**: Subtle highlight with tooltip showing name
- **Selected State**: Prominent highlight with pulsing animation
- **Multi-select**: Shift+click to compare multiple zones (advanced feature)

### Tree Density Slider

- **Component**: Shadcn Slider with custom styling
- **Range**: 500-5000 trees/ha
- **Step Size**: 100 trees/ha
- **Tooltip**: Shows exact value on drag
- **Visual Indicator**: Density visualization using tree icons
- **Preset Buttons**: Quick-select options below slider

```jsx
<div className="space-y-4">
  <Label htmlFor="tree-density">Tree Density (trees/ha)</Label>
  <Slider
    id="tree-density"
    min={500}
    max={5000}
    step={100}
    defaultValue={[2500]}
    onValueChange={(value) => setTreeDensity(value[0])}
  />
  <div className="flex justify-between text-sm text-muted-foreground">
    <span>500</span>
    <span>5000</span>
  </div>
  <div className="flex space-x-2">
    <Button variant="outline" onClick={() => setTreeDensity(1000)}>Low (1000)</Button>
    <Button variant="outline" onClick={() => setTreeDensity(2500)}>Medium (2500)</Button>
    <Button variant="outline" onClick={() => setTreeDensity(4000)}>High (4000)</Button>
  </div>
  <div className="mt-2 text-sm">
    Current density: <span className="font-semibold">{treeDensity} trees/ha</span>
  </div>
</div>
```

### Chart Interactions

#### Carbon Sequestration Line Chart
- **Component**: Recharts LineChart with custom styling
- **Interaction**: Hover shows exact values at each time point
- **Animation**: Gentle animation on data change
- **Reference Lines**: Optional threshold markers
- **Comparison**: Multiple lines when comparing scenarios

#### Environmental Impact Radar Chart
- **Component**: Recharts RadarChart with custom theming
- **Interaction**: Hover highlights specific parameter and shows value
- **Animation**: Smooth transition when changing time periods
- **Toggle Controls**: Show/hide specific parameters

```jsx
<div className="p-4 bg-white rounded-lg shadow-md">
  <h3 className="text-lg font-medium mb-4">Environmental Impact</h3>
  <ResponsiveContainer width="100%" height={300}>
    <RadarChart data={environmentalImpactData}>
      <PolarGrid strokeDasharray="3 3" stroke="#CCD5AE" />
      <PolarAngleAxis dataKey="parameter" tick={{fill: "#1B4332"}} />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar 
        name="Current Impact" 
        dataKey="value" 
        stroke="#2D6A4F" 
        fill="#52B788" 
        fillOpacity={0.6} 
      />
      <Tooltip />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
</div>
```

### Time Progression Controls

- **Component**: Shadcn Slider with custom year labels
- **Range**: Years 1-30
- **Step Size**: 1 year
- **Visual Indicators**: Major milestones at years 5, 10, 20, 30
- **Animation**: Play button to animate through years automatically
- **Year Display**: Large, clear display of current selected year

## 5. Responsive Design Considerations

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Responsive Strategies

#### Map Component
- Full width on all devices
- Height adjusts based on screen size (50vh on mobile, 70vh on tablet, 75vh on desktop)
- Controls position adjusted for touch-friendly interaction on mobile

#### Navigation
- Desktop: Horizontal navigation in header
- Mobile: Bottom tab navigation for primary sections
- Tablet: Collapsible sidebar navigation

#### Data Visualization
- Desktop: Side-by-side charts and data
- Tablet: Vertical stacking of related visualizations
- Mobile: Single column with collapsible sections

#### Control Panel
- Desktop: Persistent right sidebar
- Tablet: Collapsible right panel
- Mobile: Bottom sheet that slides up when activated

### Touch Optimization
- Minimum touch target size of 44×44px
- Increased spacing between interactive elements on touch devices
- Swipe gestures for navigating between related views
- Context menus replaced with direct action buttons

## 6. Accessibility Compliance

### Standards Adherence
- WCAG 2.1 Level AA compliance as minimum target
- WAI-ARIA implementation for complex interactive elements

### Color and Contrast
- Maintain minimum contrast ratio of 4.5:1 for normal text
- 3:1 minimum contrast for large text and graphical elements
- Alternative visual indicators beyond color (patterns, icons, text)

### Keyboard Navigation
- Logical tab order for all interactive elements
- Focus indicators that are clearly visible
- Keyboard shortcuts for common actions (with on-screen guide)

### Screen Reader Support
- Semantic HTML structure
- ARIA labels for all interactive elements
- Meaningful alt text for all images and icons
- Announcements for dynamic content changes

### Specific Component Requirements

#### Map Accessibility
- Keyboard-navigable markers and zones
- Text alternative for map information
- Screen reader announcements for zone selection

#### Charts Accessibility
- Table view alternative for all charts
- Sonification option for trend data (advanced feature)
- High-contrast mode option

## 7. Animation and Micro-interaction Guidelines

### Principles
- Animations should enhance understanding, not distract
- Keep durations short (200-500ms) for interface elements
- Use easing functions for natural movement
- Ensure animations can be disabled for users with vestibular disorders

### Key Animations

#### State Changes
- Toggle switches: 200ms transition with slight bounce
- Button hover/focus: 150ms color shift and subtle scale
- Selection states: 250ms transition with emphasis

#### Data Transitions
- Chart data updates: 500ms staggered transition
- Environmental parameter changes: 400ms transition
- Time progression: Smooth interpolation between years

#### Navigation Transitions
- Panel opening/closing: 300ms slide with ease-out
- Tab switching: 250ms fade transition
- Modal dialogs: 350ms fade + scale combination

### Micro-interactions

#### Map Interactions
- Zone hover: Subtle glow effect (200ms)
- Zone selection: Pulse animation (400ms)
- Marker placement: Drop-in animation (300ms with bounce)

#### Form Elements
- Slider thumb: Slight scale increase on active state
- Checkbox/radio: Custom check animation (250ms)
- Input focus: Border highlight animation (200ms)

#### Feedback Indicators
- Success actions: Checkmark animation
- Processing states: Subtle pulse animation
- Error states: Shake animation for invalid inputs

## 8. Design-to-Code Implementation Notes

### Component Structure
- Implement using atomic design principles
- Structure components in a hierarchy from atoms to templates
- Use composition over inheritance for component flexibility

### CSS Implementation
- Use Tailwind utility classes as primary styling method
- Create custom Tailwind classes for recurring patterns
- Implement CSS variables for theme tokens

### Theme Implementation
```tsx
// theme.ts
export const themeConfig = {
  colors: {
    primary: {
      50: "#D8F3DC",
      100: "#B7E4C7",
      // ...other values
    },
    // ...other color categories
  },
  fonts: {
    sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    mono: "IBM Plex Mono, menlo, monaco, consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  // ...other theme properties
}
```

### Map Implementation
- Use React-Leaflet for map rendering
- Create custom hooks for map state management
- Implement GeoJSON loading with suspense and fallbacks

```tsx
// MapComponent.tsx example
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from 'react-leaflet';
import { useVegetationZones } from '@/hooks/useVegetationZones';
import { VegetationZoneLayer } from '@/components/map/VegetationZoneLayer';

export function MapComponent() {
  const { zones, isLoading, error } = useVegetationZones();
  
  return (
    <div className="w-full h-[70vh] rounded-lg overflow-hidden border border-border">
      {isLoading ? (
        <MapSkeleton />
      ) : (
        <MapContainer 
          center={[48.7, 19.5]} 
          zoom={7} 
          zoomControl={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topright" />
          <VegetationZoneLayer zones={zones} />
        </MapContainer>
      )}
    </div>
  );
}
```

### Chart Implementation
- Use Recharts for data visualization
- Create wrapper components for consistent styling
- Implement responsive container sizing

### Animation Implementation
- Use CSS transitions for simple animations
- Implement Framer Motion for complex animations
- Create animation preset hooks for consistency

```tsx
// useAnimationPresets.ts
import { useReducedMotion } from 'framer-motion';

export function useAnimationPresets() {
  const prefersReducedMotion = useReducedMotion();
  
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: prefersReducedMotion ? 0 : 0.3 }
  };
  
  const slideIn = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: prefersReducedMotion ? 0 : 0.4 }
  };
  
  // Additional animation presets
  
  return {
    fadeIn,
    slideIn,
    // Other presets
  };
}
```

## 9. Implementation Checklist

- [ ] Set up Next.js project with Tailwind CSS
- [ ] Install and configure Shadcn/UI
- [ ] Configure theme variables and design tokens
- [ ] Implement base layout and responsive containers
- [ ] Create map component with Leaflet integration
- [ ] Implement GeoJSON loading for Slovakia and zones
- [ ] Create control panel components
- [ ] Implement tree density configurator
- [ ] Create data visualization components
- [ ] Implement calculation engine
- [ ] Add accessibility features
- [ ] Implement animations and transitions
- [ ] Create responsive adaptations
- [ ] Add documentation and component showcase

