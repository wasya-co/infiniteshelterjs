import React, { useRef, } from 'react'
import styled from 'styled-components'

const RotationPad = (props) => {
	// logg(props, 'RotationPad')

	var mouseDown = false;
	var mouseStopped = false;
	var mouseStopTimeout, eventRepeatTimeout;
	var newLeft, newTop, distance, angle;

	const handleRef = useRef(null)
	const handleEl = handleRef.current
	const regionRef = useRef(null)
	const regionEl = regionRef.current

	/* Aligning pad: */
	// rotationPadEl.css({
	// 	top: container.find("canvas").height() + container.position().top - regionEl.outerHeight() - 10,
	// 	left: container.find("canvas").width() - regionEl.outerWidth() - 20
	// });



	const regionData = {};
	const handleData = {};

	// regionData.width = regionEl.outerWidth();
	// regionData.height = regionEl.outerHeight();
	// regionData.position = regionEl.position();
	// regionData.offset = regionEl.offset();
	// regionData.radius = regionData.width / 2;
	// regionData.centerX = regionData.position.left + regionData.radius;
	// regionData.centerY = regionData.position.top + regionData.radius;

	// handleData.width = handleEl.outerWidth();
	// handleData.height = handleEl.outerHeight();
	// handleData.radius = handleData.width / 2;

	// regionData.radius = regionData.width / 2 - handleData.radius;

	const resetHandlePosition = () => {
		handleEl.animate({
			top: this.regionData.centerY - handleData.radius,
			left: this.regionData.centerX - handleData.radius,
			opacity: 0.1
		}, "fast");
	}

	// Mouse events:
	regionEl && regionEl.on("mousedown", function (event) {
		mouseDown = true;
		handleEl.css("opacity", "1.0");
		update(event.pageX, event.pageY);
	});

	$(document).on("mouseup", function () {
		mouseDown = false;
		handleEl && resetHandlePosition();
	});

	$(document).on("mousemove", function(event) {
		if (!mouseDown) return;
		update(event.pageX, event.pageY);
	});

	//Touch events:
	regionEl && regionEl.on("touchstart", function (event) {
		mouseDown = true;
		handleEl.css("opacity", "1.0");
		update(event.originalEvent.targetTouches[0].pageX, event.originalEvent.targetTouches[0].pageY);
	});

	$(document).on("touchend touchcancel", function () {
		mouseDown = false;
		handleEl && resetHandlePosition();
	});

	$(document).on("touchmove", function(event) {
		if (!mouseDown) return;
		update(event.originalEvent.touches[0].pageX, event.originalEvent.touches[0].pageY);
	});


	function update(pageX, pageY) {
		newLeft = (pageX - regionData.offset.left);
		newTop = (pageY - regionData.offset.top);

		// If handle reaches the pad boundaries.
		distance = Math.pow(regionData.centerX - newLeft, 2) + Math.pow(regionData.centerY - newTop, 2);
		if (distance > Math.pow(regionData.radius, 2)) {
			angle = Math.atan2((newTop - regionData.centerY), (newLeft - regionData.centerX));
			newLeft = (Math.cos(angle) * regionData.radius) + regionData.centerX;
			newTop = (Math.sin(angle) * regionData.radius) + regionData.centerY;
		}
		newTop = Math.round(newTop * 10) / 10;
		newLeft = Math.round(newLeft * 10) / 10;

		handleEl.css({
			top: newTop - handleData.radius,
			left: newLeft - handleData.radius
		});
		// console.log(newTop , newLeft);

		// Providing event and data for handling camera movement.
		var deltaX = regionData.centerX - parseInt(newLeft);
		var deltaY = regionData.centerY - parseInt(newTop);
		// Normalize x,y between -2 to 2 range.
		deltaX = -2 + (2+2) * (deltaX - (-regionData.radius)) / (regionData.radius - (-regionData.radius));
		deltaY = -2 + (2+2) * (deltaY - (-regionData.radius)) / (regionData.radius - (-regionData.radius));
		deltaX = -1 * Math.round(deltaX * 10) / 10;
		deltaY = -1 * Math.round(deltaY * 10) / 10;
		// console.log(deltaX, deltaY);

		sendEvent(deltaX, deltaY);
	}

	function sendEvent(dx, dy) {
		if (!mouseDown) {
			clearTimeout(eventRepeatTimeout);
			return;
		}

		clearTimeout(eventRepeatTimeout);
		eventRepeatTimeout = setTimeout(function() {
			sendEvent(dx, dy);
		}, 5);

		var moveEvent = $.Event("YawPitch", {
			detail: {
				"deltaX": dx,
				"deltaY": dy
			},
			bubbles: false
		});
		$(self).trigger(moveEvent);
	}

	handleEl && resetHandlePosition();

	return 	<div className="rotation-pad">
	  <div className="region" ref={regionRef} ></div>
	  <div className="handle" ref={handleRef} ></div>
	</div>
}

export default RotationPad
