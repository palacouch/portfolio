document.addEventListener("click", (event) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const clickX = event.clientX;
    const clickY = event.clientY;
    
    const directions = [
        { x: screenWidth / 2, y: 0 }, // North
        { x: screenWidth, y: screenHeight / 2 }, // East
        { x: screenWidth / 2, y: screenHeight }, // South
        { x: 0, y: screenHeight / 2 } // West
    ];
    
    function createLightningSegment(x1, y1, x2, y2) {
        const segment = document.createElement("div");
        segment.style.position = "absolute";
        segment.style.width = "2px";
        segment.style.height = `${Math.hypot(x2 - x1, y2 - y1)}px`;
        segment.style.background = "white";
        segment.style.pointerEvents = "none";
        segment.style.boxShadow = "0 0 10px white";
        segment.style.left = `${x1}px`;
        segment.style.top = `${y1}px`;
        segment.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI)}deg)`;
        document.body.appendChild(segment);
        
        return segment;
    }
    
    function createLightning(startX, startY, targetX, targetY) {
        let points = [{ x: startX, y: startY }];
        let currentX = startX;
        let currentY = startY;
        
        while (Math.hypot(targetX - currentX, targetY - currentY) > 20) {
            let angle = Math.atan2(targetY - currentY, targetX - currentX) + (Math.random() - 0.5) * 0.8;
            let length = Math.random() * 30 + 10;
            currentX += Math.cos(angle) * length;
            currentY += Math.sin(angle) * length;
            points.push({ x: currentX, y: currentY });
        }
        points.push({ x: targetX, y: targetY });
        
        let segments = [];
        for (let i = 0; i < points.length - 1; i++) {
            let segment = createLightningSegment(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
            segments.push(segment);
        }
        
        setTimeout(() => {
            segments.forEach(segment => segment.style.opacity = 0.5);
        }, 200);
        
        setTimeout(() => {
            segments.forEach(segment => segment.style.opacity = 0);
        }, 600);
        
        setTimeout(() => segments.forEach(segment => segment.remove()), 800);
    }
    
    directions.forEach(({ x: startX, y: startY }) => {
        createLightning(startX, startY, clickX, clickY);
    });
});