import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { MapComponent } from "./map/map.component";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.css']
})

export class MaskComponent implements OnInit {

  // Control checkbox visibility in food tab
  isCheckboxVisible: boolean;

  // Control checkbox checked or not
  isForYouChecked: boolean;
  isForYourPetsChecked: boolean;

  // Control tab selected or not
  isFoodSelected: boolean;
  isAccommodationSelected: boolean;
  isHealthcareSelected: boolean;

  // Control map display or not
  isFoodServiceMapVisiable: boolean;
  isAccommodationServiceMapVisiable: boolean;
  isHealthcareServiceMapVisiable: boolean;

  // Data from restful service
  nearestService: any;
  allServices: any[];

  // Control which button is selected
  isNearestServiceSelected: boolean;
  areAllServicesSelected: boolean;

  // isNearestFoodServiceSelected: boolean;
  // areAllFoodServicesSelected: boolean;

  // food: any;
  // foods: any[];

  // Control nearest service panel display or not
  isNearestFoodPanelVisiable: boolean;

  // @ViewChild(MapComponent)
  // private mapComponent: MapComponent;

  latitude: number;
  longitude: number;
  isOpen: boolean;
  zoom: number;

  constructor(public foodService: FoodService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    // this.isNearestFoodPanelVisiable = false;
    // this.isForYouChecked = false;
    // this.isForYourPetsChecked = false;
    // this.isFoodSelected = false;
    // this.isHealthcareSelected = false;
  }

  ngOnInit() {
    this.isAccommodationSelected = true;
    this.isCheckboxVisible = true;
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

  searchNearestService(event) {

    this.isNearestServiceSelected = true;
    this.areAllServicesSelected = false;
    this.getCurrentLocation();

    if (this.isFoodSelected) {
      this.foodService.getNearestFood()
        .subscribe(food => {
          // console.log(food);
          // this.food = food;
          this.nearestService = food;
          this.isNearestFoodPanelVisiable = true;
          this.isFoodServiceMapVisiable = true;
        });
      console.log("--isFoodSelected--: " + this.isFoodSelected);
      console.log("isAccommodationSelected: " + this.isAccommodationSelected);
      console.log("isHealthcareSelected: " + this.isHealthcareSelected);
      console.log("----------------------");
      console.log("isNearestServiceSelected: " + this.isNearestServiceSelected);
      console.log("areAllServicesSelected: " + this.areAllServicesSelected);
      console.log("isFoodServiceMapVisiable: " + this.isFoodServiceMapVisiable);
      // console.log(this.food);
    }

    if (this.isAccommodationSelected) {
      console.log("isFoodSelected: " + this.isFoodSelected);
      console.log("--isAccommodationSelected--: " + this.isAccommodationSelected);
      console.log("isHealthcareSelected: " + this.isHealthcareSelected);
      console.log("isForYouChecked: " + this.isForYouChecked);
      console.log("isForYourPetsChecked: " + this.isForYourPetsChecked);
      if (this.isForYouChecked || this.isForYourPetsChecked) {

      }
      else {
        this.toastr.warning('Please tick at least one option.');
      }
    }

    if (this.isHealthcareSelected) {
      console.log("isFoodSelected: " + this.isFoodSelected);
      console.log("isAccommodationSelected: " + this.isAccommodationSelected);
      console.log("--isHealthcareSelected--: " + this.isHealthcareSelected);
      console.log("isForYouChecked: " + this.isForYouChecked);
      console.log("isForYourPetsChecked: " + this.isForYourPetsChecked);
      if (this.isForYouChecked || this.isForYourPetsChecked) {

      }
      else {
        this.toastr.warning('Please tick at least one option.');
      }
    }
  }

  searchAllServices(event) {

    this.isNearestServiceSelected = false;
    this.areAllServicesSelected = true;
    this.getCurrentLocation();

    if (this.isFoodSelected) {
      this.foodService.getFoods()
        .subscribe(foods => {
          // console.log(foods);
          // this.foods = foods;
          this.allServices = foods;
          this.isFoodServiceMapVisiable = true;
          window.location.href = '#service-map';
        });
      // console.log(this.foods);
      // Redirect to service map
      console.log("--isFoodSelected--: " + this.isFoodSelected);
      console.log("isAccommodationSelected: " + this.isAccommodationSelected);
      console.log("isHealthcareSelected: " + this.isHealthcareSelected);
      console.log("----------------------");
      console.log("isNearestServiceSelected: " + this.isNearestServiceSelected);
      console.log("areAllServicesSelected: " + this.areAllServicesSelected);
      console.log("isFoodServiceMapVisiable: " + this.isFoodServiceMapVisiable);

    }

    if (this.isAccommodationSelected) {
      console.log("isFoodSelected: " + this.isFoodSelected);
      console.log("--isAccommodationSelected--: " + this.isAccommodationSelected);
      console.log("isHealthcareSelected: " + this.isHealthcareSelected);
      console.log("isForYouChecked: " + this.isForYouChecked);
      console.log("isForYourPetsChecked: " + this.isForYourPetsChecked);
      if (this.isForYouChecked || this.isForYourPetsChecked) {

      }
      else {
        this.toastr.warning('Please tick at least one option.');
      }
    }

    if (this.isHealthcareSelected) {
      console.log("isFoodSelected: " + this.isFoodSelected);
      console.log("isAccommodationSelected: " + this.isAccommodationSelected);
      console.log("--isHealthcareSelected--: " + this.isHealthcareSelected);
      console.log("isForYouChecked: " + this.isForYouChecked);
      console.log("isForYourPetsChecked: " + this.isForYourPetsChecked);
      if (this.isForYouChecked || this.isForYourPetsChecked) {

      }
      else {
        this.toastr.warning('Please tick at least one option.');
      }
    }
  }

  clickFood(event) {
    this.isCheckboxVisible = false;
    this.isFoodSelected = true;
    this.isAccommodationSelected = false;
    this.isHealthcareSelected = false;
  }

  clickAccommodation(event) {
    this.isCheckboxVisible = true;
    this.isFoodSelected = false;
    this.isAccommodationSelected = true;
    this.isHealthcareSelected = false;
  }

  clickHealthcare(event) {
    this.isCheckboxVisible = true;
    this.isFoodSelected = false;
    this.isAccommodationSelected = false;
    this.isHealthcareSelected = true;
  }

  tickForYou(event) {
    if (event.target.checked) {
      this.isForYouChecked = true;
    } else {
      this.isForYouChecked = false;
    }
  }

  tickForYourPets(event) {
    if (event.target.checked) {
      this.isForYourPetsChecked = true;
    } else {
      this.isForYourPetsChecked = false;
    }
  }

  clickedMarker() {
    console.log('Marker clicked');
  }

}
