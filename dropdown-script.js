const dropdownData = {
    ...dropdownDataMain,
	...dropdownDataColor
};

document.addEventListener("DOMContentLoaded", () => {
    for (const [id, data] of Object.entries(dropdownData)) {
        const selectContainer = document.getElementById(`${id}-select-container`);
        const valueContainer = document.getElementById(`${id}-value-container`);

        if (!selectContainer || !valueContainer) {
            //console.warn(`Container elements for dropdown "${id}" not found in the document.`);
            continue;
        }

        const select = document.createElement("select");
        select.id = `${id}-select`;

        // Build options
        const optionMap = new Map();
        data.options.forEach((option) => {
            const opt = document.createElement("option");
            const [text, value] = Array.isArray(option) 
                ? [option[0], option[1] || option[0]] 
                : [option, option];
            opt.textContent = text;
            opt.value = value;
            optionMap.set(text, value);
            select.appendChild(opt);
        });

        // Set default selected value
        select.value = optionMap.get(data.placeholder);

        // Value display
        const valueDisplay = document.createElement("div");
        valueDisplay.className = "value-display";
        const displayId = id.split("_")[0];

        // Look up the value corresponding to the placeholder text
        valueDisplay.textContent = `${displayId} ${optionMap.get(data.placeholder) || ""}`;

        // Event listener
        select.addEventListener("change", () => {
            const value = select.value;
            valueDisplay.textContent = select.value
                ? `${displayId} ${value}`
                : `${displayId} ${optionMap.get(data.placeholder) || ""}`;

            if (value === "nope") {
                valueDisplay.classList.add("text-nope-table");
            } else {
                valueDisplay.classList.remove("text-nope-table");
            }
        });

        selectContainer.appendChild(select);
        valueContainer.appendChild(valueDisplay);
    }
});
