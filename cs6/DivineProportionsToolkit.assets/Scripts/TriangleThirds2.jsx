﻿/*    Similar to the Golden Triangle, but it will use the rule of thirds for the segments*/#target photoshop#include "Common.jsx"var shapeName = "Triangle Thirds";#include "ScriptOpen.jsx"    var section = docHeight / 3;     addFrame(origX, origY, docWidth, docHeight, lineSubPathArray, lineSubPathArrayPos);    addLine(Array(origX, origY), Array(docWidth + origX, docHeight + origY), lineSubPathArray, lineSubPathArrayPos++);    addLine(Array(docWidth + origX, origY), Array(origX, origY + section), lineSubPathArray, lineSubPathArrayPos++);    addLine(Array(origX, docHeight + origY), Array(docWidth + origX, docHeight + origY - section), lineSubPathArray, lineSubPathArrayPos++);#include "ScriptClose.jsx"