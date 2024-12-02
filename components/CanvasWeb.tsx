"use client"

import React, { useRef, useEffect } from "react";
import Menu from "./Menu";

interface Dot {
  x: number;
  y: number;
  size: number;
  color: string;
}

const BannerWithDots: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const arrayColors = ['#c80428', '#e1052d', '#fa0532', '#fa1e46', '#fb375b'];
  let dots: Dot[] = [];

  const initializeDots = (canvas: HTMLCanvasElement) => {
    const dotCount = 30;
    dots = [];
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 3,
        color: arrayColors[Math.floor(Math.random() * arrayColors.length)],
      });
    }
  };

  const drawDots = (ctx: CanvasRenderingContext2D) => {
    dots.forEach((dot) => {
      ctx.fillStyle = dot.color;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const handleMouseMove = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    event: MouseEvent
  ) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots(ctx);

    if (bannerRef.current) {
      const bannerBounds = bannerRef.current.getBoundingClientRect();
      const mouse = {
        x: event.pageX - bannerBounds.left,
        y: event.pageY - bannerBounds.top,
      };

      dots.forEach((dot) => {
        const distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 200) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    }
  };

  const handleResize = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => {
    if (bannerRef.current) {
      const bannerBounds = bannerRef.current.getBoundingClientRect();
      canvas.width = bannerBounds.width;
      canvas.height = bannerBounds.height;
      initializeDots(canvas);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots(ctx);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;

    if (canvas && banner) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Set canvas dimensions
        canvas.width = banner.offsetWidth;
        canvas.height = banner.offsetHeight;

        // Initialize dots
        initializeDots(canvas);
        drawDots(ctx);

        const mouseMoveHandler = (event: MouseEvent) =>
          handleMouseMove(ctx, canvas, event);

        const resizeHandler = () => handleResize(ctx, canvas);

        banner.addEventListener("mousemove", mouseMoveHandler);
        banner.addEventListener("mouseout", () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawDots(ctx);
        });
        window.addEventListener("resize", resizeHandler);

        // Cleanup
        return () => {
          banner.removeEventListener("mousemove", mouseMoveHandler);
          window.removeEventListener("resize", resizeHandler);
        };
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
   
      <>
         <main className="border-[2.5px] w-full flex flex-col border-m_red p-4 relative justify-between" ref={bannerRef}>
          <h1 className="select-none z-50">
            <span className="text-m_red text-4xl text-[2.5rem] font-bold xs:text-[2.75rem] sm:text-[3.5rem]">David Urbano</span>
            <div className="text-m_white gap-1 text-lg text-[1rem] xs:text-[1.15rem] sm:text-[1.4rem] leading-5">
              Software Developer
              <span className="text-m_red font-bold"> & </span>
              Photographer
            </div>
          </h1>
          <div className="bg-green-400"></div>
          <div className="text-m_white">
            <div className="w-1/2 bg-red-40">
              <p className="select-none z-50 bg-yellow-80 max-w-32 font-light text-base xs:text-lg xs:max-w-36 sm:max-w-44 sm:text-xl"> 
                <span className="font-semibold">Born in 2003 <br/>
                in Lima, Peru.<br/></span>
                I believe software can help create a better future. By combining our creativity with the power of technology, we can build a world that benefits everyone.
              </p>
            </div>
            <div className="w-1/2">

            </div>
          </div>
          <canvas ref={canvasRef} className="z-40 absolute w-full h-full bg-transparent top-0 left-0 pointer-events-none" />
          <Menu />
        </main>
      </>
    
  );
};

export default BannerWithDots;

