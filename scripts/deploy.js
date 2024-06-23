// Importamos las librerías necesarias
const { ethers } = require("hardhat");

async function main() {
    // Obtenemos el desplegador de contratos (deployer) utilizando ethers.js
    const [deployer] = await ethers.getSigners();
    console.log("Deployer", deployer);
  
    // Obtenemos la fábrica de contratos para el contrato "Counter"
    const Counter = await ethers.getContractFactory("Counter");
    // Desplegamos una instancia del contrato con un valor inicial de 0
    const counter = await Counter.deploy(0);
  
    // Mostramos la dirección del contrato desplegado en la consola
    console.log("Counter Contract Address", counter.address);
  }
  
  // Ejecutamos la función main y manejamos errores
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  