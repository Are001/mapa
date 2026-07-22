import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '@environments/environment';
//import { environment } from 'environments/environment';ents/environment';

@Component({
  selector: 'app-gifs-side-menu-header',
  //imports: [RouterOutlet,],
  templateUrl: './gifs-side-menu-header.component.html',
  styleUrl: './gifs-side-menu-header.component.css'
})
export class GifsSideMenuHeaderComponent {
  envs = environment

}
