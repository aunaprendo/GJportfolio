const { useState } = React;

const initalColor = "white";

export const ColorPicker = () => {
  const [color, setColor] = useState(initalColor);

  return (
    <div
      id="color-picker-container"
      style={{
        backgroundColor: color,
      }}
    >
      <input
        type="color"
        id="color-input"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};
