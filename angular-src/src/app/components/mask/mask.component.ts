import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { AccommodationService } from '../../services/accommodation.service';
import { HealthcareService } from '../../services/healthcare.service';
import { OtherService } from '../../services/other.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.css']
})

export class MaskComponent implements OnInit {

  // Control tab selected or not
  isFoodSelected: boolean;
  isAccommodationSelected: boolean;
  isHealthcareSelected: boolean;
  isOtherServicesSelected: boolean;

  // Control radio selected or not
  isAccommodationRadioButtonSelected: boolean;
  isEmergencyPetBoardingRadioButtonSelected: boolean;
  isHealthcareRadioButtonSelected: boolean;
  isPetHealthcareRadioButtonSelected: boolean;
  isWifiRadioButtonSelected: boolean;
  isEventsRadioButtonSelected: boolean;

  // Control map display or not
  isFoodServiceMapVisiable: boolean;
  isAccommodationServiceMapVisiable: boolean;
  isEmergencyPetBoardingServiceMapVisiable: boolean;
  isHealthcareServiceMapVisiable: boolean;
  isPetHealthcareServiceMapVisiable: boolean;
  isWifiServiceMapVisiable: boolean;

  // Control button selected or not
  isNearestServiceSelected: boolean;
  areAllServicesSelected: boolean;

  // Data from RESTful service
  nearestService: any;
  allServices: any[];

  // Google map url api
  googleMapDirectionUrl: string;

  // Initial current location
  isInitialMapEnabled: boolean;
  isLocationServiceAvailable: boolean;

  // Map elements
  latitude: number;
  longitude: number;
  isOpen: boolean;
  zoom: number;
  isMarkerClicked: boolean;
  selectedService: any;

  // Range Filter
  cachedAllServices: any[];
  rangeValue: number;

  constructor(public foodService: FoodService,
    public accommodationService: AccommodationService,
    public healthcareService: HealthcareService,
    public otherService: OtherService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.isAccommodationSelected = true;
    this.isAccommodationRadioButtonSelected = true;
    this.isHealthcareRadioButtonSelected = true;
    this.isWifiRadioButtonSelected = true;
    this.getCurrentLocation();
    this.isInitialMapEnabled = true;
    this.rangeValue = 5;
  }

  getCurrentLocation() {
    // Get current location
    navigator.geolocation.getCurrentPosition(pos => {

      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
      this.isLocationServiceAvailable = true;
      this.isOpen = true;
      this.zoom = 10;
      console.log('Your current position is:');
      console.log('Latitude:' + this.latitude);
      console.log('Longitude:' + this.longitude);
    }, (error) => {
      this.isLocationServiceAvailable = false;
      console.log(error);
      this.toastr.warning('iOS Devices: Setting - Privacy - Location Services - Find the browser and change to While Using!');
    });
  }

  // If search nearest one button is clicked
  searchNearestService(event) {

    this.isNearestServiceSelected = true;
    this.areAllServicesSelected = false;
    this.isMarkerClicked = false;
    this.isInitialMapEnabled = false;
    window.location.href = '#placeholder';

    // 1. If food tab is selected
    if (this.isFoodSelected) {
      setTimeout(() => {
        this.foodService.getNearestFood()
          .subscribe(food => {
            this.nearestService = food;
            this.isFoodServiceMapVisiable = true;
            this.isAccommodationServiceMapVisiable = false;
            this.isEmergencyPetBoardingServiceMapVisiable = false;
            this.isHealthcareServiceMapVisiable = false;
            this.isPetHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = false;
            this.clickedMarker(this.nearestService);
            window.location.href = '#placeholder';
          });
      }, 0);
    }

    // 2. If accommodation tab is selected and accommodation radio button is ticked
    if (this.isAccommodationSelected && this.isAccommodationRadioButtonSelected) {
      setTimeout(() => {
        this.accommodationService.getNearestAccommodation()
          .subscribe(accommodation => {
            this.nearestService = accommodation;
            this.isAccommodationServiceMapVisiable = true;
            this.isFoodServiceMapVisiable = false;
            this.isEmergencyPetBoardingServiceMapVisiable = false;
            this.isHealthcareServiceMapVisiable = false;
            this.isPetHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = false;
            this.clickedMarker(this.nearestService);
            window.location.href = '#placeholder';
          });
      }, 0);
    }

    // 3. If accommodation tab is selected and emergencyPetBoarding radio button is ticked
    if (this.isAccommodationSelected && this.isEmergencyPetBoardingRadioButtonSelected) {
      setTimeout(() => {
        this.accommodationService.getNearestEmergencyPetBoarding()
          .subscribe(emergencyPetBoarding => {
            this.nearestService = emergencyPetBoarding;
            this.isEmergencyPetBoardingServiceMapVisiable = true;
            this.isFoodServiceMapVisiable = false;
            this.isAccommodationServiceMapVisiable = false;
            this.isHealthcareServiceMapVisiable = false;
            this.isPetHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = false;
            this.clickedMarker(this.nearestService);
            window.location.href = '#placeholder';
          });
      }, 0);
    }

    // 4. If healthcare tab is selected and healthcare radio button is ticked
    if (this.isHealthcareSelected && this.isHealthcareRadioButtonSelected) {
      setTimeout(() => {
        this.healthcareService.getNearestHealthcare()
          .subscribe(healthcare => {
            this.nearestService = healthcare;
            this.isHealthcareServiceMapVisiable = true;
            this.isFoodServiceMapVisiable = false;
            this.isAccommodationServiceMapVisiable = false;
            this.isEmergencyPetBoardingServiceMapVisiable = false;
            this.isPetHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = false;
            this.clickedMarker(this.nearestService);
            window.location.href = '#placeholder';
          });
      }, 0);
    }

    // 5. If healthcare tab is selected and petHealthcare radio button is ticked
    if (this.isHealthcareSelected && this.isPetHealthcareRadioButtonSelected) {
      setTimeout(() => {
        this.healthcareService.getNearestPetHealthcare()
          .subscribe(petHealthcare => {
            this.nearestService = petHealthcare;
            this.isPetHealthcareServiceMapVisiable = true;
            this.isFoodServiceMapVisiable = false;
            this.isAccommodationServiceMapVisiable = false;
            this.isEmergencyPetBoardingServiceMapVisiable = false;
            this.isHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = false;
            this.clickedMarker(this.nearestService);
            window.location.href = '#placeholder';
          });
      }, 0);
    }

    // 6. If other service tab is selected and wifi radio button is ticked
    if (this.isOtherServicesSelected && this.isWifiRadioButtonSelected) {
      setTimeout(() => {
        this.otherService.getNearestWifiHotspot()
          .subscribe(wifiHotspot => {
            this.nearestService = wifiHotspot;
            this.isPetHealthcareServiceMapVisiable = false;
            this.isFoodServiceMapVisiable = false;
            this.isAccommodationServiceMapVisiable = false;
            this.isEmergencyPetBoardingServiceMapVisiable = false;
            this.isHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = true;
            this.clickedMarker(this.nearestService);
            window.location.href = '#placeholder';
          });
      }, 0);
    }
  }

  // If search all button is clicked
  searchAllServices(event) {

    this.isNearestServiceSelected = false;
    this.areAllServicesSelected = true;
    this.isMarkerClicked = false;
    this.isInitialMapEnabled = false;
    window.location.href = '#placeholder';

    // 1. If food tab is selected
    if (this.isFoodSelected) {
      setTimeout(() => {
        this.foodService.getFoods()
          .subscribe(foods => {
            this.allServices = foods;
            this.cachedAllServices = foods;
            this.isFoodServiceMapVisiable = true;
            this.isAccommodationServiceMapVisiable = false;
            this.isEmergencyPetBoardingServiceMapVisiable = false;
            this.isHealthcareServiceMapVisiable = false;
            this.isPetHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = false;
            this.rangeChange();
            window.location.href = '#placeholder';
          });
      }, 0);
    }

    // 2. If accommodation tab is selected and accommodation radio button is ticked
    if (this.isAccommodationSelected && this.isAccommodationRadioButtonSelected) {
      setTimeout(() => {
        this.accommodationService.getAccommodations()
          .subscribe(accommodations => {
            this.allServices = accommodations;
            this.cachedAllServices = accommodations;
            this.isAccommodationServiceMapVisiable = true;
            this.isFoodServiceMapVisiable = false;
            this.isEmergencyPetBoardingServiceMapVisiable = false;
            this.isHealthcareServiceMapVisiable = false;
            this.isPetHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = false;
            this.rangeChange();
            window.location.href = '#placeholder';
          });
      }, 0);
    }

    // 3. If accommodation tab is selected and emergencyPetBoarding radio button is ticked
    if (this.isAccommodationSelected && this.isEmergencyPetBoardingRadioButtonSelected) {
      setTimeout(() => {
        this.accommodationService.getEmergencyPetBoardings()
          .subscribe(emergencyPetBoardings => {
            this.allServices = emergencyPetBoardings;
            this.cachedAllServices = emergencyPetBoardings;
            this.isAccommodationServiceMapVisiable = true;
            this.isFoodServiceMapVisiable = false;
            this.isEmergencyPetBoardingServiceMapVisiable = false;
            this.isHealthcareServiceMapVisiable = false;
            this.isPetHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = false;
            this.rangeChange();
            window.location.href = '#placeholder';
          });
      }, 0);
    }

    // 4. If healthcare tab is selected and healthcare radio button is ticked
    if (this.isHealthcareSelected && this.isHealthcareRadioButtonSelected) {
      setTimeout(() => {
        this.healthcareService.getHealthcares()
          .subscribe(healthcares => {
            this.allServices = healthcares;
            this.cachedAllServices = healthcares;
            this.isHealthcareServiceMapVisiable = true;
            this.isFoodServiceMapVisiable = false;
            this.isAccommodationServiceMapVisiable = false;
            this.isEmergencyPetBoardingServiceMapVisiable = false;
            this.isPetHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = false;
            this.rangeChange();
            window.location.href = '#placeholder';
          });
      }, 0);
    }

    // 5. If healthcare tab is selected and petHealthcare radio button is ticked
    if (this.isHealthcareSelected && this.isPetHealthcareRadioButtonSelected) {
      setTimeout(() => {
        this.healthcareService.getPetHealthcares()
          .subscribe(petHealthcares => {
            this.allServices = petHealthcares;
            this.cachedAllServices = petHealthcares;
            this.isPetHealthcareServiceMapVisiable = true;
            this.isFoodServiceMapVisiable = false;
            this.isAccommodationServiceMapVisiable = false;
            this.isEmergencyPetBoardingServiceMapVisiable = false;
            this.isHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = false;
            this.rangeChange();
            window.location.href = '#placeholder';
          });
      }, 0);
    }

    // 6. If other service tab is selected and wifi radio button is ticked
    if (this.isOtherServicesSelected && this.isWifiRadioButtonSelected) {
      setTimeout(() => {
        this.otherService.getWifiHotspots()
          .subscribe(wifiHotspots => {
            this.allServices = wifiHotspots;
            this.cachedAllServices = wifiHotspots;
            this.isPetHealthcareServiceMapVisiable = false;
            this.isFoodServiceMapVisiable = false;
            this.isAccommodationServiceMapVisiable = false;
            this.isEmergencyPetBoardingServiceMapVisiable = false;
            this.isHealthcareServiceMapVisiable = false;
            this.isWifiServiceMapVisiable = true;
            this.rangeChange();
            window.location.href = '#placeholder';
          });
      }, 0);
    }
  }

  clickFood(event) {
    this.isFoodSelected = true;
    this.isAccommodationSelected = false;
    this.isHealthcareSelected = false;
    this.isOtherServicesSelected = false;
  }

  clickAccommodation(event) {
    this.isFoodSelected = false;
    this.isAccommodationSelected = true;
    this.isHealthcareSelected = false;
    this.isOtherServicesSelected = false;
  }

  clickHealthcare(event) {
    this.isFoodSelected = false;
    this.isAccommodationSelected = false;
    this.isHealthcareSelected = true;
    this.isOtherServicesSelected = false;
  }

  clickOtherServices(event) {
    this.isFoodSelected = false;
    this.isAccommodationSelected = false;
    this.isHealthcareSelected = false;
    this.isOtherServicesSelected = true;
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

  tickWifiRadioButton(event) {
    if (event.target.checked) {
      this.isWifiRadioButtonSelected = true;
      this.isEventsRadioButtonSelected = false;
    }
  }

  tickEventsRadioButton(event) {
    if (event.target.checked) {
      this.isWifiRadioButtonSelected = false;
      this.isEventsRadioButtonSelected = true;
    }
  }

  rangeChange() {
    console.log('rangeValue: ' + this.rangeValue);
    console.log('services: ', this.cachedAllServices);
    const filterServices: any[] = [];
    for (const eachService of this.cachedAllServices) {
      if (eachService.distance <= this.rangeValue) {
        filterServices.push(eachService);
      }
    }
    console.log('filterServices: ', filterServices);
    this.allServices = filterServices;
  }

  clickedMarker(service) {
    console.log('Marker clicked');
    console.log(service);
    this.isMarkerClicked = true;
    this.selectedService = service;
    this.googleMapDirectionUrl = 'https://maps.google.com?saddr=Current+Location&daddr='
      + this.selectedService.result.name + ' ' + this.selectedService.result.address;
    console.log('googleMapDirectionUrl: ' + this.googleMapDirectionUrl);
    window.location.href = '#placeholder';
  }

}
