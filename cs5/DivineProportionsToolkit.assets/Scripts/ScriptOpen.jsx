﻿/*    A list of common initialization instructions used by all shapes*/if(app.documents.length < 1){    alert("Please open a document and run the script");}else{    createLayer(shapeName);        var originalUnit = preferences.rulerUnits;    preferences.rulerUnits = Units.PIXELS;    var hadSelection;        if(!hasSelection())    {        hadSelection = false;        app.activeDocument.selection.selectAll();    } else    {        hadSelection = true;    }    var origX = new UnitValue(app.activeDocument.selection.bounds[0]).value;    var origY = new UnitValue(app.activeDocument.selection.bounds[1]).value;    var docWidth = new UnitValue(app.activeDocument.selection.bounds[2]).value - origX;    var docHeight = new UnitValue(app.activeDocument.selection.bounds[3]).value - origY;    var lineSubPathArray = new Array();    var lineSubPathArrayPos = 0;