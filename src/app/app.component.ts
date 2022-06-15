import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minimus';
  
  showMenu = false;

  darkModeActive: boolean = false;

  @Input() foo : any;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch(){
    this.darkModeActive = !this.darkModeActive;
  }

  userData = [
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Jane"
    },
    {
      id: 3,
      name: "Tom"
    }
  ];
  
  outFunction(n:any){
    console.log(n);
  }

}
