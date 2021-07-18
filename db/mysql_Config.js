module.exports = {
  HOST: "8-aris-bs.ds.bapb.internal",
  USER: "alex",
  PASSWORD: "Manager98_",
  DB: "PPO",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};