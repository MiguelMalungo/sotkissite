# Scroll Animation System

This project includes a powerful scroll animation system that triggers animations when elements come into view.

## Components

### 1. `useScrollAnimation` Hook

A custom React hook that uses the Intersection Observer API to detect when elements enter the viewport.

**Location:** `src/hooks/useScrollAnimation.ts`

**Usage:**
```tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MyComponent = () => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px',
    triggerOnce: true
  });

  return (
    <div ref={elementRef} className={isVisible ? 'visible' : ''}>
      Content
    </div>
  );
};
```

**Options:**
- `threshold` (number, default: 0.1): Percentage of element visibility required to trigger
- `rootMargin` (string, default: '0px'): Margin around the viewport
- `triggerOnce` (boolean, default: true): Whether to trigger animation only once

### 2. `AnimateOnScroll` Component

A wrapper component that applies scroll-triggered animations to its children.

**Location:** `src/components/ui/AnimateOnScroll.tsx`

**Usage:**
```tsx
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';

<AnimateOnScroll
  animation="fadeSlideUp"
  delay={200}
  duration={0.8}
>
  <h1>Your content here</h1>
</AnimateOnScroll>
```

**Props:**
- `animation` (AnimationType): The type of animation to apply
- `delay` (number, default: 0): Delay in milliseconds before animation starts
- `duration` (number, default: 0.8): Duration of animation in seconds
- `threshold` (number, default: 0.1): Visibility threshold
- `rootMargin` (string, default: '0px'): Margin around viewport
- `triggerOnce` (boolean, default: true): Trigger once or repeatedly
- `className` (string): Additional CSS classes
- `as` (keyof JSX.IntrinsicElements, default: 'div'): HTML element type

## Animation Types

The following animation types are available:

### Basic Animations
- **`fade`**: Simple opacity fade-in
- **`blur`**: Fade in with blur effect

### Slide Animations
- **`slideUp`**: Slide up (without fade)
- **`slideDown`**: Slide down (without fade)
- **`slideLeft`**: Slide from right to left (without fade)
- **`slideRight`**: Slide from left to right (without fade)

### Combined Animations
- **`fadeSlideUp`**: Fade in + slide up (most common)
- **`fadeSlideDown`**: Fade in + slide down
- **`fadeBlur`**: Fade in + blur effect

### Scale Animation
- **`scaleUp`**: Scale from 90% to 100% with fade

## Examples

### Sequential Elements
```tsx
<AnimateOnScroll animation="fadeSlideUp" delay={0}>
  <h2>First Element</h2>
</AnimateOnScroll>

<AnimateOnScroll animation="fadeSlideUp" delay={150}>
  <p>Second Element (appears 150ms after first)</p>
</AnimateOnScroll>

<AnimateOnScroll animation="fadeSlideUp" delay={300}>
  <button>Third Element (appears 300ms after first)</button>
</AnimateOnScroll>
```

### Images with Different Effects
```tsx
<AnimateOnScroll animation="fadeBlur" duration={1}>
  <img src="hero.jpg" alt="Hero" />
</AnimateOnScroll>

<AnimateOnScroll animation="scaleUp" duration={0.9}>
  <img src="product.jpg" alt="Product" />
</AnimateOnScroll>
```

### Directional Slides
```tsx
{/* Content sliding in from left */}
<AnimateOnScroll animation="fadeSlideRight">
  <div>Content</div>
</AnimateOnScroll>

{/* Image sliding in from right */}
<AnimateOnScroll animation="fadeSlideLeft">
  <img src="image.jpg" alt="Image" />
</AnimateOnScroll>
```

## Integration with Existing Components

### Card Component
The `Card` component now supports animations:

```tsx
<Card
  animate={true}
  animation="fadeSlideUp"
  animationDelay={200}
>
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>
```

### SectionGrid Component
The `SectionGrid` component automatically applies animations to its content and images:
- Headings animate with `fadeSlideUp` (100ms delay)
- Text animates with `fadeSlideUp` (250ms delay)
- Buttons animate with `fadeSlideUp` (400ms delay)
- Images animate with `fadeSlideLeft` or `fadeSlideRight` depending on layout

## Customization

### Custom Animation Duration
```tsx
<AnimateOnScroll animation="fadeSlideUp" duration={1.2}>
  <div>Slower animation</div>
</AnimateOnScroll>
```

### Custom Trigger Threshold
```tsx
<AnimateOnScroll
  animation="fadeSlideUp"
  threshold={0.5}  // Element must be 50% visible
>
  <div>Content</div>
</AnimateOnScroll>
```

### Repeating Animations
```tsx
<AnimateOnScroll
  animation="fadeSlideUp"
  triggerOnce={false}  // Animates every time it enters/exits viewport
>
  <div>Repeating animation</div>
</AnimateOnScroll>
```

## CSS Variables

You can customize the animation behavior using CSS variables:

```css
.animate-on-scroll {
  --animation-delay: 0ms;
  --animation-duration: 0.8s;
  --animation-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Accessibility

The animation system respects user preferences:
- Animations are disabled for users with `prefers-reduced-motion: reduce`
- All elements maintain proper semantic structure
- Animations don't affect screen reader accessibility

## Performance

- Uses Intersection Observer API for efficient viewport detection
- CSS transitions for smooth, hardware-accelerated animations
- `will-change` property for optimized rendering
- Automatic cleanup on component unmount

## Browser Support

- Modern browsers with Intersection Observer support
- Graceful degradation for older browsers (elements appear without animation)
