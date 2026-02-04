const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

function clamp(value) {
    return Math.min(255, Math.max(0, value));
}

function rgbToHex(r, g, b) {
    return (
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0")
    ).toUpperCase();
}

function updateColor(r, g, b) {
    r = clamp(r);
    g = clamp(g);
    b = clamp(b);

    // Sincronizar sliders
    red.value = r;
    green.value = g;
    blue.value = b;

    // Sincronizar inputs
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = rgbToHex(r, g, b);

    colorBox.style.backgroundColor = rgb;
    rgbText.textContent = rgb;
    hexText.textContent = hex;

    // Sincronizar color picker
    colorPicker.value = hex;
}

// Sliders
red.addEventListener("input", () =>
    updateColor(+red.value, +green.value, +blue.value)
);
green.addEventListener("input", () =>
    updateColor(+red.value, +green.value, +blue.value)
);
blue.addEventListener("input", () =>
    updateColor(+red.value, +green.value, +blue.value)
);

// Inputs numéricos
redInput.addEventListener("input", () =>
    updateColor(+redInput.value, +green.value, +blue.value)
);
greenInput.addEventListener("input", () =>
    updateColor(+red.value, +greenInput.value, +blue.value)
);
blueInput.addEventListener("input", () =>
    updateColor(+red.value, +green.value, +blueInput.value)
);

// Color Picker
colorPicker.addEventListener("input", () => {
    const hex = colorPicker.value;

    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    updateColor(r, g, b);
});

// Inicializar
updateColor(0, 0, 0);
