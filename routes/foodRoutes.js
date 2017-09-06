/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();

// Require Food model in our routes module
const Food = require('../models/foodModel');

/* GET Food */
router.get('/food', (req, res) => {
    Food.find((err, foods) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(foods);
        }
    });
});

/* GET Food in the shortest distance */
router.get('/food/:currentLatitude/:currentLongitude', (req, res) => {
    // Get current location from Get method parameters
    let currentLocation = {
        "currentLatitude": req.params.currentLatitude,
        "currentLongitude": req.params.currentLongitude
    };
    Food.find((err, foods) => {
        if (err) {
            console.log(err);
        }
        else {
            let distanceArray = [];
            let foodAndDistanceMapArray = [];
            foods.forEach((eachFood) => {
                // Get eachDistance between each food location and current location
                let eachLatitude = eachFood.latitude;
                let eachLongitude = eachFood.longitude;
                let eachDistance = getDistance(eachLatitude, eachLongitude,
                    currentLocation.currentLatitude, currentLocation.currentLongitude);
                let eachFoodAndDistanceMap = {
                    food: eachFood,
                    distance: eachDistance
                }
                // Construct distanceArray and foodAndDistanceMapArray
                distanceArray.push(eachDistance);
                foodAndDistanceMapArray.push(eachFoodAndDistanceMap);
            });
            // Sort distance in ascending order
            distanceArray.sort(function (a, b) {
                return a - b
            });
            // Get shortest distance is the first item in distanceArray
            let shortestDistance = distanceArray[0];
            console.log('Shortest Distance: ' + shortestDistance);

            // Get food service info which is in the shortest distance
            let foodInShortestDistance = null;
            foodAndDistanceMapArray.forEach((eachFoodAndDistanceMap) => {
                if (eachFoodAndDistanceMap.distance == shortestDistance) {
                    foodInShortestDistance = eachFoodAndDistanceMap.food;
                }
            });
            console.log(foodInShortestDistance);
            res.json(foodInShortestDistance);
        }
    });
});

/**
 * Transfer from angle to radian
 *
 * @param angle
 * @returns {number}
 */
function toRadians(angle) {
    return angle * Math.PI / 180;
}

/**
 * Calculate distance between two latitude-longitude points
 *
 * @param latitude1
 * @param longitude1
 * @param latitude2
 * @param longitude2
 * @returns {number}
 */
function getDistance(latitude1, longitude1, latitude2, longitude2) {
    const EARTH_RADIUS = 6371; // unit:km
    let latitudeRadian1 = toRadians(latitude1);
    let latitudeRadian2 = toRadians(latitude2);
    let phi = toRadians((latitude2 - latitude1));
    let lambda = toRadians((longitude2 - longitude1));
    let temp1 = Math.sin(phi / 2) * Math.sin(phi / 2)
        + Math.cos(latitudeRadian1) * Math.cos(latitudeRadian2)
        * Math.sin(lambda / 2) * Math.sin(lambda / 2);
    let temp2 = 2 * Math.atan2(Math.sqrt(temp1), Math.sqrt(1 - temp1));
    return EARTH_RADIUS * temp2;
}

module.exports = router;
