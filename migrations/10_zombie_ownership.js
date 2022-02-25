const ZombieOwnership = artifacts.require("ZombieOwnership.sol");

module.exports = function (deployer) {
  deployer.deploy(ZombieOwnership);
};
