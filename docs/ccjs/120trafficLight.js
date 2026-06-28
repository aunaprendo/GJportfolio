const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
    for (let i = 0; i < cycles; i++) {
    if (config.phases.length===0) {
        console.log("No phases found");
        return;
    }
    if (config.fault) { 
        console.log("Faulted phase!");
        return;
    }
    config.phases.forEach((phase)=> {
      if (phase.duration <=0){
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    })
  }
}

runSequence(config4, 5)

function generateTimeline (config, cycles) {
  const results =[];
  for (let j = 0; j < cycles; j++) {
  for (let i=0; i<config.phases.length; i++) {
    if (j==0 && i==0) {
      results.push(config.phases[i].duration)
    } else {
      const total = results[results.length-1] + config.phases[i].duration;
      results.push(total)
    } 
  }
}
  return results;
}
//console.log(generateTimeline(config2, 2))

