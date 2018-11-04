import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';

import { Hero } from '../hero';
import {catchError, tap} from 'rxjs/internal/operators';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    debugger;
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).pipe(
      tap(_ => console.log(`fetching hero by id: ${id}`)),
      map(users => users[0]),
      map(user => user.userName === givenUser.userName && user.password === givenUser.password),
      catchError(this.handleError('isValid', `could not fetch user: ${givenUser.userName}`, false))
    );
      // .subscribe(
      //   (hero) => this.hero = hero,
      //   (error) => console.log(`ould not fetch hero by id:${id}`);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
