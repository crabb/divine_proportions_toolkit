﻿/*    Generates the Golden Mean*/#target photoshop#include "Common.jsx"var shapeName = "Golden Mean";#include "ScriptOpen.jsx"    var vSection = docWidth * 0.382;    var hSection = docHeight * 0.382;    addFrame(origX, origY, docWidth, docHeight, lineSubPathArray, lineSubPathArrayPos);    addLine(Array(vSection + origX, origY), Array(vSection + origX, docHeight + origY), lineSubPathArray, lineSubPathArrayPos++);    addLine(Array(docWidth - vSection + origX, origY), Array(docWidth - vSection + origX, docHeight + origY), lineSubPathArray, lineSubPathArrayPos++);    addLine(Array(origX, hSection + origY), Array(docWidth + origX, hSection + origY), lineSubPathArray, lineSubPathArrayPos++);    addLine(Array(origX, docHeight - hSection + origY), Array(docWidth + origX, docHeight - hSection + origY), lineSubPathArray, lineSubPathArrayPos++);#include "ScriptClose.jsx"