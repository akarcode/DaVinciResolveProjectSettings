// Base option groups - organized by category
const baseColorSpaces = [
    "ACES (APO)",
    "ACES (API)",
    "DaVinci WG",
    "DCI XYZ",
    "P3-D60",
    "P3-D65",
    "P3-DCI",
    "Rec.709",
    "Rec.2020",
    "SMPTE-C",
    "sRGB",
    "XYZ (CIE)"
];

const extendedColorSpaces = [
    "ARRI Wide Gamut 3",
    "ARRI Wide Gamut 4",
    "AstroDesign",
    "Canon Cinema Gamut",
    "DJI D-Gamut",
    "DRAGONcolor",
    "DRAGONcolor2",
    "Panasonic V-Gamut",
    "REDcolor2",
    "REDcolor3",
    "REDcolor4",
    "REDWideGamutRGB",
    "Sony S-Gamut",
    "Sony S-Gamut3",
    "Sony S-Gamut3.Cine"
];

const blackmagicColorSpaces = [
    "Blackmagic Design 4.6K Film Gen 1",
    "Blackmagic Design 4.6K Film Gen 3",
    "Blackmagic Design 4K Film Gen 1",
    "Blackmagic Design 4K Film Gen 3",
    "Blackmagic Design Film Gen 1",
    "Blackmagic Design Pocket 4K Film Gen 4",
    "Blackmagic Design Video Gamut Gen 4",
    "Blackmagic Design Video Gen 5",
    "Blackmagic Design Wide Gamut Gen 4/5"
];

const additionalColorSpaces = [
    "HSL",
    "HSV",
    "Lab (CIE)",
    "Y'UV"
];

const basicGammaOptions = [
    "DaVinci Intermediate",
    "DCI",
    "Gamma 2.2",
    "Gamma 2.4",
    "Gamma 2.5",
    "Gamma 2.6",
    "Linear",
    "Rec.709",
    "Rec.709-A",
    "sRGB"
];

const logGammaOptions = [
    "ACEScc",
    "ACEScct",
    "Apple Log",
    "ARRI LogC3",
    "ARRI LogC4",
    "AstroDesign A-Log",
    "Canon Log",
    "Canon Log 2",
    "Canon Log 3",
    "Cineon Film Log",
    "DJI D-Log",
    "Fujifilm F-Log",
    "Fujifilm F-Log2",
    "Leica L-Log",
    "Nikon N-Log",
    "Panasonic V-Log",
    "RED Log3G10",
    "REDgamma3",
    "REDgamma4",
    "REDIogFilm",
    "Samsung Log",
    "S-Log",
    "S-Log2",
    "S-Log3"
];

const blackmagicGammaOptions = [
    "Blackmagic Design 4.6K Film",
    "Blackmagic Design 4K Film",
    "Blackmagic Design Broadcast Film Gen 4",
    "Blackmagic Design Extended Video Gen 4",
    "Blackmagic Design Extended Video Gen 5",
    "Blackmagic Design Film",
    "Blackmagic Design Film Gen 5",
    "Blackmagic Design Pocket 4K Film Gen 4",
    "Blackmagic Design Pocket 6K Film Gen 4",
    "Blackmagic Design Video",
    "Blackmagic Design Video Gen 3",
    "Blackmagic Design Video Gen 4",
    "Blackmagic Design Video Gen 5"
];

const hdrGammaOptions = [
    "ST2084",
    "ST2084 300 nit",
    "ST2084 500 nit",
    "ST2084 800 nit",
    "ST2084 1000 nit",
    "ST2084 2000 nit",
    "ST2084 3000 nit",
    "ST2084 4000 nit"
];

const combinedColorSpaceGammaOptions = [
    "ACES",
    "ACEScc",
    "ACEScct",
    "ACEScg",
    "Apple Log",
    "ARRI LogC3",
    "ARRI LogC4",
    "AstroDesign A-Log",
    "Canon Cinema Gamut/Canon Log",
    "Canon Cinema Gamut/Canon Log 2",
    "Canon Cinema Gamut/Canon Log 3",
    "Cineon Film Log",
    "DaVinci WG/Intermediate",
    "DCI X'Y'Z'",
    "DJI D-Gamut/D-Log",
    "DRAGONcolor/REDgamma3",
    "DRAGONcolor/REDgamma4",
    "DRAGONcolor/REDlogFilm",
    "DRAGONcolor2/REDgamma3",
    "DRAGONcolor2/REDgamma4",
    "DRAGONcolor2/REDlogFilm",
    "Fujifilm F-Log",
    "Fujifilm F-Log2",
    "Leica L-Log",
    "Linear",
    "Nikon N-Log",
    "Panasonic V-Gamut/V-Log",
    "REDcolor2/REDgamma3",
    "REDcolor2/REDgamma4",
    "REDcolor2/REDlogFilm",
    "REDcolor3/REDgamma3",
    "REDcolor3/REDgamma4",
    "REDcolor3/REDlogFilm",
    "REDcolor4/REDgamma3",
    "REDcolor4/REDgamma4",
    "REDcolor4/REDlogFilm",
    "REDWideGamutRGB/Log3G10",
    "Samsung Log",
    "S-Gamut/S-Log",
    "S-Gamut/S-Log2",
    "S-Gamut3.Cine/S-Log3",
    "S-Gamut3/S-Log3"
];

const blackmagicCombinedOptions = [
    "Blackmagic Design 4.6K Film Gen 1",
    "Blackmagic Design 4.6K Film Gen 3",
    "Blackmagic Design 4.6K Video Gen 1",
    "Blackmagic Design 4.6K Video Gen 3",
    "Blackmagic Design 4K Film Gen 1",
    "Blackmagic Design 4K Film Gen 3",
    "Blackmagic Design 4K Video Gen 3",
    "Blackmagic Design Broadcast Film Gen 4",
    "Blackmagic Design Extended Video Gen 4",
    "Blackmagic Design Extended Video Gen 5",
    "Blackmagic Design Film Gen 1",
    "Blackmagic Design Film Gen 5",
    "Blackmagic Design Pocket 4K Film Gen 4",
    "Blackmagic Design Pocket 6K Film Gen 4",
    "Blackmagic Design Video Gen 4",
    "Blackmagic Design Video Gen 5"
];

const p3HdrOptions = [
    "P3-D65 (Scene)",
    "P3-D65 HLG 1000 nits",
    "P3-D65 Intermediate",
    "P3-D65 ST2084 1000 nits",
    "P3-D65 ST2084 2000 nits",
    "P3-D65 ST2084 4000 nits",
    "P3-DCI"
];

const rec709HdrOptions = [
    "Rec.709 (Scene)",
    "Rec.709 Gamma 2.2",
    "Rec.709 Gamma 2.4",
    "Rec.709 HLG ARIB STD-B67",
    "Rec.709-A"
];

const rec2020HdrOptions = [
    "Rec.2020 (Scene)",
    "Rec.2020 Gamma 2.4",
    "Rec.2020 HLG ARIB STD-B67",
    "Rec.2020 Intermediate",
    "Rec.2020 ST2084 1000 nits",
    "Rec.2020 ST2084 2000 nits",
    "Rec.2020 ST2084 4000 nits"
];

const rec2100Options = [
    "Rec.2100 HLG",
    "Rec.2100 HLG (Scene)",
    "Rec.2100 ST2084",
    "Rec.2100 ST2084 (Scene)"
];

const autoOptions = [
    ["SDR Rec.709", "Rec.709 (Scene)"],
    ["SDR Rec.2020", "Rec.2020 (Scene)"],
    ["SDR sRGB", "sRGB"],
    ["HDR HLG", "Rec.2100 HLG"],
    ["HDR PQ", "Rec.2100 ST2084"]
];

const timelineManualOptions = [
    ["SDR Rec.709", "Rec.709 (Scene)"],
    ["SDR Rec.2020", "Rec.2020 (Scene)"],
    ["SDR Rec.2020 (P3-D65 limited)", "P3-D65 (Scene)"],
    ["SDR P3-D60 Cinema", "P3-D60"],
    ["HDR DaVinci Wide Gamut Intermediate", "DaVinci WG/Intermediate"],
    ["HDR Rec.2020 Intermediate", "Rec.2020 Intermediate"],
    ["HDR Rec.2020 HLG", "Rec.2100 HLG (Scene)"],
    ["HDR Rec.2020 HLG (P3-D65 limited)", "Rec.2100 HLG (Scene)"],
    ["HDR Rec.2020 PQ", "Rec.2100 ST2084"],
    ["HDR Rec.2020 PQ (P3-D65 limited)", "Rec.2100 ST2084"],
    ["Custom", "Custom"]
];

const stops = ["Stops (18% Gray)"];
const st2084 = ["ST2084"];
const linear = ["Linear"];
const aces = ["ACEScc", "ACEScct"];
const basics = ["SMPTE-C", "sRGB", "XYZ (CIE)"];
const arib = ["ARIB STD-B67 HLG"];
const p3Basic = ["P3-D60", "P3-D65"];

// Pre-built dropdown option arrays

const ciSort = (a, b) => {
    return a.localeCompare(b, undefined, { 
        sensitivity: 'accent',
        numeric: true
    });
};

const createSortedArray = (...arrays) => arrays.flat().sort(ciSort);
const createSortedArrayWithTimeline = (...arrays) => ["Same as Timeline", ...arrays.flat().sort(ciSort)];

const allColorSpaces = createSortedArray(
    baseColorSpaces,
    extendedColorSpaces,
    blackmagicColorSpaces,
    additionalColorSpaces
);

const allColorSpacesWithSameTimeline = createSortedArrayWithTimeline(
    baseColorSpaces,
    extendedColorSpaces,
    blackmagicColorSpaces,
    additionalColorSpaces
);

const allGammaOptions = createSortedArray(
    basicGammaOptions,
    logGammaOptions,
    blackmagicGammaOptions,
    hdrGammaOptions,
    rec2100Options,
    arib,
    stops
);

const allCombinedOptions = createSortedArray(
    combinedColorSpaceGammaOptions,
    blackmagicCombinedOptions,
    p3HdrOptions,
    p3Basic,
    rec709HdrOptions,
    rec2020HdrOptions,
    rec2100Options,
    additionalColorSpaces,
    basics
);

const allCombinedOptionsWithStops = createSortedArray(
    combinedColorSpaceGammaOptions,
    blackmagicCombinedOptions,
    p3HdrOptions,
    p3Basic,
    rec709HdrOptions,
    rec2020HdrOptions,
    rec2100Options,
    additionalColorSpaces,
    basics,
    stops
);

const allCombinedOptionsWithSameTimeline = createSortedArrayWithTimeline(
    combinedColorSpaceGammaOptions,
    blackmagicCombinedOptions,
    p3HdrOptions,
    p3Basic,
    rec709HdrOptions,
    rec2020HdrOptions,
    rec2100Options,
    additionalColorSpaces,
    basics
);

const outputNotSeparatedOptions = createSortedArrayWithTimeline(
    combinedColorSpaceGammaOptions,
    rec709HdrOptions,
    rec2020HdrOptions,
    rec2100Options,
    p3HdrOptions,
    hdrGammaOptions,
    arib,
    basics
);

const manualSeparatedGammaOptions = createSortedArray(
    basicGammaOptions,
    hdrGammaOptions,
    rec2100Options,
    aces,
    arib
);

const customOutputNotSeparatedOptions = createSortedArrayWithTimeline(
    combinedColorSpaceGammaOptions,
    blackmagicCombinedOptions,
    p3HdrOptions,
    p3Basic,
    rec709HdrOptions,
    rec2020HdrOptions,
    rec2100Options,
    hdrGammaOptions,
    arib,
    linear,
    basics
);

const inputCustomNotSeparatedOptions = createSortedArrayWithTimeline(
    combinedColorSpaceGammaOptions,
    blackmagicCombinedOptions,
    p3HdrOptions,
    p3Basic,
    rec709HdrOptions,
    rec2020HdrOptions,
    rec2100Options,
    additionalColorSpaces,
    basics,
    st2084
);

const outputManualSeparatedOptions = createSortedArrayWithTimeline(
    baseColorSpaces
);

const outputCustomOptions = createSortedArrayWithTimeline(
    baseColorSpaces,
    extendedColorSpaces,
    blackmagicColorSpaces
);
	
const dropdownDataColor = {
	
    // Multiple use case dropdowns
    
	colorSpaceTimeline_notSeparated: { placeholder: "Rec.709 (Scene)", options: allCombinedOptions },
	colorSpaceTimeline_custom_notSeparated: { placeholder: "Rec.709 (Scene)", options: allCombinedOptions },
	colorSpaceOutput: { placeholder: "Rec.709", options: allColorSpacesWithSameTimeline },
	colorSpaceInput_custom: { placeholder: "Rec.709", options: allColorSpacesWithSameTimeline },
	colorSpaceTimelineGamma: { placeholder: "Rec.709", options: allGammaOptions },
	colorSpaceOutputGamma: { placeholder: "Rec.709", options: allGammaOptions },
	colorSpaceInputGamma_custom: { placeholder: "Rec.709", options: allGammaOptions },
	colorSpaceTimelineGamma_custom: { placeholder: "Rec.709", options: allGammaOptions },
	colorSpaceOutputGamma_custom: { placeholder: "Rec.709", options: allGammaOptions },
	colorSpaceTimeline: { placeholder: "Rec.709", options: allColorSpaces },
	colorSpaceTimeline_custom: { placeholder: "Rec.709", options: allColorSpaces },
    
	// Individual dropdowns
    
	colorSpaceOutput_auto: { placeholder: "SDR Rec.709", options: autoOptions },
	colorSpaceTimeline_manual: { placeholder: "HDR DaVinci Wide Gamut Intermediate", options: timelineManualOptions },
	colorSpaceOutput_notSeparated: { placeholder: "Same as Timeline", options: outputNotSeparatedOptions },
	colorSpaceOutput_manual_separated: { placeholder: "Rec.709", options: outputManualSeparatedOptions },
	colorSpaceOutputGamma_manual_separated: { placeholder: "Rec.709", options: manualSeparatedGammaOptions },
	colorSpaceOutput_custom: { placeholder: "Rec.709", options: outputCustomOptions },
	colorSpaceInput_custom_notSeparated: { placeholder: "Same as Timeline", options: inputCustomNotSeparatedOptions },
	colorSpaceOutput_custom_notSeparated: { placeholder: "Same as Timeline", options: customOutputNotSeparatedOptions }
	
};