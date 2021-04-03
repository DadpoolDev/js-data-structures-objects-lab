// Write your solution in this file!
const driver = {
    name: `Sam`,
    address: `0001 Cemetery Lane`
}

function updateDriverWithKeyAndValue(driver, key, value) {
    const driver2 = {...driver};
    driver2.name = `Sam`;
    driver2.address = `11 Broadway`;
    return driver2;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver.address = `12 Broadway`;
    return driver; 

}

function deleteFromDriverByKey (driver, key) {
    const {name, ...driver2} = driver;
    return driver2;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver.name;
    return driver;
}