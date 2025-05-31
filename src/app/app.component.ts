import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  protected title = 'chrome-sidepanel';
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  showNavMenu = false;

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      console.log(event.urlAfterRedirects); // logs the current path

      const fragment = this.route.snapshot.fragment;
      // if (fragment) {
      //   console.log(`Fragment exists: ${fragment}`);
      // } else {
      //   console.log('No fragment');
      // }
      if (event.urlAfterRedirects === '/options' || fragment === 'options') {
        this.showNavMenu = false;
      } else {
        this.showNavMenu = true;
      }
    });
  }
}
