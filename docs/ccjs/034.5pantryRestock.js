function parseShipment(rawData) {
  let shipment = [];
  let seen = new Set();

  for (let item of rawData) {
    let parts = item.split("|");
    let shipmentObj = {
      sku: parts[0],
      name: parts[1],
      qty: Number(parts[2]),
      expires: parts[3],
      zone: parts[4] || "general",
    };
    if (seen.has(shipmentObj.sku)) {
      continue;
    }
    seen.add(shipmentObj.sku);
    shipment.push(shipmentObj);
  }
  return shipment;
}

const rawShip = [
  "SKU1|acorns|5|2026-01-01|nuts",
  "SKU2|leaves|0|2026-01-01",
  "SKU1|branches|99|2027-01-01|drey",
];

const pantry = [
  {
    sku: "SKU1",
    name: "pecan",
    qty: 10,
    expires: "2025-12-01",
    zone: "nuts",
  },
  {
    sku: "SKU3",
    name: "fluff",
    qty: 4,
    expires: "2025-10-01",
    zone: "drey",
  },
];

function planRestock(pantry, shipment) {
  let actions = [];

  for (let item of shipment) {
    if (item.qty <= 0) {
      actions.push({
        type: "discard",
        item: item,
      });
    } else if (pantry.some((pantryItem) => pantryItem.sku === item.sku)) {
      actions.push({
        type: "restock",
        item: item,
      });
    } else {
      actions.push({
        type: "donate",
        item: item,
      });
    }
  }
  return actions;
}

function groupByZone(actions) {
  let groups = {};

  for (let action of actions) {
    let zone = action.item.zone;

    if (!groups[zone]) {
      groups[zone] = [];
    }

    groups[zone].push(action);
  }

  return groups;
}

function clonePantry(pantry) {
  return pantry.map((item) => ({ ...item }));
}

const shipment = parseShipment(rawShip);
const actions = planRestock(pantry, shipment);
const groupedActions = groupByZone(actions);

console.log(groupedActions);
