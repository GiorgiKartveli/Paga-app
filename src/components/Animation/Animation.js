import React, { useRef, useEffect } from "react";
import Matter, { Body } from "matter-js";

import classes from "./Animation.module.css";

const Animation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;

    const engine = Engine.create();
    engine.enableSleeping = true;

    const render = Render.create({
      element: null,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        wireframes: false,
        background: "#f5f5f5",
      },
    });

    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;

    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight,
      10000,
      20,
      { isStatic: true, render: { visible: false } }
    );

    const circle = Bodies.circle(window.innerWidth / 6, 500, 150, {
      restitution: 0.9,
      render: {
        fillStyle: "#FFD700",
      },
    });

    const rectangle = Bodies.rectangle(window.innerWidth / 2.5, 200, 490, 150, {
      restitution: 0.8,
      render: {
        fillStyle: "#7587eb",
      },
      isSleeping: false,
    });

    Body.rotate(rectangle, Math.PI / -4);

    const octagon = Bodies.polygon(window.innerWidth / 1.7, 200, 8, 130, {
      restitution: 0.8,
      render: {
        fillStyle: "#e62c3b",
      },
      isSleeping: false,
    });

    const parallelogramVertices = [
      { x: -300, y: -75 },
      { x: 300, y: -75 },
      { x: 200, y: 75 },
      { x: -200, y: 75 },
    ];

    const parallelogram = Bodies.fromVertices(
      window.innerWidth / 1.1,
      80,
      [parallelogramVertices],
      {
        restitution: 0.5,
        render: {
          fillStyle: "#7587eb",
        },
      }
    );

    let ellipseVerticesArray = [];

    let ellipseFlatness = 1.2;
    let ellipseVertices = 50;
    let ellipseSizeX = 200;
    let ellipseSizeY = 100;

    for (let i = 0; i < ellipseVertices; i++) {
      let x = ellipseSizeX * Math.cos(i);
      let y = ellipseFlatness * ellipseSizeY * Math.sin(i);
      ellipseVerticesArray.push({ x: x, y: y });
    }

    const ellipse = Bodies.fromVertices(
      window.innerWidth / 1.1,
      80,
      ellipseVerticesArray,
      {
        restitution: 0.5,
        render: {
          fillStyle: "#e3a92b",
        },
      }
    );

    const leftWall = Bodies.rectangle(
      0,
      window.innerHeight / 2,
      20,
      window.innerHeight,
      {
        isStatic: true,
        render: { visible: false },
      }
    );

    const rightWall = Bodies.rectangle(
      window.innerWidth,
      window.innerHeight / 2,
      20,
      window.innerHeight,
      {
        isStatic: true,
        render: { visible: false },
      }
    );

    Composite.add(engine.world, [
      ground,
      circle,
      rectangle,
      octagon,
      ellipse,
      leftWall,
      rightWall,
      parallelogram,
    ]);

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    let circleHasStopped = false;
    let rectangleHasStopped = false;

    setTimeout(() => {
      if (!circleHasStopped) {
        circleHasStopped = true;
        Body.applyForce(
          circle,
          { x: circle.position.x, y: circle.position.y },
          { x: 8, y: 5 }
        );
      }
    }, 3000);

    setTimeout(() => {
      if (!rectangleHasStopped) {
        rectangleHasStopped = true;
        Body.applyForce(
          circle,
          { x: rectangle.position.x, y: rectangle.position.y },
          { x: 8, y: 5 }
        );
      }
    }, 7000);

    return () => {
      Composite.clear(engine.world);
      Engine.clear(engine);
      Render.stop(render);
    };
  }, []);

  return <canvas ref={canvasRef} className={classes.canvas}></canvas>;
};

export default Animation;
