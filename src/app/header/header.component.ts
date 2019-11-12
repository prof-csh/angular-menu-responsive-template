import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOptions = ["Policy", "Entity", "Person", "Documents"];
  toggleClass: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method to search form based on search type
   * @param searchType
   * @param searchText
   */
  searchRecord(searchType:string, searchText:string) {
    console.log(searchType);
  }

  /**
   * Method to toggle menu
   */
  toggleMenu() {
    this.toggleClass = !this.toggleClass;
  }

}
