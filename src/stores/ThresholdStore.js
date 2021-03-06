import alt from '../alt.js';
import ThresholdActions from '../actions/ThresholdActions.js';
import CEOPovertyThreshold from '../controllers/CEOPovertyThreshold.js';


class ThresholdStore {
  constructor() {
    this.family = { adults: 2, children: 2, income: 15500 };
    this.CEOPovertyThreshold = 31156;
    this.eligibility = {};

    this.bindListeners({
      handleUpdateFamily: ThresholdActions.UPDATE_FAMILY
    });
  }

  handleUpdateFamily(family) {
    this.family = family;
    this.CEOPovertyThreshold = CEOPovertyThreshold(this.family.income, this.family.adults, this.family.children);
  }
}

module.exports = alt.createStore(ThresholdStore, 'ThresholdStore');
