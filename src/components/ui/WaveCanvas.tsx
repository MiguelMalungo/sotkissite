import React, { useRef, useEffect } from 'react';

interface Blob {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  speedX: number;
  speedY: number;
  color: string;
  phase: number;
  pulseSpeed: number;
  wobbleAmount: number;
  update: (time: number, canvas: HTMLCanvasElement) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulse: number;
  reset: (canvas: HTMLCanvasElement) => void;
  update: (canvas: HTMLCanvasElement) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const colors = {
  darkBg: '#0d1117',
  green1: 'rgba(124, 179, 66, 0.5)',
  green2: 'rgba(85, 139, 47, 0.45)',
  green3: 'rgba(51, 105, 30, 0.4)',
  green4: 'rgba(124, 179, 66, 0.25)',
  accent: 'rgba(156, 204, 101, 0.35)',
  highlight: 'rgba(180, 220, 120, 0.3)',
  shadow: 'rgba(20, 50, 10, 0.6)',
};

const createBlob = (
  x: number,
  y: number,
  radius: number,
  speedX: number,
  speedY: number,
  color: string
): Blob => {
  const phase = Math.random() * Math.PI * 2;
  const pulseSpeed = 0.3 + Math.random() * 0.4;
  const wobbleAmount = 0.15 + Math.random() * 0.1;

  return {
    baseX: x,
    baseY: y,
    x,
    y,
    radius,
    baseRadius: radius,
    speedX,
    speedY,
    color,
    phase,
    pulseSpeed,
    wobbleAmount,
    update(time: number, canvas: HTMLCanvasElement) {
      this.x = this.baseX + Math.sin(time * this.speedX + this.phase) * (canvas.width * 0.1);
      this.y = this.baseY + Math.cos(time * this.speedY + this.phase) * (canvas.height * 0.08);
      this.radius = this.baseRadius * (1 + Math.sin(time * this.pulseSpeed) * this.wobbleAmount);
    },
    // Simplified: single radial gradient, no composite mode switches, no ctx.filter
    draw(ctx: CanvasRenderingContext2D) {
      const rgbaMatch = this.color.match(/[\d.]+/g);
      if (!rgbaMatch) return;
      const r = rgbaMatch[0];
      const g = rgbaMatch[1];
      const b = rgbaMatch[2];
      const a = parseFloat(rgbaMatch[3]);

      const grad = ctx.createRadialGradient(
        this.x - this.radius * 0.3,
        this.y - this.radius * 0.3,
        0,
        this.x,
        this.y,
        this.radius * 1.2
      );
      grad.addColorStop(0, `rgba(${Math.min(255, parseInt(r) + 60)}, ${Math.min(255, parseInt(g) + 45)}, ${Math.min(255, parseInt(b) + 30)}, ${a * 0.75})`);
      grad.addColorStop(0.5, this.color);
      grad.addColorStop(1, 'transparent');

      ctx.save();
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 1.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  };
};

const createParticle = (canvas: HTMLCanvasElement): Particle => {
  const particle: Particle = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 1 + Math.random() * 2,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
    opacity: 0.1 + Math.random() * 0.25,
    pulse: Math.random() * Math.PI * 2,
    reset(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = 1 + Math.random() * 2;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = 0.1 + Math.random() * 0.25;
      this.pulse = Math.random() * Math.PI * 2;
    },
    update(canvas: HTMLCanvasElement) {
      this.x += this.speedX;
      this.y += this.speedY;
      this.pulse += 0.02;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset(canvas);
      }
    },
    // Simplified: solid circle, no radial gradient per particle
    draw(ctx: CanvasRenderingContext2D) {
      const currentOpacity = this.opacity * (0.5 + Math.sin(this.pulse) * 0.5);
      ctx.fillStyle = `rgba(156, 204, 101, ${currentOpacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    },
  };
  return particle;
};

export const WaveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);
  const blobsRef = useRef<Blob[]>([]);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // alpha: false avoids per-pixel alpha compositing on every fillRect
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // 5 blobs (down from 7)
      blobsRef.current = [
        createBlob(canvas.width * 0.2,  canvas.height * 0.3,  300, 0.2,  0.15, colors.green1),
        createBlob(canvas.width * 0.8,  canvas.height * 0.25, 375, 0.15, 0.2,  colors.green2),
        createBlob(canvas.width * 0.5,  canvas.height * 0.7,  420, 0.18, 0.12, colors.green3),
        createBlob(canvas.width * 0.15, canvas.height * 0.8,  270, 0.22, 0.18, colors.accent),
        createBlob(canvas.width * 0.85, canvas.height * 0.65, 330, 0.12, 0.25, colors.green4),
      ];

      // 20 particles (down from 50)
      particlesRef.current = Array.from({ length: 20 }, () => createParticle(canvas));
    };

    resize();
    window.addEventListener('resize', resize);

    const drawWave = (
      yOffset: number,
      amplitude: number,
      frequency: number,
      speed: number,
      color: string,
      phase: number = 0
    ) => {
      const time = timeRef.current;
      const step = 4; // coarser step (was 2) — half the points to compute

      ctx.beginPath();
      let first = true;
      for (let x = -20; x <= canvas.width + 20; x += step) {
        const y =
          yOffset +
          Math.sin(x * frequency + time * speed + phase) * amplitude +
          Math.sin(x * frequency * 0.5 + time * speed * 0.7 + phase) * (amplitude * 0.5);
        if (first) { ctx.moveTo(x, y); first = false; }
        else ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width + 20, canvas.height + 20);
      ctx.lineTo(-20, canvas.height + 20);
      ctx.closePath();

      const rgbaMatch = color.match(/[\d.]+/g);
      if (!rgbaMatch) return;
      const r = rgbaMatch[0];
      const g = rgbaMatch[1];
      const b = rgbaMatch[2];
      const a = parseFloat(rgbaMatch[3]);

      const waveGradient = ctx.createLinearGradient(0, yOffset - amplitude, 0, canvas.height);
      waveGradient.addColorStop(0, `rgba(${Math.min(255, parseInt(r) + 40)}, ${Math.min(255, parseInt(g) + 30)}, ${Math.min(255, parseInt(b) + 20)}, ${a * 1.2})`);
      waveGradient.addColorStop(0.4, color);
      waveGradient.addColorStop(1, `rgba(${parseInt(r) * 0.3}, ${parseInt(g) * 0.3}, ${parseInt(b) * 0.3}, ${a * 0.3})`);

      ctx.fillStyle = waveGradient;
      ctx.fill();
    };

    const animate = () => {
      // Background
      const bgGradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.8
      );
      bgGradient.addColorStop(0, '#0f1a12');
      bgGradient.addColorStop(0.5, '#0d1117');
      bgGradient.addColorStop(1, '#080c0a');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Blobs
      blobsRef.current.forEach((blob) => {
        blob.update(timeRef.current, canvas);
        blob.draw(ctx);
      });

      // 6 waves, single pass each (no blur shadow / glow passes)
      drawWave(canvas.height * 0.6,  45, 0.0025, 0.7, colors.green3,    Math.PI * 0.3);
      drawWave(canvas.height * 0.65, 40, 0.003,  0.8, colors.green2,    Math.PI * 0.6);
      drawWave(canvas.height * 0.7,  35, 0.0035, 0.9, colors.green1,    Math.PI * 0.9);
      drawWave(canvas.height * 0.75, 30, 0.004,  1.0, colors.accent,    Math.PI * 1.2);
      drawWave(canvas.height * 0.8,  25, 0.0045, 1.1, colors.highlight, Math.PI * 1.5);
      drawWave(canvas.height * 0.55, 50, 0.002,  0.6, colors.shadow,    0);

      // Particles
      particlesRef.current.forEach((particle) => {
        particle.update(canvas);
        particle.draw(ctx);
      });

      // Vignette
      const vignette = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, canvas.height * 0.3,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.9
      );
      vignette.addColorStop(0, 'transparent');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 0.012;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="home__hero-wave-canvas" />;
};
