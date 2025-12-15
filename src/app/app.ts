import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Card } from './card/card';
import { Footer } from './footer/footer';
import { Logo } from './logo/logo';
import { Carosol } from './carosol/carosol';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Logo,Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Firstproject');
}
