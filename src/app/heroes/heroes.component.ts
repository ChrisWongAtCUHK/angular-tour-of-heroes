import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [FormsModule, NgFor, RouterLink],
})
export class HeroesComponent {
  heroes = HEROES;

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
