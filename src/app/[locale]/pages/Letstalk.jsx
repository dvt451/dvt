'use client';
import GsapMagnetic from '../features/GsapMagnetic';
import React, { useEffect, useRef, useState } from 'react';
import { useAppContext } from '../shared/hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
import WordShuffler from '../features/WordShuffler';

export default function Letstalk() {
	const { t } = useTranslation()
	const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
	const [buttonActive, setButtonActive] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [transformStyle, setTransformStyle] = useState('translate(0)');
	const [shuffling, setShuffling] = useState(false);
	const _ = useAppContext()
	const letstalkText = t("Letstalk.Letstalk")

	const canvasRef = useRef(null);
	const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });

	let ctx, w, h, circles;
	const colors = [
		[81, 91, 212],
		[129, 52, 175],
		[221, 42, 123],
		[254, 218, 119],
		[245, 133, 41]
	];

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const canvasWidth = window.innerWidth;
			const canvasHeight = window.innerHeight;
			setCanvasDimensions({ width: canvasWidth, height: canvasHeight });

			if (window.innerWidth < 991) {
				const canvas = canvasRef.current;
				if (canvas) {
					ctx = canvas.getContext('2d');
					resizeReset(canvasWidth, canvasHeight);
					animationLoop();
				}
			}
		}
	}, []);

	const handleMouseMove = (e) => {
		if (window.innerWidth > 991) {
			setMousePosition({ x: e.clientX, y: e.clientY });
		}
	};

	useEffect(() => {
		if (window.innerWidth > 991) {
			setTransformStyle(
				buttonActive
					? `translate(${mousePosition.x / 10}px, ${mousePosition.y / 10}px)`
					: 'translate(0)'
			);
		}
	}, [buttonActive, mousePosition]);

	const handleHover = (e) => {
		if (window.innerWidth > 991) {
			const rect = e.target.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			setRipplePosition({ x, y });
			setButtonActive(true);
			_.setTalkHover(true)

			const canvas = canvasRef.current;
			if (canvas) {
				ctx = canvas.getContext('2d');
				resizeReset(canvasDimensions.width, canvasDimensions.height);
				animationLoop();
			}

			setShuffling(!shuffling);
		}
	};

	const handleButtonLeave = () => {
		setButtonActive(false);
		_.setTalkHover(false)
	};

	function resizeReset(width, height) {
		w = width;
		h = height;
		circles = [];
		createObject();
	}

	function createObject() {
		for (let i = 0; i < w * h * 0.00005; i++) {
			circles.push(new Circle(i));
		}
	}

	function animationLoop() {
		ctx.clearRect(0, 0, w, h);
		ctx.globalCompositeOperation = 'lighter';
		drawScene();
		requestAnimationFrame(animationLoop);
	}

	function drawScene() {
		circles.forEach((circle) => {
			circle.update();
			circle.draw();
		});
	}

	function easeInOutLinear(x) {
		return x; // Linear transition, returns the same value as input
	}

	class Circle {
		constructor(i) {
			this.x = Math.random() * w;
			this.y = Math.random() * h;
			this.radius = 10;
			this.color = colors[i % colors.length];
			this.alpha = Math.random() * 0.5 + 0.2;
			this.tick = 0;
			this.ttl = 0;
		}

		draw() {
			const size = 10; // Length of the arrow
			const headSize = 4; // Size of the arrowhead
			ctx.beginPath();

			// Draw the main line of the arrow
			ctx.moveTo(this.x - size / 2, this.y);
			ctx.lineTo(this.x + size / 2, this.y);

			// Draw the arrowhead
			ctx.lineTo(this.x + size / 2 - headSize, this.y - headSize);
			ctx.moveTo(this.x + size / 2, this.y);
			ctx.lineTo(this.x + size / 2 - headSize, this.y + headSize);

			ctx.strokeStyle = `#fdfdfd`;
			ctx.lineWidth = 1.5;
			ctx.stroke();
			ctx.closePath();
		}

		update() {
			if (this.tick >= this.ttl) {
				this.setTarget();
			}
			let progress = this.tick / this.ttl;

			this.x = this.startX + (this.targetX - this.x) * easeInOutLinear(progress);
			this.y = this.startY + (this.targetY - this.y) * easeInOutLinear(progress);

			this.tick++;
		}

		setTarget() {
			this.startX = this.x;
			this.startY = this.y;
			this.targetX = this.x + (Math.random() * 200 - 100);
			this.targetY = this.y + (Math.random() * 200 - 100);
			this.tick = 0;
			this.ttl = Math.random() * 180 + 180;
		}
	}

	return (
		<section id='letstalk' className='home__letstalk letstalk'>
			<div className={buttonActive ? 'letstalk-layer layer-active' : 'letstalk-layer'}>
				<div className='board'></div>
				<div className='back-color'></div>
				<div
					className='parallax-container'
					style={{
						transform: transformStyle,
					}}
				>
					<canvas ref={canvasRef} width={canvasDimensions.width} height={canvasDimensions.height} />
				</div>
			</div>
			<div className='letstalk__container'>
				<div className='letstalk__content'>
					<p className={!buttonActive ? 'letstalk__subtitle' : 'letstalk__subtitle layer-active'}>
						{t("Letstalk.CuriousForMore")}
					</p>
					<div className={!buttonActive ? 'letstalk__title' : 'letstalk__title layer-active'}>
						{t("Letstalk.DesigningThe")}
						<br />
						{t("Letstalk.FutureStartsHere")}
					</div>
					<GsapMagnetic>
						<a
							onMouseMove={handleMouseMove}
							onMouseEnter={handleHover}
							onMouseLeave={handleButtonLeave}
							target='_blank'
							className={buttonActive ? 'letstalk__link layer-active' : 'letstalk__link'}
							href='https://Wa.me/+37444627889'
						>
							<span className='letstalk__link_text'>
								<WordShuffler
									buttonActive={buttonActive}
									text={shuffling ? letstalkText : letstalkText + ' '}
									textColor='#000'
									timeOffset={1}
									mixCapital={true}
									mixSpecialCharacters={true}
								/>
							</span>
							<span
								className={buttonActive ? 'letstalk__link_layer layer-active' : 'letstalk__link_layer'}
								style={{
									left: ripplePosition.x + 'px',
									top: ripplePosition.y + 'px',
								}}
							></span>
						</a>
					</GsapMagnetic>
					<p className={!buttonActive ? 'letstalk__text' : 'letstalk__text layer-active'}>
						{t("Letstalk.text") + ' '}
						<a onMouseEnter={() => {
							_.setMail(true)
							_.setTalkHover(true)
						}}
							onMouseLeave={() => {
								_.setMail(false)
								_.setTalkHover(false)
							}}
							href='mailto:dvtbook@gmail.com'>dvtbook@gmail.com</a>
					</p>
				</div>
			</div>
		</section>
	);
}
