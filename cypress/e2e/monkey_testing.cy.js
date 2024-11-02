const monkeyConfig = require("../../monkey-config.json");

describe("Los estudiantes under monkeys", function () {
    it(`visits los estudiantes and survives monkeys (randomClicks = ${monkeyConfig.monkeysClickEventAmount})`, function () {
        cy.visit("https://losestudiantes.co");
        cy.wait(1000);
        randomClick(monkeyConfig.monkeysClickEventAmount);
    });

    it(`visits los estudiantes and survives monkeys (randomEvents = ${monkeyConfig.monkeysRandomEventAmount})`, function () {
        cy.visit("https://losestudiantes.co");
        cy.wait(1000);
        console.log(monkeyConfig.monkeysRandomEventAmount);
        randomEvent(monkeyConfig.monkeysRandomEventAmount);
    });
});

function randomClick(monkeysLeft) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    if (monkeysLeft > 0) {
        cy.get("a").then(($links) => {
            if ($links.length > 0) {
                let randomLink = $links.get(getRandomInt(0, $links.length));
                if (!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({ force: true });
                    monkeysLeft--;
                }
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }
}

const availableEvents = [
    "click_link",
    "fill_input",
    "select_combo",
    "click_button",
];

function randomEvent(monkeysLeft) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    if (monkeysLeft > 0) {
        const eventIndex = getRandomInt(0, availableEvents.length);
        const eventType = availableEvents[eventIndex];

        switch (eventType) {
            case "click_link":
                cy.get("body").then(($body) => {
                    if ($body.find("a").length) {
                        cy.get("a").then(($links) => {
                            if ($links.length > 0) {
                                let randomLink = $links.get(
                                    getRandomInt(0, $links.length)
                                );
                                if (!Cypress.dom.isHidden(randomLink)) {
                                    cy.wrap(randomLink).click({ force: true });
                                    monkeysLeft--;
                                }
                            }
                            cy.wait(1000);
                            randomEvent(monkeysLeft);
                        });
                    }
                });
                break;

            case "fill_input":
                cy.get("body").then(($body) => {
                    if ($body.find("input").length) {
                        cy.get("input").then(($inputs) => {
                            var randomInput = $inputs.get(
                                getRandomInt(0, $inputs.length)
                            );
                            if (!Cypress.dom.isHidden(randomInput)) {
                                cy.wrap(randomInput).type("Test", {
                                    force: true,
                                });
                                monkeysLeft--;
                            }
                            cy.wait(1000);
                            randomEvent(monkeysLeft);
                        });
                    }
                });
                break;

            case "select_combo":
                cy.get("body").then(($body) => {
                    if ($body.find("select").length) {
                        cy.get("select").then(($selects) => {
                            var randomSelect = $selects.get(
                                getRandomInt(0, $selects.length)
                            );
                            cy.wrap(randomSelect).select(
                                getRandomInt(1, randomSelect.options.length),
                                { force: true }
                            );
                            monkeysLeft--;
                        });
                    }
                    cy.wait(1000);
                    randomEvent(monkeysLeft);
                });
                break;
            case "click_button":
                cy.get("body").then(($body) => {
                    if ($body.find("button").length) {
                        cy.get("button").then(($buttons) => {
                            if ($buttons.length > 0) {
                                let randomButton = $buttons.get(
                                    getRandomInt(0, $buttons.length)
                                );
                                if (!Cypress.dom.isHidden(randomButton)) {
                                    cy.wrap(randomButton).click({
                                        force: true,
                                    });
                                    monkeysLeft--;
                                }
                            }
                            cy.wait(1000);
                            randomEvent(monkeysLeft);
                        });
                    }
                });
                break;

            default:
                break;
        }
    }
}
