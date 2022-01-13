import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ExhibitsService } from '../../services/exhibits.service';
import { sortBy } from 'sort-by-typescript';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exhibits',
  templateUrl: './exhibits.component.html',
  styleUrls: ['./exhibits.component.css']
})
export class ExhibitsComponent implements OnInit {

  constructor(private exhibitsService: ExhibitsService, private router: Router) { }

  data: any;
  copyData: any;
  p: number = 1;
  value: any;
  plannerNumber: string;  
  rating: any;
  categories: any;
  username: string;

  cultures = new FormControl();
  ListCultures: string[] = ['Roman', 'Egyptian', 'Greek', 'Chinese', 'Byzantine'];

  centuries = new FormControl();
  ListCenturies: string[] = ["10th century BCE", "11th century", "15th century", "15th-13th century BCE", "18th century", "19th century", "19th-20th century", 
                            "1st century BCE-1st century CE", "1st century BCE-2nd century CE", "1st-2nd century CE", "2nd-3rd century CE", "2nd-5th century CE",
                            "3rd century BCE", "3rd century CE", "3rd-2nd millennium BCE", "4th century BCE", "5th century", "5th-6th century","5th-7th century",
                            "6th century", "6th century BCE", "6th-9th century", "7th century BCE", "7th-1st century BCE", "mid 7th-late 1st century BCE"];

  classifications = new FormControl();
  ListClassifications: string[] = [ "Armor", "Coins", "Jewelry", "Lighting Devices", "Measuring Devices", "Ritual Implements", "Sculpture", "Textile Arts",
                                  "Tools and Equipment", "Vessels", "Weapons and Ammunition"];

  periods = new FormControl();
  ListPeriods: string[] = ["Archaic period", "Bronze Age, Late", "Byzantine period", "Byzantine period, Early", "Classical period, Late", 
                          "Classical period, Late, to Early Hellenistic", "Fatimid period", "Hellenistic period, Early", "Late Period to Ptolemaic", 
                          "Late Period, Dynasty 26", "Middle Kingdom", "Ming dynasty, 1368-1644", "Northern Wei, 386-534", "Qing dynasty, 1644-1911", 
                          "Roman Imperial period", "Roman Imperial period, Middle", "Roman period", "Zhou dynasty, Western Zhou period, c. 1050-771 BCE"];

  times = new FormControl();
  ListTimes: number[] = [10, 20, 30];

  ratings = new FormControl();
  ListRatings: number[] = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.plannerNumber =localStorage.getItem("cartNumber");
    this.username = localStorage.getItem("username");
    this.findAll();
  }

  onSortChange(sortType: any){

    //SORT
    if (sortType.value == ""){
      this.findAll();
    }
    if (sortType.value == "title-asc"){
      
      this.data = this.data.sort(sortBy("title"));
    }
    if (sortType.value == "title-dsc"){

      this.data = this.data.sort(sortBy("-title"));
    }
    if (sortType.value == "price-asc"){

      this.data = this.data.sort(sortBy("price"));
    }
    if (sortType.value == "price-dsc"){

      this.data = this.data.sort(sortBy("-price"));
    }
    if (sortType.value == "time-asc"){

      this.data = this.data.sort(sortBy("tourTime"));
    }
    if (sortType.value == "time-dsc"){

      this.data = this.data.sort(sortBy("-tourTime"));
    }
    
  }

  onPriceChange(value: any){

    if (value.value > 0){

      this.data = this.copyData.filter(function(exhibit){
        return exhibit.price <= value.value;
      })

    }else if(value.value == 0){
      this.findAll();
    }
  }

  onCultureChange(){
    var cultures = this.cultures.value;
    if(cultures.length > 0){
      this.data = this.copyData.filter(function(item) {
        return cultures.includes(item.culture); 
      })
    }
    else
    {
      this.findAll();
    }
  }

  onCenturyChange(){
    var centuries = this.centuries.value;
    if(centuries.length > 0){
      this.data = this.copyData.filter(function(item) {
        return centuries.includes(item.century); 
      })
    }
    else
    {
      this.findAll();
    }
  }

  onClassificationChange(){
    var classifications = this.classifications.value;
    if(classifications.length > 0){
      this.data = this.copyData.filter(function(item) {
        return classifications.includes(item.classification); 
      })
    }
    else
    {
      this.findAll();
    }
  }

  onPeriodChange(){
    var periods = this.periods.value;
    if(periods.length > 0){
      this.data = this.copyData.filter(function(item) {
        return periods.includes(item.period); 
      })
    }
    else
    {
      this.findAll();
    }
  }

  onTimeChange(){
    var times = this.times.value;
    if(times.length > 0){
      this.data = this.copyData.filter(function(item) {
        return times.includes(item.tourTime); 
      })
    }
    else
    {
      this.findAll();
    }
    
  }

  onRatingChange(){
    var ratings = this.ratings.value;
    if(ratings.length > 0){
      this.data = this.copyData.filter(function(item) {
        return ratings.includes(item.rating); 
      })
    }
    else
    {
      this.findAll();
    }
    
  }

  public findAll(): any {
    this.exhibitsService.findAll().subscribe(value => { this.data = value; this.copyData = value; });
  }

  search(search: any){

    if (search.value == ""){
      this.findAll();
    }
    else{
      this.exhibitsService.findAllByName(search.value.trim()).subscribe(value => { this.data = value; });
    }
  }

  public showOneExibit(id: String): any {
    this.exhibitsService.showExhibit(id);
  }

  public filterCategories(arr2, arr3, type)
  {
    
  }

}
