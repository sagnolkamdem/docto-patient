import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tabiblib';
  pageTitle = 'Tabiblib';
  currentYear: any = new Date().getFullYear();
  sidebar: any [] = [];
  width = 100;
  scrollingPositon = 0;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title,) { }

  ngAfterViewInit(): void {
    // Scroll to Top
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    window.onscroll = (e) => {
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollingPositon = (winScroll / height) * 100;
    };

    // console.log($('body').text());
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const childRoute = this.getChild(this.activatedRoute);
      childRoute.data.subscribe((data: any) => {
        this.pageTitle = data.title;
        this.title = data.title + ' - Tabiblib';
        this.sidebar = data.sidebar;
        this.titleService.setTitle(this.title);
      });
    });
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    }
    else {
      return activatedRoute;
    }
  }
}
