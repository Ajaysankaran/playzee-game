import { height, width } from '@mui/system';
import React, { useEffect, useRef } from 'react'

const batWidth = 5
const batHeight = 20
const ballVelocityX = 1
const ballVelocityY = 1;

const Tennis = () => {
  const canvasRef = useRef(null)
  let canvas: HTMLCanvasElement | null;
  let context: CanvasRenderingContext2D;

  let leftBat: any = {}
  let rightBat: any = {}
  let ball: any = {}

  let baf: any = {}

  useEffect(() => {
    canvas = canvasRef.current as unknown as HTMLCanvasElement;
    if (canvas && canvas.getContext) {
      context = canvas.getContext("2d")
      console.log(canvas, context)

      leftBat = initObjects(10, 10, batWidth, batHeight)
      rightBat = initObjects(context.canvas.width - 20, 10, batWidth, batHeight)
      ball = initCircle(context.canvas.width / 2, 10, 3)

      leftBat.draw()
      rightBat.draw()
      ball.draw()

      window.addEventListener("keydown", (e) => {
        leftBat.clear()
        if (e.key === 'ArrowDown' && leftBat.y + leftBat.height != context.canvas.height) {
          leftBat.y = leftBat.y + 4
        } else if (e.key === 'ArrowUp' && leftBat.y >= 2) {
          leftBat.y = leftBat.y - 4
        }
        leftBat.draw()
      })
      window.requestAnimationFrame(animateBall)
    }
  }, [])

  const initObjects = (x: number, y: number, width: number, height: number) => {
    return {
      x: x,
      y: y,
      width: width,
      height: height,
      draw() {
        context.fillStyle = '#FFFFFF';
        context.fillRect(this.x, this.y, this.width, this.height);
      },
      clear() {
        context.clearRect(this.x, this.y, this.width, this.height)
      }
    }
  }

  const initCircle = (x: number, y: number, radius: number) => {
    return {
      x: x,
      y: y,
      vx: ballVelocityX,
      vy: ballVelocityY,
      radius: radius,
      color: "#FFFFFF",
      draw(fill: string = this.color, r: number = this.radius) {
        this.radius = radius
        context.beginPath();
        context.arc(this.x, this.y, r, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = fill;
        context.fill();
      },
      clear() {
        this.draw("#000000", this.radius + 0.5)
        // console.log("clearing:", this.x, this.y)
      }
    }
  }

  const animateBall = () => {
    ball.clear();
    // if (isBatHit('x', batWidth)) {
    //   console.log("bat hit")
    //   ball.vx = -ball.vx
    // }

    // if (isBatHit('y', batHeight)) {
    //   ball.vy = -ball.vy
    // }
    // console.log("ball", ball.x, ball.y , "| bat:", leftBat.x, leftBat.y)
    if (isBatHit()) {
      console.log("bat Hit", ball, leftBat)
      ball.vx = -ball.vx
      ball.vy = -ball.vy
    }

    ball.x += ball.vx;
    ball.y += ball.vy;


    // ball.vy *= 0.99;
    // ball.vy += 0.25;

    if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
      ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
      ball.vx = -ball.vx;
    }
    baf = window.requestAnimationFrame(animateBall);
    ball.draw();

  }

  const isBatHit = () => {
    // return ball.y <= leftBat.y && ball.y <= (leftBat.y + height) && ball.x <= leftBat.x && ball.x <= (leftBat.x + width)
    console.log(ball.y, leftBat.y)
    if (ball.y >= leftBat.y && ball.y <= (leftBat.y + batHeight)) {
      return ball.x - (leftBat.x + (2 * batWidth + 0.6)) <= 0
    }
    return false
  }

  return (
    <div className='flex h-screen justify-center items-center'>
      <canvas ref={canvasRef} className='w-1/2 h-3/4 bg-black'></canvas>
    </div>
  )
}

export default Tennis