import { Component, signal } from "@angular/core";

@Component({
  templateUrl: `./hero-page.component.html`,

})

export class HeroPageComponent {

  name = signal("Ironman");
  age = signal(45);

  getHeroDescription(): string {
    return `${ this.name() } - ${ this.age() }`;
  }

    changeHero(){
    this.name.set("Spider");
    this.age.set(22);
    }

    resetForm() {
    this.name.set("Ironman");
    this.age.set(45);
    }

    changeAge(){
    this.age.set(60);
    }


  }

