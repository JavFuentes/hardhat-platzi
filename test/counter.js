// Importamos las librerías necesarias
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter Contract", () => {

  // Descripción del test: Debería incrementar el contador
  it("Should increment the counter", async () => {
    
    // Obtenemos la fábrica de contratos para el contrato "Counter"
    const Counter = await ethers.getContractFactory("Counter");
    // Desplegamos una instancia del contrato con un valor inicial de 0
    const counter = await Counter.deploy(0);
    // Llamamos a la función increment del contrato
    await counter.increment();
    // Obtenemos el valor actualizado del contador
    const updatedCounter = counter.getCounter();
    // Verificamos que el valor del contador sea igual a 1
    expect(updatedCounter).to.equal(1);
  });
});
