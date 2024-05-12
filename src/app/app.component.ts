import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chrome-sidepanel';
  private router = inject(Router);
  showNavMenu = false;

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      console.log(event.urlAfterRedirects); // logs the current path
      if(event.urlAfterRedirects === '/options'){
        this.showNavMenu = false;
      } else {
        this.showNavMenu = true;
      }
    });
  }
}
