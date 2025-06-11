// setup multiple use case dropdowns first

const perfCodecOptions = [
	["Uncompressed 10-bit", "rgb"],
	["Uncompressed 16-bit float - HDR", "rgb"],
	["ProRes 4444 XQ - HDR", "ap4x"],
	["ProRes 4444 - HDR", "ap4h"],
	["ProRes 422 HQ", "apch"],
	["ProRes 422", "apcn"],
	["ProRes 422 LT", "apcs"],
	["ProRes 422 Proxy", "apco"],
	["DNxHR 444 - HDR", "dnxhd_444_12b"],
	["DNxHR HQX", "dnxhd_hqx_12b"],
	["DNxHR HQ", "dnxhd_hq"],
	["DNxHR SQ", "dnxhd_sq"],
	["DNxHR LB", "dnxhd_lb"],
	["GoPro Ciner-orm RGB 16-bit", "CFHDb64a"],
	["GoPro CineForm YUV 10-bit", "CFHDv210"]
];

const superScaleOptions = [
	"Medium",
	"Low",
	"High"
];

const drtOptions = [
	"None",
	"Simple",
	"Luminance Mapping",
	"DaVinci",
	"Saturation Preserving"
];

const imageResizeModeOptions = [
	["Smoother", "smoother"],
	["Bicubic", "bicubic"],
	["Bilinear", "bilinear"],
	["Sharper", "sharper"],
	["Bessel", "bessel"],
	["Box", "box"],
	["Catmull-Rom", "catrom"],
	["Cubic", "cubic"],
	["Gaussian", "gaussian"],
	["Lanczos", "lanczos"],
	["Linear", "triangle"],
	["Mitchell", "mitchell"],
	["Nearest Neighbor", "nearestNeighbor"],
	["Quadratic", "quadratic"],
	["Sinc", "sinc"]
];

const mismatchCustomPresetOptions = [
	"None"
];

const resMismatchBehaviorOptions = [
	["Center crop with no resizing", "centerCrop"],
	["Scale full frame with crop", "scaleToCrop"],
	["Scale entire image to fit", "scaleToFit"],
	["Stretch frame to all corners", "stretch"]
];

const colorScienceModeOptions = [
	["DaVinci YRGB", "davinciYRGB"],
	["DaVinci YRGB Color Managed", "davinciYRGBColorManagedv2"],
	["ACEScc", "acescc"],
	["ACEScct", "acescct"]
];

const rcmPresetModeOptions = [
	"SDR Rec.709",
	"SDR Rec.2020",
	"SDR Rec.2020 (P3-D65 limited)",
	"SDR P3-D60 Cinema",
	"HDR DaVinci Wide Gamut Intermediate",
	"HDR Rec.2020 Intermediate",
	"HDR Rec.2020 HLG",
	"HDR Rec.2020 HLG (P3-D65 limited)",
	"HDR Rec.2020 PQ",
	"HDR Rec.2020 PQ (P3-D65 limited)",
	"Custom"
];

const imageResizingGammaOptions = [
	"Timeline",
	"Log",
	"Linear",
	"Linear - Tone Mapped",
	"Gamma",
	"Gamma - Tone Mapped"
];

const multiColorKeyframeDynamics = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11"
];



const multiColorVersion = [
	"",
	"Background",
	"Car",
	"Cool",
	"Desaturated",
	"Foreground",
	"Hi-Con",
	"Low-Con",
	"Road",
	"Sky",
	"Warm"
];

const multiAudioNumChannels = [
	"2",
	"4",
	"6",
	"8",
	"12",
	"16"
];

const multiVideoPlayout = [
	"0",
	"1",
	"2",
	"99",
];

const multiLimitAudioMeter = [
	"0",
	"-1",
	"-2",
	"-3",
	"-4",
	"-5",
	"-6",
	"-7",
	"-8",
	"-9",
	"-10",
	"-11",
	"-12",
	"-13",
	"-14",
	"-15",
	"-16",
	"-17",
	"-18",
	"-19",
	"-20",
	"-21",
	"-22",
	"-23",
	"-24",
	"-25",
	"-26",
	"-27",
	"-28",
	"-29",
	"-30",
];
	
const dropdownDataMain = {
	
	// multiple dropdowns first

	perfOptimisedCodec: { placeholder: "DNxHR LB", options: perfCodecOptions },
	perfRenderCacheCodec: { placeholder: "DNxHR LB", options: perfCodecOptions },
	superScaleSharpness: { placeholder: "Medium", options: superScaleOptions },
	superScaleNoiseReduction: { placeholder: "Medium", options: superScaleOptions },
	inputDRT: { placeholder: "Saturation Preserving", options: drtOptions },
	outputDRT: { placeholder: "Saturation Preserving", options: drtOptions },
	imageResizeMode_one: { placeholder: "Smoother", options: imageResizeModeOptions },
	imageResizeMode_two: { placeholder: "Smoother", options: imageResizeModeOptions },
	timelineInputResMismatchCustomPreset: { placeholder: "None", options: mismatchCustomPresetOptions },
	timelineOutputResMismatchCustomPreset: { placeholder: "None", options: mismatchCustomPresetOptions },
	timelineOutputResMismatchBehavior: { placeholder: "Scale full frame with crop", options: resMismatchBehaviorOptions },
	timelineInputResMismatchBehavior: { placeholder: "Scale full frame with crop", options: resMismatchBehaviorOptions },
	colorScienceMode: { placeholder: "DaVinci YRGB", options: colorScienceModeOptions },
	colorScienceMode_aces: { placeholder: "ACEScc", options: colorScienceModeOptions },
	colorScienceMode_auto: { placeholder: "DaVinci YRGB Color Managed", options: colorScienceModeOptions },
	colorScienceMode_manual: { placeholder: "DaVinci YRGB Color Managed", options: colorScienceModeOptions },
	colorScienceMode_custom: { placeholder: "DaVinci YRGB Color Managed", options: colorScienceModeOptions },
	rcmPresetMode_manual: { placeholder: "SDR Rec.709", options: rcmPresetModeOptions },
	rcmPresetMode_custom: { placeholder: "Custom", options: rcmPresetModeOptions },
	imageResizingGamma: { placeholder: "Gamma", options: imageResizingGammaOptions },
	disableFusionToneMapping: { placeholder: "Gamma", options: imageResizingGammaOptions },
	colorKeyframeDynamicsStartProfile: { placeholder: "1", options: multiColorKeyframeDynamics },
	colorKeyframeDynamicsEndProfile: { placeholder: "1", options: multiColorKeyframeDynamics },
	colorVersion1Name: { placeholder: "", options: multiColorVersion },
	colorVersion2Name: { placeholder: "", options: multiColorVersion },
	colorVersion3Name: { placeholder: "", options: multiColorVersion },
	colorVersion4Name: { placeholder: "", options: multiColorVersion },
	colorVersion5Name: { placeholder: "", options: multiColorVersion },
	colorVersion6Name: { placeholder: "", options: multiColorVersion },
	colorVersion7Name: { placeholder: "", options: multiColorVersion },
	colorVersion8Name: { placeholder: "", options: multiColorVersion },
	colorVersion9Name: { placeholder: "", options: multiColorVersion },
	colorVersion10Name: { placeholder: "", options: multiColorVersion },
	audioPlayoutNumChannels: { placeholder: "2", options: multiAudioNumChannels },
	audioCaptureNumChannels: { placeholder: "2", options: multiAudioNumChannels },
	videoPlayoutLTCFramesOffset: { placeholder: "0", options: multiVideoPlayout },
	videoPlayoutBatchHeadDuration: { placeholder: "0", options: multiVideoPlayout },
	videoPlayoutBatchTailDuration: { placeholder: "0", options: multiVideoPlayout },
	limitAudioMeterLUFS: { placeholder: "-23", options: multiLimitAudioMeter },
	limitAudioMeterAlignLevel: { placeholder: "0", options: multiLimitAudioMeter },
	limitAudioMeterHighLevel: { placeholder: "-5", options: multiLimitAudioMeter },
	limitAudioMeterLowLevel: { placeholder: "-10", options: multiLimitAudioMeter },

	
	// individul dropdowns

	timelineFrameRate: {
		placeholder: "23.976",
		options: [
			"16",
			"18",
			"23.976",
			"24",
			"25",
			"29.97",
			"30",
			"47.952",
			"48",
			"50",
			"59.94",
			"60",
			"72",
			"90",
			"95.904",
			"96",
			"100",
			"119.88",
			"120"
		]
	},

	timelinePlaybackFrameRate: {
		placeholder: "23.976p",
		options: [
			["23.976p", "23.976"],
			["24p", "24"],
			["25p", "25"],
			["50i", "25"],
			["59.94i", "29.97"],
			["60i", "30"],
			["29.97p", "29.97"],
			["30p", "30"],
			["47.952p", "47.952"],
			["48p", "48"],
			["50p", "50"],
			["59.94p", "59.94"],
			["60p", "60"],
			["100p", "100"],
			["119.88p", "119.88"],
			["120p", "120 "]
		]
	},

	videoMonitorFormat: {
		placeholder: "1920 x 1080 HD",
		options: [
			"720 x 486 NTSC",
			"720 x 486 NTSC 16:9",
			"720 x 576 PAL",
			"720 x 576 PAL 16:9",
			"1280 x 720 HD 720P",
			"1920 x 1080 HD",
			"2048 x 1080 DCI",
			"2048 x 1556 Full Aperture",
			"3840 x 2160 Ultra HD",
			"4096 x 2160 DCI",
			"7680 x 4320 Ultra HD",
			"8192 x 4320 DCI"
		]
	},

	videoMonitorBitDepth: {
		placeholder: "8 bit",
		options: [
			["8 bit", "8"],
			["10 bit", "10"]
		]
	},

	videoMonitorScaling: {
		placeholder: "Basic",
		options: [
			["Basic", "basic"],
			["Bilinear", "bilinear"]
		]
	},

	videoMonitorMatrixOverrideFor422SDI: {
		placeholder: "Rec.709",
		options: ["Rec.601", "Rec.709", "Rec.2020"]
	},

	perfOptimizedResolutionRatio: {
		placeholder: "Original",
		options: [
			["Original", "original"],
			["Half", "half"],
			["Quarter", "quarter"],
			["One-Eighth", "one_eighth"],
			["One-Sixteenth", "one_sixteenth"],
			["Choose automatically", "auto"]
		]
	},

	imageRetimeInterpolation: {
		placeholder: "Optical Flow",
		options: [
			["Nearest", "nearest"],
			["Frame Blend", "frameBlend"],
			["Optical Flow", "opticalFlow"]
		]
	},

	imageMotionEstimationMode: {
		placeholder: "Standard Better",
		options: [
			["Standard Faster", "standardFaster"],
			["Standard Better", "standardBetter"],
			["Enhanced Faster", "enhancedFaster"],
			["Enhanced Better", "enhancedBetter"],
			["A1 Speed Warp Faster", "speedWarpFaster"],
			["A1 Speed Warp Better", "speedWarpBetter"]
		]
	},

	imageMotionEstimationRange: {
		placeholder: "Medium",
		options: [
			["Larger", "larger"],
			["Medium", "medium"],
			["small", "small"]
		]
	},

	imageDeinterlaceQuality: {
		placeholder: "High",
		options: [
			["Normal", "normal"],
			["High", "high"],
			["DaVinci AI Neural Engine", "nope"]
		]
	},

	superScale: {
		placeholder: "None",
		options: [
			["None", "1"],
			["2x", "2"],
			["2x Enhanced", "2"],
			["3x", "3"],
			["3x Enhanced", "3"],
			["4x", "4"],
			["4x Enhanced", "5"],
			["Auto", "0"]
		]
	},

	timelineFrameRateMismatchBehavior: {
		placeholder: "Resolve",
		options: [
			["Resolve", "resolve"],
			["Final Cut Pro 7", "fcp7"],
			["Final Cut Pro X", "fcpx"],
			["None", "none"]
		]
	},

	colorGalleryStillsNamingPattern: {
		placeholder: "Clip name",
		options: [
			["Clip name", "clipName"],
			["Clip version name", "versionName"],
			["source timecode (HH.MM.SS.FF)", "sourceTimecode"],
			["Timeline timecode (HH.MM.SS.FF)", "timelineTimecode"],
			["Timeline name", "timelineName"],
			["Display LUT name", "displayLUTName"],
			["Custom label using tags", "customLabel"]
		]
	},

	hdrDolbyVersion: {
		placeholder: "4.0",
		options: ["2.9", "4.0"]
	},

	hdrDolbyAnalysisTuning: {
		placeholder: "Balanced",
		options: [
			["Legacy CM4 Ll", "Legacy"],
			["Most Highlight Detail / Most Mapping", "Most Mapping"],
			["More Highlight Detail / More Mapping", "More Mapping"],
			["Balanced", "Balanced"],
			["Less Highlight Detail / Less Mapping", "Less Mapping"],
			["Least Highlight Detail / Least Mapping", "Least Mapping"]
		]
	},

	hdrDolbyMasterDisplay: {
		placeholder: "1000-nit, P3, D65, ST.2084, Full",
		options: [
			"4000-nit, P3, D65, ST.2084, Full",
			"4000-nit, BT.2020, D65, ST.2084, Full",
			"2000-nit, P3, D65, ST.2084, Full",
			"2000-nit, BT.2020, D65, ST.2084, Full",
			"1000-nit, P3, D65, ST.2084, Full",
			"1000-nit, BT.2020, D65, ST.2084, Full"
		]
	},

	limitAudioMeterLoudnessScale: {
		placeholder: "EBU +9 scale",
		options: [
			["EBU +9 scale", "ebu_9_scale"],
			["EBU +18 scale", "ebu_18_scale"]
		]
	},

	videoCaptureMode: {
		placeholder: "Video and audio",
		options: [
			["Video and audio", "video_audio"],
			["Video only", "video_only"]
		]
	},

	videoCaptureFormat: {
		placeholder: "QuickTime",
		options: [
			["DPX", "dpx"],
			["QuickTime", "mov"]
		]
	},

	videoCaptureCodec: {
		placeholder: "DNxHD 1080p",
		options: [
			["Apple ProRes 422", "apcn"],
			["Apple ProRes 422 HQ", "apch"],
			["Apple ProRes 422 LT", "apcs"],
			["Apple ProRes 4444", "ap4h"],
			["Apple ProRes aaaa XQ", "ap4x"],
			["DNxHD 720p 145/120/75/60 8-bit", "dnxhd_720p145"],
			["DNxHD 720p 220/185/110/90 8-bit", "dnxhd_720p220"],
			["DNxHD 720p 220/185/110/90 10-bit", "dnxhd_720p220X"],
			["DNxHD 1080i 145/120/115 8-bit", "dnxhd_1080i145"],
			["DNxHD 1080i 220/185/175 8-bit", "dnxhd_1080i220"],
			["DNxHD 1080i 220/185/175 10-bit", "dnxhd_1080i220X"],
			["DNxHD 1080p 36 8-bit", "dnxhd_1080p36"],
			["DNxHD 1080p 145/120/115 8-bit", "dnxhd_1080p145"],
			["DNxHD 1080p 220/185/175 8-bit", "dnxhd_1080p220"],
			["DNxHD 1080p 220/185/175 10-bit", "dnxhd_1080p220X"],
			["DNxHD 1080p", "dnxhd_1080p440X"],
			["Uncompressed RGB 10-bit", "R10k"],
			["Uncompressed YUV 422 8-bit", "yuv"],
			["Uncompressed YUV 422 10-bit", "v210"]
		]
	},

	videoPlayoutMode: {
		placeholder: "Video and audio",
		options: [
			["Video and audio", "video_audio"],
			["Video only", "video_only"],
			["Audio only", "audio_only"]
		]
	},

	transcriptionLanguage: {
		placeholder: "Auto",
		options: [
			["Auto", "auto"],
			["Danish", "da"],
			["Dutch", "nl"],
			["English", "en"],
			["French", "fr"],
			["German", "de"],
			["Italian", "it"],
			["Japanese", "ja"],
			["Korean", "ko"],
			["Mandarin - Simplified", "zh-hans"],
			["Mandarin - Traditional", "zh-hant"],
			["Norwegian", "no"],
			["Portuguese", "pt"],
			["Russian", "ru"],
			["Spanish", "es"],
			["Swedish", "sv"]
		]
	},

	videoDeckFormat: {
		placeholder: "HD 1080p 23.976",
		options: [
			"NTSC",
			"PAL",
			"HD 720p 50",
			"HD 720p 59.94",
			"HD 720p 60",
			"HD 1080PsF 23.976",
			"HD 1080PsF 24",
			"HD 1080PsF 25",
			"HD 1080i 50",
			"HD 1080i 59.94",
			"HD 1080i 60",
			"HD 1080p 23.976",
			"HD 1080p 24",
			"HD 1080p 25",
			"HD 1080p 29.97",
			"HD 1080p 30",
			"HD 1080p 47.95",
			"HD 1080p 48",
			"HD 1080p 50",
			"HD 1080p 59.94",
			"HD 1080p 60",
			"HD 1080p 100",
			"HD 1080p 119.88",
			"HD 1080p 120",
			"2K 1080PsF 23.976",
			"2K 1080PsF 24",
			"2K 1080PsF 25",
			"2K 1080p 23.976",
			"2K 1080p 24",
			"2K 1080p 25",
			"2K 1080p 23.976",
			"2K 1080p 24",
			"2K 1080p 25",
			"2K 1080p 29.97",
			"2K 1080p 30",
			"2K 1080p 47.952",
			"2K 1080p 48",
			"2K 1080p 50",
			"2K 1080p 59.94",
			"2K 1080p 60",
			"2K 1080p 95.904",
			"2K 1080p 96",
			"2K 1080p 100",
			"2K 1080p 119.88",
			"2K 1080p 120",
			"2K 1556PsF 23.976",
			"2K 1556PsF 24",
			"2K 1556PsF 25",
			"UHD 2160p 23.976",
			"UHD 2160p 24",
			"UHD 2160p 25",
			"UHD 2160p 29.97",
			"UHD 2160p 30",
			"UHD 2160p 50",
			"UHD 2160p 59.94",
			"UHD 2160p 60",
			"UHD 2160p 100",
			"UHD 2160p 119.88",
			"UHD 2160p 120",
			"4K 2160p 23.976",
			"4K 2160p 24",
			"4K 2160p 25",
			"4K 2160p 29.97",
			"4K 2160p 30",
			"4K 2160p 47.952",
			"4K 2160p 48",
			"4K 2160p 50",
			"4K 2160p 59.94",
			"4K 2160p 60",
			"4K 2160p 95.904",
			"4K 2160p 96",
			"4K 2160p 100",
			"4K 2160p 119.88",
			"4K 2160p 120",
			"8K UHD 4320p 23.976",
			"8K UHD 4320p 24",
			"8K UHD 4320p 25",
			"8K UHD 4320p 29.97",
			"8K UHD 4320p 30",
			"8K UHD 4320p 50",
			"8K UHD 4320p 59.94",
			"8K UHD 4320p 60",
			"8K 4320p 23.976",
			"8K 4320p 24",
			"8K 4320p 25",
			"8K 4320p 29.97",
			"8K 4320p 30",
			"8K 4320p 50",
			"8K 4320p 59.94",
			"8K 4320p 60"
		]
	},

	rcmPresetMode_auto: {
		placeholder: "SDR",
		options: ["SDR", "HDR"]
	},

	colorSpaceOutput_auto: {
		placeholder: "SDR Rec.709",
		options: [
			["SDR Rec.709", "Rec.709 (Scene)"],
			["SDR Rec.2020", "Rec.2020 (Scene)"],
			["SDR sRGB", "sRGB"],
			["HDR HLG", "Rec.2100 HLG"],
			["HDR PQ", "Rec.2100 ST2084"]
		]
	},

	colorSpaceTimeline_manual: {
		placeholder: "HDR DaVinci Wide Gamut Intermediate",
		options: [
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
		]
	},

	timelineWorkingLuminanceMode: {
		placeholder: "SDR 100",
		options: [
			"SDR 100",
			"HDR 500",
			"HDR 1000",
			"HDR 2000",
			"HDR 4000",
			"SDR ER 100/200",
			"HDR ER 1000/2000",
			"HDR ER 1000/4000",
			"HDR ER 1000/10000",
			"HDR ER 4000/10000",
			"Custom"
		]
	},

	colorAcesIDT: {
		placeholder: "No Input Transform",
		options: [
			"No Input Transform",
			"Apple Log",
			"ARRI LogC3",
			"ARRI LogC4",
			"Blackmagic Design Film",
			"Blackmagic Design 4K Film",
			"Blackmagic Design 4K Film Gen 3",
			"Blackmagic Design 4K Video Gen 3",
			"Blackmagic Design 4.6K Film",
			"Blackmagic Design 4.6K Film Gen 3",
			"Blackmagic Design 4.6K Video Gen 3",
			"Blackmagic Design Film Gen 5",
			"Canon 1D",
			"canon 5D",
			"Canon 7D",
			"canon C200 canon Log 2 Daylight Rec.2020",
			"Canon C200 Canon Log 2 Tungsten Rec.2020",
			"Canon C200 Canon Log 2 Daylight Cinema",
			"Canon C200 Canon Log 2 Tungsten Cinema",
			"Canon C200 Canon Log 3 Daylight Rec.709",
			"Canon C200 Canon Log 3 Daylight Rec.709",
			"Canon C200 Canon Log 3 Tungsten Rec.709",
			"Canon C200 Canon Log 3 Daylight Rec.2020",
			"Canon C200 Canon Log 3 Tungsten Rec.2020",
			"Canon C200 Canon Log 3 Daylight Cinema",
			"Canon C200 Canon Log 3 Tungsten Cinema",
			"Canon C300 Daylight",
			"Canon C300 Tungsten",
			"Canon C300MkII Canon Log Daylight v1.0 Rec.2020",
			"Canon C300MkII Canon Log Tungsten v1.0 Rec.2020",
			"Canon C300MkII Canon Log Daylight v1.0 Cinema",
			"Canon C300MkII Canon Log Tungsten v1.0 Cinema",
			"Canon C300MkII Canon Log 2 Daylight v1.0 Rec.2020",
			"Canon C300MkII Canon Log 2 Tungsten v1.0 Rec.2020",
			"Canon C300MkII Canon Log 2 Daylight v1.0 Cinema",
			"Canon C300MkII Canon Log 2 Tungsten v1.0 Cinema",
			"Canon C500 Daylight",
			"Canon C500 Tungsten",
			"Canon C500 Daylight v1.1 Rec.709",
			"Canon C500 Tungsten v1.1 Rec.709",
			"canon C500 Daylight v1.1 DCI-P3+",
			"Canon C500 Tungsten v1.1 DCI-P3+",
			"Canon C500 Daylight v1.1 Cinema",
			"Canon C500 Tungsten v1.1 Cinema",
			"canon C700 canon Log Daylight Rec.2020",
			"Canon C700 Canon Log Tungsten Rec.2020",
			"Canon C700 Canon Log Daylight Cinema",
			"Canon C700 Canon Log Tungsten Cinema",
			"canon C700 canon Log 2 Daylight Rec.2020",
			"Canon C700 Canon Log 2 Tungsten Rec.2020",
			"Canon C700 Canon Log 2 Daylight Cinema",
			"Canon C700 Canon Log 2 Tungsten Cinema",
			"Canon C700 Canon Log 3 Daylight Rec.2020",
			"Canon C700 Canon Log 3 Tungsten Rec.2020",
			"Canon C700 Canon Log 3 Daylight Cinema",
			"Canon C700 Canon Log 3 Tungsten Cinema",
			"Canon C70 Canon Log 2 Daylight Cinema",
			"Canon C70 Canon Log 2 Tungsten Cinema",
			"Canon C70 Canon Log 3 Daylight Cinema",
			"Canon C70 Canon Log 3 Tungsten Cinema",
			"Canon C70 Canon Log 3 Daylight Rec.2020",
			"Canon C70 Canon Log 3 Tungsten Rec.2020",
			"Canon R5 Canon Log 2 Daylight Cinema",
			"Canon R5 Canon Log 2 Tungsten Cinema",
			"Canon R5 Canon Log 3 Daylight Cinema",
			"Canon R5 Canon Log 3 Tungsten Cinema",
			"canon R5 canon Log 3 Daylight Rec.2020",
			"Canon R5 Canon Log 3 Tungsten Rec.2020",
			"Fujifilm F-Log",
			"Fujifilm F-Log2",
			"Panasonic V35",
			"DRAGONcolor/REDgamma3",
			"DRAGONcolor/REDgamma4",
			"DRAGONcolor/REDlogFilm",
			"DRAGONcolor2/REDgamma3",
			"DRAGONcolor2/REDgamma4",
			"DRAGONcolor2/REDlogFilm",
			"REDcolor2/REDgamma3",
			"REDcolor2/REDgamma4",
			"REDcolor2/REDlogFilm",
			"REDcolor3/REDgamma3",
			"REDcolor3/REDgamma4",
			"REDcolor3/REDlogFilm",
			"REDcolor4/REDgamma3",
			"REDcolor4/REDgamma4",
			"REDcolor4/REDlogFilm",
			"RWG/Log3G10",
			"Sony RAW",
			"Sony SLog1",
			"Sony SLog2",
			"Sony SLog2 (Daylight)",
			"Sony SLog2 (Tungsten)",
			"Sony SLog3",
			"Sony SLog3 SGamut3",
			"Sony SLog3 SGamut3Cine",
			"Sony Venice SLog3 SGamut3",
			"Sony Venice SLog3 SGamut3",
			"Sony Venice SLog3 SGamut3Cine",
			"DCDM",
			"Inverse DCDM (P3-D65 Limited)",
			"P3-D60",
			"Inverse P3-D65",
			"Inverse P3-D65 (D60 simulation)",
			"Inverse P3-D65 ST2084 (108 nit)",
			"Inverse P3-D65 ST2084 (1000 nit)",
			"Inverse P3-D65 ST2084 (2000 nit)",
			"Inverse P3-D65 ST2084 (4000 nit)",
			"P3-DCl (D60 simulation)",
			"P3-DCl (D65 simulation)",
			"Inverse Rec.709 BT.1886",
			"Inverse Rec.709 BT.1886 (D60 simulation)",
			"Rec.2020",
			"Rec.2020 HLG (1000 nit)",
			"Inverse Rec.2100 ST2084 (1000 nit)",
			"Inverse Rec.2100 ST2084 (1000 nit)",
			"Inverse Rec.2100 ST2084 (2000 nit)",
			"Inverse Rec.2100 ST2084 (4000 nit)",
			"Inverse sRGB Piecewise",
			"Inverse sRGB Piecewise (D60 simulation)",
			"ACEScc - CSC",
			"ACEScct - CSC",
			"ACEScg - CSC",
			"ADX 10 - CSC",
			"ADX 16 - CSC",
			"ARRI Logc E1800 AWG - CSC",
			"Blackmagic Design Film Gen 5 - CSC",
			"Canon Log 2 Cinema Gamut - CSC",
			"Canon Log 3 Cinema Gamut - CSC",
			"Panasonic Varicam VLog VGamut - CSC",
			"RED Log3GIO REDWideGamutRGB - CSC",
			"Sony SLog3 SGamut3 - CSC",
			"Sony SLog3 SGamut3Cine - CSC",
			"Sony Venice SLog3 SGamut3 - CSC",
			"Sony Venice SLog3 SGamut3Cine - CSC",
			"sRGB (Texture) - CSC",
			"sRGB (Linear) - CSC"
		]
	},

	colorAcesODT: {
		placeholder: "No Output Transform",
		options: [
			"No Output Transform",
			"DCDM",
			"DCDM (P3-D60 Limited)",
			"DCDM (P3-D65 Limited)",
			"P3-D60",
			"P3-D65",
			"P3-D65 (D60 simulation)",
			"P3-D65 (Rec.709 Limited)",
			"P3-D65 ST2084 (108 nit)",
			"P3-D65 ST2084 (1000 nit)",
			"P3-D65 ST2084 (2000 nit)",
			"P3-D65 ST2084 (4000 nit)",
			"P3-DCl (DO simulation)",
			"P3-DCl (D65 simulation)",
			"Rec.709 BT.1886",
			"Rec.709 BT.1886 (D60 simulation)",
			"Rec.2020",
			"Rec.2020 (P3-D65 Limited)",
			"Rec.2020 (Rec.709 Limited)",
			"Rec.2020 HLG (1000 nit)",
			"Rec.2100 HLG (1000 nit P3-D65 Limited)",
			"Rec.2100 ST2084 (1000 nit)",
			"Rec.2100 ST2084 (1000 nit P3-D65 Limited)",
			"Rec.2100 ST2084 (2000 nit)",
			"Rec.2100 ST2084 (2000 nit P3-D65 Limited)",
			"Rec.2100 ST2084 (4000 nit)",
			"Rec.2100 ST2084 (4000 nit P3-D65 Limited)",
			"sRGB Piecewise",
			"sRGB Piecewise (D60 simulation)",
			"ACEScc - CSC",
			"ACEScct - CSC",
			"ACEScg - CSC",
			"ADX 10 - CSC",
			"ADX 16 - CSC",
			"ARRI Logc E1800 AWG - CSC",
			"Blackmagic Design Film Gen 5 - CSC",
			"Canon Log 2 Cinema Gamut - CSC",
			"Canon Log 3 Cinema Gamut - CSC",
			"Panasonic Varicam VLog VGamut - CSC",
			"RED Log3GIO REDWideGamutRGB - CSC",
			"Sony SLog3 SGamut3 - CSC",
			"Sony SLog3 SGamut3Cine - CSC",
			"Sony Venice SLog3 SGamut3 - CSC",
			"Sony Venice SLog3 SGamut3Cine - CSC",
			"sRGB (Texture) - CSC",
			"sRGB (Linear) - CSC"
		]
	},

	colorAcesNodeLUTProcessingSpace: {
		placeholder: "ACES AP0 linear",
		options: [
			["ACEScc AP1 timeline space", "acesccAp1"],
			["ACES AP0 linear", "acesAp0Linear"]
		]
	},

	limitBroadcastSafeLevels: {
		placeholder: "-20 - 120",
		options: [
			["-20 - 120", "20_120"],
			["-10 - 110", "10_110"],
			["0 - 100", "0_100"]
		]
	},
	
	nodeStackLayers: {
		placeholder: "2",
		options: [
			["1"],
			["2"],
			["3"],
			["4"]
		]
	},
	
	videoDeckBitDepth: {
		placeholder: "10 bit",
		options: [
			["10 bit", "10"]
		]
	},
	
	videoDeckNonAutoEditFrames: {
		placeholder: "0",
		options: [
			"-8",
			"-7",
			"-6",
			"-5",
			"-4",
			"-3",
			"-2",
			"-1",
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8"
		]
	},
	
	videoDeckPrerollSec: {
		placeholder: "5",
		options: [
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8"
		]
	},
	
	videoCaptureIngestHandles: {
		placeholder: "0",
		options: [
			"0",
			"1",
			"2",
			"9999",
		]
	},
	
	videoDeckOutputSyncSource: {
		placeholder: "Auto",
		options: [
			["Auto", "auto"]
		]
	},
	

	
	videoPlayoutAudioFramesOffset: {
		placeholder: "0",
		options: [
			"-20",
			"-19",
			"-18",
			"-17",
			"-16",
			"-15",
			"-14",
			"-13",
			"-12",
			"-11",
			"-10",
			"-9",
			"-8",
			"-7",
			"-6",
			"-5",
			"-4",
			"-3",
			"-2",
			"-1",
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"13",
			"14",
			"15",
			"16",
			"17",
			"18",
			"19",
			"20",
		]
	},
	
	perfProxyMediaMode: {
		placeholder: "Prefer Camera Originals",
		options: [
			["Disable All Proxies", "0"],
			["Prefer Proxies", "1"],
			["Prefer Camera Originals", "2"]
		]
	},
	
	perfProxyResolutionRatio: {
		placeholder: "Original",
		options: [
			["Original", "original"],
			["Half", "half"],
			["Quarter", "quarter"]
		]
	},

	perfRenderCacheMode: {
		placeholder: "None",
		options: [
			["None", "none"],
			["Smart", "smart"],
			["User", "user"]
		]
	},
	
};
