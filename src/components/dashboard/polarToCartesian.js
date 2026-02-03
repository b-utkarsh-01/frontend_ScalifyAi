const polarToCartesian = (cx, cy, r, angle) => {
  const rad = (angle - 180) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
};

export default polarToCartesian;
