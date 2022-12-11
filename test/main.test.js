import { describe, expect, it, vi } from "vitest";
import { getShipSpeed, getShipName, compareSpeeds } from "main";

describe("Conjunto de test de main.js", () => {
    it("La llamada a la función asincrona getShipName, debe devolver un objeto con la propiedad 'value'", async() => {
        await expect(getShipName()).resolves.toHaveProperty('value')
    });

    it("La llamada a la función asincrona getShipSpeed, debe devolver un objeto con la propiedad 'value'", async() => {
        await expect(getShipSpeed()).resolves.toHaveProperty('value')
    });

    it("La llamada a la función asincrona compareSpeeds, debe devolver un objeto con la propiedad 'value'", async() => {
        await expect(compareSpeeds()).resolves.toHaveProperty('value')
    })



})