import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { AccommodationService } from '../../services/accommodation.service';
import { HealthcareService } from '../../services/healthcare.service';
import { MapComponent } from "./map/map.component";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.css']
})

export class MaskComponent implements OnInit {

  // // Control checkbox checked or not
  // isForYouChecked: boolean;
  // isForYourPetsChecked: boolean;

  // Control tab selected or not
  isFoodSelected: boolean;
  isAccommodationSelected: boolean;
  isHealthcareSelected: boolean;

  // Control radio selected or not
  isAccommodationRadioButtonSelected: boolean;
  isEmergencyPetBoardingRadioButtonSelected: boolean;
  isHealthcareRadioButtonSelected: boolean;
  isPetHealthcareRadioButtonSelected: boolean;

  // Control map display or not
  isFoodServiceMapVisiable: boolean;
  isAccommodationServiceMapVisiable: boolean;
  isEmergencyPetBoardingServiceMapVisiable: boolean;
  isHealthcareServiceMapVisiable: boolean;
  isPetHealthcareServiceMapVisiable: boolean;

  // Control button selected or not
  isNearestServiceSelected: boolean;
  areAllServicesSelected: boolean;

  // Control nearest service panel display or not
  isNearestServicePanelVisiable: boolean;

  // Data from RESTful service
  nearestService: any;
  allServices: any[];

  latitude: number;
  longitude: number;
  isOpen: boolean;
  zoom: number;

  constructor(public foodService: FoodService,
    public accommodationService: AccommodationService,
    public healthcareService: HealthcareService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.isAccommodationSelected = true;
    this.isAccommodationRadioButtonSelected = true;
    this.isHealthcareRadioButtonSelected = true;
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    // Get current location
    navigator.geolocation.getCurrentPosition(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
      this.isOpen = true;
      this.zoom = 10;
      console.log('Your current position is:');
      console.log('Latitude:' + this.latitude);
      console.log('Longitude:' + this.longitude);
    });
  }

  // If search nearest one button is clicked
  searchNearestService(event) {

    this.isNearestServiceSelected = true;
    this.areAllServicesSelected = false;
    this.getCurrentLocation();

    console.log("isAccommodationRadioButtonSelected: " + this.isAccommodationRadioButtonSelected);
    console.log("isEmergencyPetBoardingRadioButtonSelected: " + this.isEmergencyPetBoardingRadioButtonSelected);
    console.log("isHealthcareRadioButtonSelected: " + this.isHealthcareRadioButtonSelected);
    console.log("isPetHealthcareRadioButtonSelected: " + this.isPetHealthcareRadioButtonSelected);

    // 1. If food tab is selected
    if (this.isFoodSelected) {
      this.foodService.getNearestFood()
        .subscribe(food => {
          this.nearestService = food;
          this.isNearestServicePanelVisiable = true;
          this.isFoodServiceMapVisiable = true;

          this.isAccommodationServiceMapVisiable = false;
          this.isEmergencyPetBoardingServiceMapVisiable = false;
          this.isHealthcareServiceMapVisiable = false;
          this.isPetHealthcareServiceMapVisiable = false;
        });
    }

    // 2. If accommodation tab is selected and accommodation radio button is ticked
    if (this.isAccommodationSelected && this.isAccommodationRadioButtonSelected) {
      this.accommodationService.getNearestAccommodation()
        .subscribe(accommodation => {
          this.nearestService = accommodation;
          this.isNearestServicePanelVisiable = true;
          this.isAccommodationServiceMapVisiable = true;

          this.isFoodServiceMapVisiable = false;
          this.isEmergencyPetBoardingServiceMapVisiable = false;
          this.isHealthcareServiceMapVisiable = false;
          this.isPetHealthcareServiceMapVisiable = false;
        });
    }

    // 3. If accommodation tab is selected and emergencyPetBoarding radio button is ticked
    if (this.isAccommodationSelected && this.isEmergencyPetBoardingRadioButtonSelected) {
      this.accommodationService.getNearestEmergencyPetBoarding()
        .subscribe(emergencyPetBoarding => {
          this.nearestService = emergencyPetBoarding;
          this.isNearestServicePanelVisiable = true;
          this.isEmergencyPetBoardingServiceMapVisiable = true;

          this.isFoodServiceMapVisiable = false;
          this.isAccommodationServiceMapVisiable = false;
          this.isHealthcareServiceMapVisiable = false;
          this.isPetHealthcareServiceMapVisiable = false;
        });
    }


    // 4. If healthcare tab is selected and healthcare radio button is ticked
    if (this.isHealthcareSelected && this.isHealthcareRadioButtonSelected) {
      this.healthcareService.getNearestHealthcare()
        .subscribe(healthcare => {
          this.nearestService = healthcare;
          this.isNearestServicePanelVisiable = true;
          this.isHealthcareServiceMapVisiable = true;

          this.isFoodServiceMapVisiable = false;
          this.isAccommodationServiceMapVisiable = false;
          this.isEmergencyPetBoardingServiceMapVisiable = false;
          this.isPetHealthcareServiceMapVisiable = false;
        });
    }

    // 5. If healthcare tab is selected and petHealthcare radio button is ticked
    if (this.isHealthcareSelected && this.isPetHealthcareRadioButtonSelected) {
      this.healthcareService.getNearestPetHealthcare()
        .subscribe(petHealthcare => {
          this.nearestService = petHealthcare;
          this.isNearestServicePanelVisiable = true;
          this.isPetHealthcareServiceMapVisiable = true;

          this.isFoodServiceMapVisiable = false;
          this.isAccommodationServiceMapVisiable = false;
          this.isEmergencyPetBoardingServiceMapVisiable = false;
          this.isHealthcareServiceMapVisiable = false;
        });
    }

  }

  // If search all button is clicked
  searchAllServices(event) {

    this.isNearestServiceSelected = false;
    this.areAllServicesSelected = true;
    this.getCurrentLocation();

    console.log("isAccommodationRadioButtonSelected: " + this.isAccommodationRadioButtonSelected);
    console.log("isEmergencyPetBoardingRadioButtonSelected: " + this.isEmergencyPetBoardingRadioButtonSelected);
    console.log("isHealthcareRadioButtonSelected: " + this.isHealthcareRadioButtonSelected);
    console.log("isPetHealthcareRadioButtonSelected: " + this.isPetHealthcareRadioButtonSelected);

    // 1. If food tab is selected
    if (this.isFoodSelected) {
      this.foodService.getFoods()
        .subscribe(foods => {
          this.allServices = foods;
          this.isFoodServiceMapVisiable = true;

          this.isAccommodationServiceMapVisiable = false;
          this.isEmergencyPetBoardingServiceMapVisiable = false;
          this.isHealthcareServiceMapVisiable = false;
          this.isPetHealthcareServiceMapVisiable = false;
          window.location.href = '#service-map';
        });
    }

    // 2. If accommodation tab is selected and accommodation radio button is ticked
    if (this.isAccommodationSelected && this.isAccommodationRadioButtonSelected) {
      this.accommodationService.getAccommodations()
        .subscribe(accommodations => {
          this.allServices = accommodations;
          this.isAccommodationServiceMapVisiable = true;

          this.isFoodServiceMapVisiable = false;
          this.isEmergencyPetBoardingServiceMapVisiable = false;
          this.isHealthcareServiceMapVisiable = false;
          this.isPetHealthcareServiceMapVisiable = false;
          window.location.href = '#service-map';
        });
    }

    // 3. If accommodation tab is selected and emergencyPetBoarding radio button is ticked
    if (this.isAccommodationSelected && this.isEmergencyPetBoardingRadioButtonSelected) {
      this.accommodationService.getEmergencyPetBoardings()
        .subscribe(emergencyPetBoardings => {
          this.allServices = emergencyPetBoardings;
          this.isAccommodationServiceMapVisiable = true;

          this.isFoodServiceMapVisiable = false;
          this.isEmergencyPetBoardingServiceMapVisiable = false;
          this.isHealthcareServiceMapVisiable = false;
          this.isPetHealthcareServiceMapVisiable = false;
          window.location.href = '#service-map';
        });
    }

    // 4. If healthcare tab is selected and healthcare radio button is ticked
    if (this.isHealthcareSelected && this.isHealthcareRadioButtonSelected) {
      this.healthcareService.getHealthcares()
        .subscribe(healthcares => {
          this.allServices = healthcares;
          this.isHealthcareServiceMapVisiable = true;

          this.isFoodServiceMapVisiable = false;
          this.isAccommodationServiceMapVisiable = false;
          this.isEmergencyPetBoardingServiceMapVisiable = false;
          this.isPetHealthcareServiceMapVisiable = false;
          window.location.href = '#service-map';
        });
    }

    // 5. If healthcare tab is selected and petHealthcare radio button is ticked
    if (this.isHealthcareSelected && this.isPetHealthcareRadioButtonSelected) {
      this.healthcareService.getPetHealthcares()
        .subscribe(petHealthcares => {
          this.allServices = petHealthcares;
          this.isPetHealthcareServiceMapVisiable = true;

          this.isFoodServiceMapVisiable = false;
          this.isAccommodationServiceMapVisiable = false;
          this.isEmergencyPetBoardingServiceMapVisiable = false;
          this.isHealthcareServiceMapVisiable = false;
          window.location.href = '#service-map';
        });
    }
  }

  clickFood(event) {
    this.isFoodSelected = true;
    this.isAccommodationSelected = false;
    this.isHealthcareSelected = false;
  }

  clickAccommodation(event) {
    this.isFoodSelected = false;
    this.isAccommodationSelected = true;
    this.isHealthcareSelected = false;
  }

  clickHealthcare(event) {
    this.isFoodSelected = false;
    this.isAccommodationSelected = false;
    this.isHealthcareSelected = true;
  }

  tickAccommodationRadioButton(event) {
    if (event.target.checked) {
      this.isAccommodationRadioButtonSelected = true;
      this.isEmergencyPetBoardingRadioButtonSelected = false;
    }
  }

  tickEmergencyPetBoardingRadioButton(event) {
    if (event.target.checked) {
      this.isAccommodationRadioButtonSelected = false;
      this.isEmergencyPetBoardingRadioButtonSelected = true;
    }
  }

  tickHealcareRadioButton(event) {
    if (event.target.checked) {
      this.isHealthcareRadioButtonSelected = true;
      this.isPetHealthcareRadioButtonSelected = false;
    }
  }

  tickPetHealthcareRadioButton(event) {
    if (event.target.checked) {
      this.isHealthcareRadioButtonSelected = false;
      this.isPetHealthcareRadioButtonSelected = true;
    }
  }

  clickedMarker() {
    console.log('Marker clicked');
  }

}
