const ZombieAttack = artifacts.require("ZombieAttack.sol");

module.exports = function (deployer) {
  deployer.deploy(ZombieAttack);
};
