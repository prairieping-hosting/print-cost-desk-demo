(function () {
  'use strict';
  const defaults = Object.freeze({quantity:1,grams:100,hours:4,materialPrice:25,watts:120,electricity:0.2,failurePercent:10,wear:0.3,laborMinutes:15,laborRate:20,packaging:1,feePercent:6.5,fixedFee:0.3,marginPercent:30});
  const limits = {quantity:[1,10000],grams:[0,1000000],hours:[0,10000],materialPrice:[0,1000000],watts:[0,100000],electricity:[0,1000],failurePercent:[0,99.9],wear:[0,100000],laborMinutes:[0,1000000],laborRate:[0,100000],packaging:[0,1000000],feePercent:[0,99.9],fixedFee:[0,1000000],marginPercent:[0,99.9]};
  function calculate(input) {
    const p = {};
    for (const [key, range] of Object.entries(limits)) {
      const value = input[key];
      if (typeof value !== 'number' || !Number.isFinite(value) || value < range[0] || value > range[1]) throw new Error('Check '+key+': enter a number from '+range[0]+' to '+range[1]+'.');
      p[key] = value;
    }
    if (!Number.isInteger(p.quantity)) throw new Error('Quantity must be a whole number.');
    const fee = p.feePercent / 100, margin = p.marginPercent / 100;
    if (fee + margin >= 1) throw new Error('Selling fee and target margin must add up to less than 100%.');
    const attempts = 1 / (1 - p.failurePercent / 100);
    const material = p.quantity*p.grams/1000*p.materialPrice*attempts;
    const electricity = p.quantity*p.hours*p.watts/1000*p.electricity*attempts;
    const wear = p.quantity*p.hours*p.wear*attempts;
    const labor = p.laborMinutes/60*p.laborRate;
    const cost = material + electricity + wear + labor + p.packaging;
    const rawPrice = (cost + p.fixedFee) / (1 - fee - margin);
    if (!Number.isFinite(rawPrice) || rawPrice > 1000000000) throw new Error("Quote exceeds the supported price range of 1 billion currency units.");
    const price = Math.ceil(rawPrice*100)/100;
    const sellingFees = price*fee+p.fixedFee;
    const profit = price-sellingFees-cost;
    const actualMargin = price === 0 ? 0 : profit/price;
    return {material,electricity,wear,labor,packaging:p.packaging,cost,price,unitPrice:price/p.quantity,sellingFees,profit,actualMargin};
  }
  function csv(rows) {
    return rows.map(row => row.map(value => {
      let s=String(value ?? '');
      if (/^[\s]*[=+\-@]/.test(s)) s="'"+s;
      return '"'+s.replace(/"/g,'""')+'"';
    }).join(',')).join('\r\n');
  }
  const api={defaults,limits,calculate,csv};
  if (typeof module !== 'undefined' && module.exports) module.exports=api;
  globalThis.PrintCost=api;
})();
