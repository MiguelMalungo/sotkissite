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
    draw(ctx: CanvasRenderingContext2D) {
      const innerGlow = ctx.createRadialGradient(
        this.x - this.radius * 0.3,
        this.y - this.radius * 0.3,
        0,
        this.x,
        this.y,
        this.radius * 1.2
      );

      const rgbaMatch = this.color.match(/[\d.]+/g);
      if (!rgbaMatch) return;
      const r = rgbaMatch[0];
      const g = rgbaMatch[1];
      const b = rgbaMatch[2];
      const a = parseFloat(rgbaMatch[3]);

      innerGlow.addColorStop(
        0,
        `rgba(${Math.min(255, parseInt(r) + 80)}, ${Math.min(255, parseInt(g) + 60)}, ${Math.min(255, parseInt(b) + 40)}, ${a * 0.8})`
      );
      innerGlow.addColorStop(0.3, this.color);
      innerGlow.addColorStop(
        0.7,
        `rgba(${parseInt(r) * 0.7}, ${parseInt(g) * 0.7}, ${parseInt(b) * 0.7}, ${a * 0.6})`
      );
      innerGlow.addColorStop(1, 'transparent');

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = innerGlow;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 1.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      const shadowGradient = ctx.createRadialGradient(
        this.x + this.radius * 0.2,
        this.y + this.radius * 0.2,
        this.radius * 0.5,
        this.x,
        this.y,
        this.radius * 1.5
      );
      shadowGradient.addColorStop(0, 'transparent');
      shadowGradient.addColorStop(0.5, 'rgba(0, 30, 0, 0.15)');
      shadowGradient.addColorStop(1, 'transparent');

      ctx.save();
      ctx.globalCompositeOperation = 'multiply';
      ctx.fillStyle = shadowGradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  };
};

const createParticle = (canvas: HTMLCanvasElement): Particle => {
  const particle: Particle = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 1 + Math.random() * 3,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
    opacity: 0.1 + Math.random() * 0.3,
    pulse: Math.random() * Math.PI * 2,
    reset(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = 1 + Math.random() * 3;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = 0.1 + Math.random() * 0.3;
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
    draw(ctx: CanvasRenderingContext2D) {
      const currentOpacity = this.opacity * (0.5 + Math.sin(this.pulse) * 0.5);
      const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
      gradient.addColorStop(0, `rgba(156, 204, 101, ${currentOpacity})`);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
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

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Reinitialize blobs with new dimensions
      blobsRef.current = [
        createBlob(canvas.width * 0.2, canvas.height * 0.3, 300, 0.2, 0.15, colors.green1),
        createBlob(canvas.width * 0.8, canvas.height * 0.25, 375, 0.15, 0.2, colors.green2),
        createBlob(canvas.width * 0.5, canvas.height * 0.7, 420, 0.18, 0.12, colors.green3),
        createBlob(canvas.width * 0.15, canvas.height * 0.8, 270, 0.22, 0.18, colors.accent),
        createBlob(canvas.width * 0.85, canvas.height * 0.65, 330, 0.12, 0.25, colors.green4),
        createBlob(canvas.width * 0.6, canvas.height * 0.15, 240, 0.25, 0.15, colors.highlight),
        createBlob(canvas.width * 0.35, canvas.height * 0.55, 285, 0.17, 0.22, colors.green1),
      ];

      // Reinitialize particles
      particlesRef.current = Array.from({ length: 50 }, () => createParticle(canvas));
    };

    resize();
    window.addEventListener('resize', resize);

    const drawWave3D = (
      yOffset: number,
      amplitude: number,
      frequency: number,
      speed: number,
      color: string,
      phase: number = 0
    ) => {
      const time = timeRef.current;
      const points: { x: number; y: number }[] = [];

      for (let x = -20; x <= canvas.width + 20; x += 2) {
        const y =
          yOffset +
          Math.sin(x * frequency + time * speed + phase) * amplitude +
          Math.sin(x * frequency * 0.5 + time * speed * 0.7 + phase) * (amplitude * 0.5) +
          Math.sin(x * frequency * 1.5 + time * speed * 1.3 + phase) * (amplitude * 0.25);
        points.push({ x, y });
      }

      const rgbaMatch = color.match(/[\d.]+/g);
      if (!rgbaMatch) return;
      const r = rgbaMatch[0];
      const g = rgbaMatch[1];
      const b = rgbaMatch[2];
      const a = parseFloat(rgbaMatch[3]);

      const drawSmoothCurve = (pts: { x: number; y: number }[], yOff: number = 0) => {
        if (pts.length < 2) return;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y + yOff);
        for (let i = 0; i < pts.length - 1; i++) {
          const xMid = (pts[i].x + pts[i + 1].x) / 2;
          const yMid = (pts[i].y + pts[i + 1].y) / 2;
          ctx.quadraticCurveTo(pts[i].x, pts[i].y + yOff, xMid, yMid + yOff);
        }
        const last = pts[pts.length - 1];
        ctx.lineTo(last.x, last.y + yOff);
      };

      // Shadow layer
      ctx.save();
      ctx.globalCompositeOperation = 'multiply';
      ctx.filter = 'blur(8px)';
      drawSmoothCurve(points, 20);
      ctx.lineTo(canvas.width + 20, canvas.height + 20);
      ctx.lineTo(-20, canvas.height + 20);
      ctx.closePath();
      ctx.fillStyle = `rgba(0, 20, 0, ${a * 0.25})`;
      ctx.fill();
      ctx.filter = 'none';
      ctx.restore();

      // Main wave with gradient
      const waveGradient = ctx.createLinearGradient(0, yOffset - amplitude, 0, canvas.height);
      waveGradient.addColorStop(
        0,
        `rgba(${Math.min(255, parseInt(r) + 40)}, ${Math.min(255, parseInt(g) + 30)}, ${Math.min(255, parseInt(b) + 20)}, ${a * 1.2})`
      );
      waveGradient.addColorStop(0.3, color);
      waveGradient.addColorStop(
        0.7,
        `rgba(${parseInt(r) * 0.6}, ${parseInt(g) * 0.6}, ${parseInt(b) * 0.6}, ${a * 0.7})`
      );
      waveGradient.addColorStop(
        1,
        `rgba(${parseInt(r) * 0.3}, ${parseInt(g) * 0.3}, ${parseInt(b) * 0.3}, ${a * 0.3})`
      );

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      drawSmoothCurve(points);
      ctx.lineTo(canvas.width + 20, canvas.height + 20);
      ctx.lineTo(-20, canvas.height + 20);
      ctx.closePath();
      ctx.fillStyle = waveGradient;
      ctx.fill();
      ctx.restore();

      // Highlight edge
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.filter = 'blur(2px)';
      ctx.strokeStyle = `rgba(${Math.min(255, parseInt(r) + 100)}, ${Math.min(255, parseInt(g) + 80)}, ${Math.min(255, parseInt(b) + 60)}, ${a * 0.5})`;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      drawSmoothCurve(points);
      ctx.stroke();
      ctx.filter = 'none';
      ctx.restore();

      // Extra glow
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.filter = 'blur(6px)';
      ctx.strokeStyle = `rgba(${Math.min(255, parseInt(r) + 60)}, ${Math.min(255, parseInt(g) + 50)}, ${Math.min(255, parseInt(b) + 40)}, ${a * 0.3})`;
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      drawSmoothCurve(points);
      ctx.stroke();
      ctx.filter = 'none';
      ctx.restore();
    };

    const animate = () => {
      // Background gradient
      const bgGradient = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.8
      );
      bgGradient.addColorStop(0, '#0f1a12');
      bgGradient.addColorStop(0.5, '#0d1117');
      bgGradient.addColorStop(1, '#080c0a');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobsRef.current.forEach((blob) => {
        blob.update(timeRef.current, canvas);
        blob.draw(ctx);
      });

      // Draw waves
      drawWave3D(canvas.height * 0.55, 50, 0.002, 0.6, colors.shadow, 0);
      drawWave3D(canvas.height * 0.6, 45, 0.0025, 0.7, colors.green3, Math.PI * 0.3);
      drawWave3D(canvas.height * 0.65, 40, 0.003, 0.8, colors.green2, Math.PI * 0.6);
      drawWave3D(canvas.height * 0.7, 35, 0.0035, 0.9, colors.green1, Math.PI * 0.9);
      drawWave3D(canvas.height * 0.75, 30, 0.004, 1.0, colors.accent, Math.PI * 1.2);
      drawWave3D(canvas.height * 0.8, 25, 0.0045, 1.1, colors.highlight, Math.PI * 1.5);

      // Top subtle waves
      drawWave3D(canvas.height * 0.12, 25, 0.0015, 0.4, 'rgba(124, 179, 66, 0.15)', Math.PI);
      drawWave3D(canvas.height * 0.18, 20, 0.002, 0.5, 'rgba(85, 139, 47, 0.12)', Math.PI * 0.5);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update(canvas);
        particle.draw(ctx);
      });

      // Vignette effect
      const vignette = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.height * 0.3,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.9
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="home__hero-wave-canvas"
    />
  );
};
