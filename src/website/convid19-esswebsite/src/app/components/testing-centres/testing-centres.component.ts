import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-centres',
  templateUrl: './testing-centres.component.html',
  styleUrls: ['./testing-centres.component.css']
})
export class TestingCentresComponent implements OnInit {

  
  testingCentres = [


    {
      name: "Namibian Institute of Pathology (NIP)",
      about: "NIP is the largest diagnostic pathology service provider in Namibia. For testing, Please bring along a doctor’s referral form. The test results will be forwarded to your doctor who will contact you within 48 hours with your results. Price N$ 1100.00.",
      coordinates: {
        latitude: -22.552113,
        longitude: 17.079843
      }
    },

    {
      name: "Pathcare Namibia",
      about: " PathCare Namibia is a private pathology practice which strives to promote the health of the population by providing accessible, affordable, appropriate and equitable quality pathology services to all Namibians. For testing, Please bring along a doctor’s referral form. The turnaround time range between 2 to 5 days for test done by Path-care. Price N$ 1100.00",
      coordinates: {
        latitude: -22.550549,
        longitude: 17.090783
      }
    },
    {
    name: "Robert Mugabe Clinic",
    about: "Public healthcare organisation in Windhoek has commenced with the first screening of possible COVID-19 suspected cases.",
    coordinates: {
      latitude: -22.561359,
      longitude: 17.085626
    }
    }

  ]

  latitude: number;
  longitude: number;
  name: any;
  coordinates: string;
  about: string;
  

  centre = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onMapClick(event) {
    for (let i = 0; i < this.testingCentres.length; i++) {
      this.testingCentres[i].coordinates.latitude = event.coords.lat;
      this.testingCentres[i].coordinates.longitude = event.coords.lng;
    this.centre = true;
    }

  }

  setTestCentres() {
    switch (this.name) {
      case "Namibian Institute of Pathology (NIP)": {
        ({
          name: 'Namibian Institute of Pathology (NIP)',
          latitude: `${this.testingCentres[0].coordinates.latitude}`,
          longitude: `${this.testingCentres[0].coordinates.longitude}`,
        })

        break;
      }
      case "Pathcare Namibia": {
        ({
          name: 'Pathcare Namibia',
          latitude: `${this.testingCentres[0].coordinates.latitude}`,
          longitude: `${this.testingCentres[0].coordinates.longitude}`,
        })

      

        break;
      }
      case "Robert Mugabe Clinic": {
        ({
          name: 'Robert Mugabe Clinic',
          latitude: `${this.testingCentres[0].coordinates.latitude}`,
          longitude: `${this.testingCentres[0].coordinates.longitude}`,
        })

       
        }
        break;
      }
       console.log(this.name);
    }
  
  
  
  setTestingCentres() {

    for (let i = 0; i < this.testingCentres.length; i++) {
      if (  this.name =  this.testingCentres[i].name) {
        this.latitude === this.testingCentres[i].coordinates.latitude
        this.longitude = this.testingCentres[i].coordinates.longitude;
        //this.centre = true;
        console.log(this.longitude);
        console.log(this.latitude);
        console.log(this.name);
      }
    }
  }

}
