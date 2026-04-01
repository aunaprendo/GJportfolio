

11. Calling validateManifest() with { containerId: 3.50 } should return the new object { containerId: "Invalid", destination: "Missing", weight: "Missing", unit: "Missing", hazmat: "Missing" } without mutating the source input. You can use Number.isInteger() to validate integer values.


{ containerId: 'Invalid',
  destination: 'Missing',
  weight: 'Missing',
  unit: 'Missing',
  hazmat: 'Missing' }


Failed: 24. If the input manifest object is not valid, your processManifest function should also log the object returned by calling validateManifest() with the original manifest object. Call console.log() directly with the returned object.
Failed: 25. If the input manifest object is not valid, your processManifest function should log an error message with the object's containerId, and then log the object returned by calling validateManifest() with the input object. This should involve two console.log() calls.